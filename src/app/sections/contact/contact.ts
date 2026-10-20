import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { ResumeStore } from '../../state/resume.store';
import { CONTACT_ENDPOINT, CONTACT_FIELDS, FieldConfig } from './contact-form.config';

type Status = 'idle' | 'invalid' | 'sending' | 'sent' | 'error' | 'mailto';

function validatorsFor(field: FieldConfig): ValidatorFn[] {
  const v: ValidatorFn[] = [];
  if (field.required) v.push(Validators.required, Validators.pattern(/\S/));
  if (field.type === 'email') v.push(Validators.email);
  if (field.maxLength) v.push(Validators.maxLength(field.maxLength));
  return v;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly resume = inject(ResumeStore);
  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly fields = CONTACT_FIELDS;
  protected readonly form = new FormGroup<Record<string, FormControl<string>>>(
    Object.fromEntries(
      CONTACT_FIELDS.map((f) => [f.name, new FormControl('', { nonNullable: true, validators: validatorsFor(f) })]),
    ),
  );
  protected readonly status = signal<Status>('idle');
  /** "linkedin.com/in/…" for display, from the full profile URL. */
  protected readonly linkedinLabel = this.resume
    .profile()
    .linkedin.replace(/^https?:\/\/(www\.)?/, '')
    .replace(/\/$/, '');

  protected control(name: string): FormControl<string> {
    return this.form.controls[name];
  }

  protected errorFor(field: FieldConfig): string | null {
    const c = this.control(field.name);
    if (!c.invalid || !c.touched) return null;
    if (c.hasError('required') || c.hasError('pattern')) return `${field.label} is required.`;
    if (c.hasError('email')) return 'Enter a valid email address.';
    if (c.hasError('maxlength')) return `Keep this under ${field.maxLength} characters.`;
    return null;
  }

  protected submit(honeypot: string): void {
    if (honeypot) return; // filled in by a bot, never by a person

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set('invalid');
      const firstInvalid = this.fields.find((f) => this.control(f.name).invalid);
      if (firstInvalid) this.document.getElementById(`cf-${firstInvalid.name}`)?.focus();
      return;
    }

    const value = this.form.getRawValue();
    const email = this.resume.profile().email;

    if (!CONTACT_ENDPOINT) {
      const name = value['name'] ?? '';
      const company = value['company'] ? `, ${value['company']}` : '';
      const subject = `Website enquiry from ${name}`;
      const body = `${value['message']}\n\n— ${name}${company} (${value['email']})`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.status.set('mailto');
      return;
    }

    this.status.set('sending');
    this.http
      .post(CONTACT_ENDPOINT, value, { headers: { Accept: 'application/json' } })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.form.reset();
          this.status.set('sent');
        },
        error: () => this.status.set('error'),
      });
  }
}
