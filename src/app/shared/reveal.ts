import { afterNextRender, DestroyRef, Directive, ElementRef, inject } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view. The hidden starting state is
 * only applied in the browser, after hydration, so the prerendered HTML is always visible
 * (no JS, crawlers, or a failed script never see blank sections).
 */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('is-visible');
              io.disconnect();
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      el.classList.add('reveal');
      io.observe(el);
      destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
