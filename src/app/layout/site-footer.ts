import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollTo } from '../shared/scroll-to';
import { ResumeStore } from '../state/resume.store';

@Component({
  selector: 'app-site-footer',
  imports: [ScrollTo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="wrap footer__inner">
        <p>© {{ year }} {{ resume.profile().name }} · Built with Angular 20 &amp; NgRx</p>
        <a appScrollTo="top">Back to top ↑</a>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly resume = inject(ResumeStore);
  protected readonly year = new Date().getFullYear();
}
