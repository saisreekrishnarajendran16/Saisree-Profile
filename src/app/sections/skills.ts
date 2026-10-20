import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { ResumeStore } from '../state/resume.store';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="skills" aria-labelledby="skills-title">
      <div class="wrap two-col">
        <header class="section__head">
          <p class="section__num">02</p>
          <h2 id="skills-title">Skills &amp; expertise</h2>
        </header>
        <div class="section__body">
          <h3 class="sub-title">Technical</h3>
          <div class="skill-grid">
            @for (group of resume.skillGroups(); track group.title) {
              <article class="skill-card" appReveal>
                <h4>{{ group.title }}</h4>
                <ul class="tags">
                  @for (item of group.items; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </article>
            }
          </div>

          <h3 class="sub-title">Leadership &amp; delivery</h3>
          <ul class="soft-grid">
            @for (s of resume.softSkills(); track s.title) {
              <li appReveal><strong>{{ s.title }}</strong><span>{{ s.detail }}</span></li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly resume = inject(ResumeStore);
}
