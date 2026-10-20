import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { ResumeStore } from '../state/resume.store';

@Component({
  selector: 'app-hero',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly resume = inject(ResumeStore);
}
