import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import {
  CASE_STUDIES,
  FACTS,
  METRICS,
  NAV_SECTIONS,
  PRODUCTS,
  PROFILE,
  SKILL_GROUPS,
  SOFT_SKILLS,
  TECH_FILTERS,
  TIMELINE,
} from '../data/resume.data';
import { Metric } from '../data/resume.models';

const ALL = 'All';

/** Whole years elapsed since an ISO date, e.g. a career start month. */
function yearsSince(iso: string): number {
  const start = new Date(iso);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth()) years--;
  return years;
}

export const ResumeStore = signalStore(
  { providedIn: 'root' },
  withState({
    profile: PROFILE,
    nav: NAV_SECTIONS,
    metrics: METRICS,
    skillGroups: SKILL_GROUPS,
    softSkills: SOFT_SKILLS,
    timeline: TIMELINE,
    facts: FACTS,
    caseStudies: CASE_STUDIES,
    products: PRODUCTS,
    techFilters: TECH_FILTERS,
    activeTech: ALL,
  }),
  withComputed(({ profile, metrics, products, techFilters, activeTech }) => ({
    /** Whole years since the first role; recomputed on every build and page load. */
    yearsOfExperience: computed(() => yearsSince(profile().careerStart)),
    allMetrics: computed<Metric[]>(() => [
      { value: `${yearsSince(profile().careerStart)} yrs`, label: 'building enterprise web platforms' },
      ...metrics(),
    ]),
    /** Filter chips with how many products use each technology. */
    techOptions: computed(() => [
      { label: ALL, count: products().length },
      ...techFilters().map((f) => ({
        label: f.label,
        count: products().filter((p) => p.stack.some((s) => f.match.test(s))).length,
      })),
    ]),
    visibleProducts: computed(() => {
      const filter = techFilters().find((f) => f.label === activeTech());
      return filter ? products().filter((p) => p.stack.some((s) => filter.match.test(s))) : products();
    }),
  })),
  withMethods((store) => ({
    setActiveTech(label: string): void {
      patchState(store, { activeTech: label });
    },
  })),
);
