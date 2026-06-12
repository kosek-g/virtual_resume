# Virtual Resume

A personal online resume built as a single-page React application. Responsive, accessible, dark-themed, and deployed to Cloudflare Pages.

**Live site:** https://451e44ec.gk-resume.pages.dev

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | CSS Modules |
| Testing | Vitest + React Testing Library |
| Hosting | Cloudflare Pages |
| CI | GitHub Actions |

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/          # Fixed navigation bar with mobile hamburger menu
│   ├── Navigation/      # Desktop nav + mobile overlay
│   ├── SectionTitle/    # Shared "01 // Title" section heading
│   └── Footer/
├── sections/            # Full-page content sections
│   ├── Hero/            # Full-height intro with name, title, CTA
│   ├── Skills/          # Skill categories grid
│   ├── Experience/      # Company cards with grouped roles
│   ├── Certifications/  # Certification grid
│   ├── Projects/        # Project cards with tech tags and links
│   └── Contact/         # Email, GitHub, LinkedIn, location
├── data/
│   └── resumeData.ts    # All resume content in one typed file
├── types/
│   └── index.ts         # TypeScript interfaces for all data shapes
└── test/
    └── setup.ts         # Test environment bootstrap
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Opens at http://localhost:5173 with hot module replacement.

### Run tests

```bash
npm run test          # interactive watch mode
npm run test:run      # single run (used in CI)
npm run test:coverage # with coverage report
```

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with `npm run preview`.

---

## Updating Content

All resume content lives in one file: `src/data/resumeData.ts`.

Sections map directly to interfaces in `src/types/index.ts`:

- `personal` → Hero + Contact sections
- `skills` → Skills section
- `experience` → Experience section (grouped by company → roles)
- `certifications` → Certifications section
- `projects` → Projects section

---

## Deployment

The project is deployed to **Cloudflare Pages** via Git integration.

| Branch | Environment |
|---|---|
| `main` | Production (https://451e44ec.gk-resume.pages.dev) |
| any other | Preview deployment (auto-generated URL) |

Every push to `main` or `dev`, and every PR to `main`, triggers the GitHub Actions CI pipeline (`.github/workflows/ci.yml`) which runs:

1. `npm ci` — install dependencies
2. `npm run test:run` — run all 61 unit tests
3. `npm run build` — verify production build

Cloudflare Pages then runs its own build (`npm run build`) and publishes `dist/`.

---

## Design Decisions

- **Black & white palette** — minimalist, technical aesthetic
- **JetBrains Mono** for headings and code-style labels; **Inter** for body text
- **CSS Modules** — scoped styles per component, no global class collisions
- **Data-driven** — all content is in `resumeData.ts`; no hardcoded strings in components
- **Accessible** — semantic HTML landmarks, ARIA labels, keyboard navigation, `focus-visible` styles
- **Mobile-first** — responsive layout with hamburger menu on small screens

---

## License

MIT
