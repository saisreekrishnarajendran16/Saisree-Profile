import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { ResumeStore } from '../state/resume.store';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly resume = inject(ResumeStore);
}
