# Saisree Krishnarajendran — Résumé Site

A single-page résumé site built with the stack Saisree uses at Trimble: **Angular 20**
(standalone components, signals, `@if`/`@for` control flow, zoneless change detection),
**NgRx Signal Store**, **RxJS**, and **config-driven reactive forms**. It's prerendered to
static HTML at build time, so GitHub Pages serves a complete page that search engines and
recruiters see without waiting for JavaScript, which then hydrates it.

## Where things live

```
src/app/data/resume.data.ts      ← all résumé content (edit this to update the site)
src/app/data/resume.models.ts    typed shapes for that content
src/app/state/resume.store.ts    NgRx Signal Store: content, years-of-experience, product tech filter
src/app/state/ui.store.ts        NgRx Signal Store: theme, mobile menu, active section (rxMethod)
src/app/sections/                hero, about, skills, experience, projects, contact
src/app/sections/contact/contact-form.config.ts   contact form fields + Formspree endpoint
src/app/layout/                  header, footer
src/app/shared/                  icon, in-page scroll links, reveal-on-scroll, scroll-spy stream
src/styles.css                   design tokens (light/dark) and all styling
public/                          résumé PDF + favicon (copied to the site root)
.github/workflows/deploy.yml     builds and publishes to GitHub Pages on every push to main
```

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Publish on GitHub Pages

1. Create a repository on GitHub, e.g. `saisree-resume` (the site will be at
   `https://<username>.github.io/saisree-resume/`). Name it `<username>.github.io` to serve
   it from the root instead.
2. Push this folder to the repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Résumé site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages** and set **Source: GitHub Actions**.
4. The **Deploy to GitHub Pages** workflow runs on every push to `main` (and can be re-run from
   the Actions tab). It sets the correct base path for the repo name automatically.

Using a custom domain? Add a repository variable `BASE_HREF` with the value `/`
(Settings → Secrets and variables → Actions → Variables), and add the domain under Settings → Pages.

## Contact form

GitHub Pages can't receive form posts. Until an endpoint is configured, **Send** opens the
visitor's email app with the message filled in. To have messages delivered by email:

1. Create a free form at [formspree.io](https://formspree.io) with `saisreekrishnan@gmail.com` as the destination.
2. Paste its endpoint into `CONTACT_ENDPOINT` in `src/app/sections/contact/contact-form.config.ts`,
   e.g. `'https://formspree.io/f/abcd1234'`.

Fields are generated from `CONTACT_FIELDS` in the same file: add, remove, or reorder entries
and the form, validation, and error messages follow.

## Updating content

- **Text, jobs, projects, skills:** `src/app/data/resume.data.ts`. Bullet points and impact
  lines may use `<strong>` for emphasis.
- **Years of experience** is calculated from `careerStart`, so it stays current with each build.
  The workflow only rebuilds on a push, so push something (or re-run the workflow) once a year.
- **Résumé PDF:** replace `public/Saisree_Krishnarajendran_Resume.pdf`, keeping the same file name.
- **GitHub profile:** set `github` in `PROFILE` and a GitHub link appears in the contact section.
