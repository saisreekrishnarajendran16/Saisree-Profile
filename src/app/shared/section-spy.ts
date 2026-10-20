import { Observable } from 'rxjs';

/**
 * Emits the id of whichever section crosses the middle band of the viewport, for the
 * nav's active-link highlight. Browser-only: call it after render.
 */
export function observeActiveSection(doc: Document, ids: readonly string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) subscriber.next(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const el = doc.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  });
}
