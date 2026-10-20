import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { distinctUntilChanged, pipe, tap } from 'rxjs';

export type Theme = 'light' | 'dark';

interface UiState {
  /** null = follow the operating system setting. */
  theme: Theme | null;
  menuOpen: boolean;
  activeSection: string;
}

const THEME_KEY = 'theme';

export const UiStore = signalStore(
  { providedIn: 'root' },
  withState<UiState>({ theme: null, menuOpen: false, activeSection: '' }),
  withMethods((store) => {
    const document = inject(DOCUMENT);
    const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    function effectiveTheme(): Theme {
      const chosen = store.theme();
      if (chosen) return chosen;
      return isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return {
      toggleTheme(): void {
        const next: Theme = effectiveTheme() === 'dark' ? 'light' : 'dark';
        patchState(store, { theme: next });
        document.documentElement.setAttribute('data-theme', next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch {
          /* storage blocked: the choice still applies for this visit */
        }
      },
      toggleMenu(): void {
        patchState(store, { menuOpen: !store.menuOpen() });
      },
      closeMenu(): void {
        patchState(store, { menuOpen: false });
      },
      /** Feeds the scroll-spy stream into state, ignoring repeats. */
      trackActiveSection: rxMethod<string>(
        pipe(
          distinctUntilChanged(),
          tap((id) => patchState(store, { activeSection: id })),
        ),
      ),
      /** Picks up the theme the pre-paint script in index.html already applied. */
      syncThemeFromDocument(): void {
        const attr = document.documentElement.getAttribute('data-theme');
        patchState(store, { theme: attr === 'dark' || attr === 'light' ? attr : null });
      },
    };
  }),
  withHooks({
    onInit(store) {
      if (isPlatformBrowser(inject(PLATFORM_ID))) store.syncThemeFromDocument();
    },
  }),
);
