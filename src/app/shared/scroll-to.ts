import { DOCUMENT } from '@angular/common';
import { Directive, inject, input } from '@angular/core';
import { UiStore } from '../state/ui.store';

/**
 * In-page link: <a appScrollTo="about">. Renders a real href="#about" (works without JS and
 * in the prerendered HTML), then smooth-scrolls in place instead of letting the browser
 * resolve "#about" against <base href>, which would reload the page when the site is
 * served from a sub-path such as /repo/index.html.
 */
@Directive({
  selector: 'a[appScrollTo]',
  host: {
    '[attr.href]': "'#' + appScrollTo()",
    '(click)': 'onClick($event)',
  },
})
export class ScrollTo {
  readonly appScrollTo = input.required<string>();

  private readonly document = inject(DOCUMENT);
  private readonly ui = inject(UiStore);

  onClick(event: MouseEvent): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = this.document.getElementById(this.appScrollTo());
    if (!target) return;

    event.preventDefault();
    this.ui.closeMenu();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

    // Move keyboard focus with the scroll so the next Tab continues from the section.
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });

    const { pathname, search } = window.location;
    history.replaceState(history.state, '', `${pathname}${search}#${this.appScrollTo()}`);
  }
}
