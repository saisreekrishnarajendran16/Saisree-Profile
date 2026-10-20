import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { ResumeStore } from '../state/resume.store';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="wrap two-col">
        <header class="section__head">
          <p class="section__num">01</p>
          <h2 id="about-title">About</h2>
        </header>
        <div class="section__body">
          <div class="prose" appReveal>
            <p>
              Senior Full-Stack Engineer with <strong>{{ resume.yearsOfExperience() }} years</strong> designing,
              architecting, and delivering enterprise-scale web applications across
              <strong>construction technology</strong> and <strong>healthcare</strong>. I own end-to-end
              architecture for 20+ modules spanning <strong>C# / .NET Core Web API</strong> services and
              <strong>Angular (v5–20)</strong> clients inside a mono-repo platform serving 10,000+ users.
            </p>
            <p>
              My focus is <strong>distributed systems</strong> and <strong>performance engineering</strong>:
              saga-orchestrated transactions over Azure Service Bus with full rollback, real-time state sync
              through SignalR, and client-side data layers that keep the UI responsive across hundreds of
              thousands of records.
            </p>
            <p>
              I lead proof-of-concept research that sets platform-wide technology direction, review code, and
              mentor junior engineers in Agile/Scrum teams shipping quarterly releases to global stakeholders.
              Microsoft Certified in Copilot for Microsoft 365, and I use AI-assisted development in
              day-to-day engineering work.
            </p>
          </div>
          <div class="goal" appReveal>
            <p class="goal__label">What I'm looking for next</p>
            <p>{{ resume.profile().lookingFor }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly resume = inject(ResumeStore);
}
