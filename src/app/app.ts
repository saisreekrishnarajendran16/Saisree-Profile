import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, inject, Injector } from '@angular/core';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';
import { About } from './sections/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience';
import { Hero } from './sections/hero';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { ScrollTo } from './shared/scroll-to';
import { observeActiveSection } from './shared/section-spy';
import { ResumeStore } from './state/resume.store';
import { UiStore } from './state/ui.store';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, SiteFooter, Hero, About, Skills, Experience, Projects, Contact, ScrollTo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" appScrollTo="main">Skip to content</a>
    <app-site-header />
    <main id="main">
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-contact />
    </main>
    <app-site-footer />
  `,
})
export class App {
  constructor() {
    const ui = inject(UiStore);
    const resume = inject(ResumeStore);
    const document = inject(DOCUMENT);
    const injector = inject(Injector);

    // Scroll-spy only exists in the browser. Passing this component's injector ties the
    // subscription to its lifetime, since afterNextRender runs outside the injection context.
    // "top" (the hero) is watched too, so no nav link stays highlighted back at the top.
    afterNextRender(() => {
      const ids = ['top', ...resume.nav().map((s) => s.id)];
      ui.trackActiveSection(observeActiveSection(document, ids), { injector });
    });
  }
}
