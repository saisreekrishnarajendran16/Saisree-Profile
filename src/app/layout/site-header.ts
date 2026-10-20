import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Icon } from '../shared/icon';
import { ScrollTo } from '../shared/scroll-to';
import { ResumeStore } from '../state/resume.store';
import { UiStore } from '../state/ui.store';

@Component({
  selector: 'app-site-header',
  imports: [Icon, ScrollTo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'ui.closeMenu()' },
  templateUrl: './site-header.html',
})
export class SiteHeader {
  protected readonly resume = inject(ResumeStore);
  protected readonly ui = inject(UiStore);
}
