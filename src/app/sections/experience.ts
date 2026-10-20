import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { ResumeStore } from '../state/resume.store';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="wrap two-col">
        <header class="section__head">
          <p class="section__num">03</p>
          <h2 id="experience-title">Experience &amp; education</h2>
        </header>
        <div class="section__body">
          <ol class="timeline">
            @for (entry of resume.timeline(); track entry.title + entry.period) {
              <li class="tl-item" appReveal
                [class.tl-item--current]="entry.current" [class.tl-item--edu]="entry.kind === 'education'">
                <div class="tl-head">
                  <div>
                    <h3>
                      {{ entry.title }}
                      @if (entry.titleNote) {
                        <span class="muted">{{ entry.titleNote }}</span>
                      }
                    </h3>
                    <p class="tl-org">{{ entry.org }}</p>
                  </div>
                  <p class="tl-date">{{ entry.period }}</p>
                </div>
                @if (entry.note) {
                  <p class="tl-note">{{ entry.note }}</p>
                }
                @if (entry.bullets.length) {
                  <ul class="bullets">
                    @for (b of entry.bullets; track $index) {
                      <li [innerHTML]="b"></li>
                    }
                  </ul>
                }
              </li>
            }
          </ol>

          <div class="facts">
            @for (f of resume.facts(); track f.label) {
              <div class="fact" appReveal>
                <p class="fact__label">{{ f.label }}</p>
                <p class="fact__title">{{ f.title }}</p>
                @if (f.detail) {
                  <p class="fact__sub">{{ f.detail }}</p>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Experience {
  protected readonly resume = inject(ResumeStore);
}
