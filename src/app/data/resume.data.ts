// All résumé content lives here. Edit this file to update the site; the
// components only decide how it looks.
import {
  CaseStudy,
  Fact,
  Metric,
  NavSection,
  Product,
  Profile,
  SkillGroup,
  SoftSkill,
  TechFilter,
  TimelineEntry,
} from './resume.models';

export const PROFILE: Profile = {
  name: 'Saisree Krishnarajendran',
  initials: 'SK',
  title: 'Senior Software Engineer · Trimble',
  headline: 'Lead Full-Stack Developer — Angular & .NET Core',
  lede:
    'I design and ship enterprise-scale web platforms: distributed transaction workflows, ' +
    'client-side data layers built for hundreds of thousands of records, and the performance ' +
    'engineering that turns minutes into seconds.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'saisreekrishnan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saisree-krishnarajendran/',
  github: '',
  resumePdf: 'Saisree_Krishnarajendran_Resume.pdf',
  careerStart: '2017-08-01',
  lookingFor:
    'Senior or lead full-stack roles where I can own architecture end to end, especially ' +
    'Angular + .NET platforms with real scale, distributed workflows, and performance challenges.',
};

export const NAV_SECTIONS: NavSection[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/** The first metric ("years") is computed from PROFILE.careerStart by the store. */
export const METRICS: Metric[] = [
  { value: '20+', label: 'full-stack modules owned end to end' },
  { value: '10k+', label: 'users on the platform' },
  { value: '94%', label: 'faster grid reload (150s → 9s)' },
  { value: '95%+', label: 'unit test coverage on owned features' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend engineering',
    items: ['Angular 5–20', 'TypeScript', 'NgRx', 'Redux', 'RxJS', 'Web Workers', 'Angular Material', 'Dynamic Forms', 'HTML5', 'CSS3', 'Grid Performance'],
  },
  {
    title: 'Backend engineering',
    items: ['C#', '.NET Core', '.NET 8', 'ASP.NET Core 8.0', '.NET Framework', 'Web API', 'RESTful API Design', 'Entity Framework', 'LINQ', 'Microservices', 'SignalR', 'MassTransit'],
  },
  {
    title: 'Distributed systems',
    items: ['Saga Orchestration', 'State Machines', 'Routing Slips', 'Distributed Transactions', 'Compensation & Rollback', 'Event-Driven Architecture', 'Real-Time Messaging', 'Async Processing'],
  },
  {
    title: 'Data & cloud',
    items: ['MongoDB', 'Aggregation Pipelines', 'MS SQL Server', 'Microsoft Azure', 'Azure Service Bus', 'Data Modeling', 'Query Optimization', 'OPFS', 'IndexedDB', 'PouchDB'],
  },
  {
    title: 'Architecture & design',
    items: ['Mono-repo Architecture', 'System Design', 'HLD & LLD', 'Data Structures & Algorithms', 'Multi-Threaded Processing', 'Client-Side Storage', 'Offline-First Design', 'POC Leadership'],
  },
  {
    title: 'Quality & tooling',
    items: ['Code Review', 'Unit & Integration Testing', 'Deployment Management', 'Git', 'GitHub Copilot', 'Visual Studio', 'VS Code', 'Postman', 'Jira', 'Miro', 'GitKraken'],
  },
];

export const SOFT_SKILLS: SoftSkill[] = [
  { title: 'Technical mentoring', detail: '4–5 junior developers' },
  { title: 'Scrum Master', detail: 'Sprint delivery alongside full development work' },
  { title: 'Stakeholder & architecture reviews', detail: 'Primary liaison with Product Owners and Architects' },
  { title: 'Agile delivery', detail: 'Sprint planning, estimation, backlog grooming' },
  { title: 'Cross-team collaboration', detail: 'Advisory Group, global embedded support' },
  { title: 'Onshore / offshore coordination', detail: 'Product demos and QER presentations' },
];

export const TIMELINE: TimelineEntry[] = [
  {
    kind: 'work',
    title: 'Senior Software Engineer',
    titleNote: '(Software Engineer II)',
    org: 'Trimble Information Technologies · Chennai, India',
    period: 'Feb 2020 — Present',
    current: true,
    note: 'Joined as Software Engineer I; promoted to Software Engineer II.',
    bullets: [
      'Own end-to-end design, architecture, and delivery of <strong>20+ full-stack modules</strong> in a mono-repo construction-estimation platform serving 10,000+ users.',
      'Architected a <strong>distributed transaction system</strong> using MassTransit State Machines and Saga Orchestration over Azure Service Bus, syncing real-time state to clients via SignalR.',
      'Integrated MassTransit Routing Slips to automate compensation and rollback across multi-stage processes — <strong>100% recoverability</strong> from partial failures.',
      'Cut grid reload time by <strong>94% (150s → 9s)</strong> with a custom SHA-256 checksumming strategy for change detection.',
      'Reduced a critical load-time bottleneck from <strong>12 minutes to under 1 minute</strong> with an OPFS-based client-side data layer and Web Workers.',
      'Designed and optimized MongoDB aggregation pipelines powering estimation and reporting workflows over large take-off datasets.',
      "Led POC and spike research that selected the platform's core stack (ASP.NET 8.0, MongoDB, MassTransit, SignalR, Angular 20, NgRx, OPFS, PouchDB/IndexedDB), each adopted platform-wide; prototyped AI agent-based resolution of pull-request review comments.",
      'Review 4–5 peer PRs per sprint and manage deployments for a team of 8–10 engineers — <strong>90% on-time delivery</strong>, <strong>95%+ unit test coverage</strong>.',
      'Mentor 4–5 junior developers; member of a cross-team Advisory Group; stepped into Scrum Master duties alongside development.',
    ],
  },
  {
    kind: 'work',
    title: 'Associate Consultant',
    org: 'Atos | Syntel Private Limited · Pune, India',
    period: 'Aug 2017 — Feb 2020',
    bullets: [
      'Redefined the architecture of a physician performance-evaluation platform serving <strong>10 healthcare facilities</strong> and ~1,000 physicians (C# / .NET, Web API, Entity Framework, SQL Server).',
      'Cut page load times from <strong>5–20 minutes to under 1 minute</strong> through architectural redesign and lazy loading.',
      'Built and deployed full-stack features with C#, .NET Framework, Entity Framework, LINQ, Web API, and Angular 5/6 with Angular Material.',
    ],
  },
  {
    kind: 'education',
    title: 'B.E., Computer Science Engineering',
    org: 'Jansons Institute of Technology · Coimbatore',
    period: 'May 2017',
    bullets: [],
  },
];

export const FACTS: Fact[] = [
  { label: 'Certification', title: 'Microsoft Certified: Copilot for Microsoft 365 Applied Skills' },
  {
    label: 'Recognition',
    title: 'Glint Survey Advisory Board member',
    detail: 'Plus QER presentations, hackathons, and support on a new customer win',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    context: 'Live Count — 3D Quantity Take-off · Trimble',
    title: 'Grid reload: 150 seconds → 9 seconds',
    problem: 'Reloading the estimation grid took 150 seconds on large take-off datasets.',
    solution: 'Engineered a custom SHA-256 checksumming strategy for change detection, so only changed data is reloaded.',
    impact: '<strong>94% faster</strong> grid reload — 9 seconds.',
  },
  {
    context: 'Live Count — 3D Quantity Take-off · Trimble',
    title: 'Critical load: 12 minutes → under 1 minute',
    problem: 'Real-time calculation across hundreds of thousands of records blocked the UI for up to 12 minutes.',
    solution: 'Architected an OPFS-based client-side data layer with Web Workers, moving calculation onto background threads.',
    impact: 'Load time <strong>under 1 minute</strong> with a responsive UI throughout.',
  },
  {
    context: 'Microservices platform · Trimble',
    title: 'Distributed transactions with full rollback',
    problem: 'Complex multi-service workflows needed consistent state and safe recovery from partial failures.',
    solution: 'MassTransit Saga Orchestration and State Machines over Azure Service Bus, with Routing Slips for automated compensation and SignalR for real-time client updates.',
    impact: '<strong>100% recoverability</strong> from partial failures across multi-stage processes.',
  },
  {
    context: 'Professional Practice Evaluation · Atos | Syntel',
    title: 'Healthcare platform: 5–20 minutes → under 1 minute',
    problem: 'A physician evaluation platform for 10 facilities and ~1,000 physicians had page loads of 5–20 minutes.',
    solution: 'Redefined the application architecture and implemented lazy loading across the .NET / SQL Server stack.',
    impact: 'Pages load <strong>in under 1 minute</strong>, with sharply lower resource use.',
  },
];

export const PRODUCTS: Product[] = [
  {
    name: 'Live Count — 3D Quantity Take-off',
    org: 'Trimble',
    period: 'Feb 2023 — Present',
    status: 'In progress',
    summary: 'Next-generation 2D/3D building construction estimating platform; 3D estimation preparing for launch.',
    stack: ['ASP.NET 8.0', 'MongoDB', 'MassTransit', 'Azure Service Bus', 'SignalR', 'Angular 20', 'NgRx', 'RxJS', 'Web Workers', 'OPFS'],
  },
  {
    name: 'Estimation Construct',
    org: 'Trimble',
    period: 'Feb 2020 — Jan 2023',
    status: 'Shipped',
    summary: 'Web-based construction estimating product, including MEP estimation.',
    stack: ['C# .NET', 'ASP.NET', 'Web API', 'SQL Server', 'Angular 12', 'NgRx', 'RxJS'],
  },
  {
    name: 'Professional Practice Evaluation',
    org: 'Atos | Syntel',
    period: 'Jul 2018 — Jan 2020',
    status: 'Shipped',
    summary: 'Healthcare platform evaluating and improving physician performance across 10 facilities.',
    stack: ['C#', 'SQL Server', 'Web API', 'Entity Framework', 'LINQ', 'Angular 6', 'Angular Material'],
  },
  {
    name: 'Physician Link',
    org: 'Atos | Syntel',
    period: 'Oct 2017 — Jun 2018',
    status: 'Shipped',
    summary: 'Web application enabling physicians to manage professional and practice details.',
    stack: ['C#', 'SQL Server', 'Web API', 'Entity Framework', 'LINQ', 'Angular 5', 'Angular Material'],
  },
];

export const TECH_FILTERS: TechFilter[] = [
  { label: 'Angular', match: /^Angular/ },
  { label: '.NET', match: /C#|\.NET|ASP\.NET/ },
  { label: 'NgRx', match: /^NgRx$/ },
  { label: 'MongoDB', match: /^MongoDB$/ },
  { label: 'SQL Server', match: /^SQL Server$/ },
  { label: 'Azure', match: /Azure/ },
];
