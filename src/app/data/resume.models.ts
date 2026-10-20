export interface Profile {
  name: string;
  initials: string;
  title: string;
  headline: string;
  lede: string;
  location: string;
  email: string;
  linkedin: string;
  /** Leave empty until there is a public GitHub profile to show. */
  github: string;
  resumePdf: string;
  /** First month of professional experience; drives the "years" figure. */
  careerStart: string;
  lookingFor: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SoftSkill {
  title: string;
  detail: string;
}

export interface TimelineEntry {
  kind: 'work' | 'education';
  title: string;
  titleNote?: string;
  org: string;
  period: string;
  current?: boolean;
  note?: string;
  /** May contain <strong> for emphasis; rendered via [innerHTML]. */
  bullets: string[];
}

export interface Fact {
  label: string;
  title: string;
  detail?: string;
}

export interface CaseStudy {
  context: string;
  title: string;
  problem: string;
  solution: string;
  /** May contain <strong> for emphasis; rendered via [innerHTML]. */
  impact: string;
}

export interface Product {
  name: string;
  org: string;
  period: string;
  status: 'In progress' | 'Shipped';
  summary: string;
  stack: string[];
}

/** A technology filter on the products list; `match` is tested against each stack entry. */
export interface TechFilter {
  label: string;
  match: RegExp;
}

export interface NavSection {
  id: string;
  label: string;
}
