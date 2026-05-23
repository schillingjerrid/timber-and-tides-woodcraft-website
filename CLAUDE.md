# CLAUDE.md

## Always Do First

- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Commands

```bash
npm ci              # Install dependencies (use lockfile)
npm run dev         # Start development server
npm run build       # Build for production (also used as test/verify)
npm run preview     # Preview production build locally
```

**Do NOT start the dev server in automated/CI contexts** — use `npm run build` as the verification step instead. Some sandboxes may have unreliable npm registry access; GitHub Actions CI is the source of truth.

Node.js version is pinned to 24.12.0 via Volta (`package.json`).

## Local Server

- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (this serves the project root at `http://localhost:4321`)
- If the server is already running, do not start a second instance.

## Browser Automation & Visual Verification

A Playwright MCP server is configured for this project. Use it for all browser
automation, screenshot capture, and visual iteration on UI changes.

### When to use Playwright MCP

- After making any frontend/UI change, take a screenshot to verify the result
- When debugging layout, spacing, or styling issues
- To compare before/after states of a visual change
- To verify responsive behavior at specific viewport sizes
- To observe console errors or network failures during rendering

### Screenshot conventions

- Save screenshots to `./screenshots/` with descriptive names
  (e.g. `checkout-form-before.png`, `checkout-form-after.png`)
- Always capture a "before" screenshot prior to making visual changes
  when the current state is unknown

### Visual iteration workflow

When working on UI changes, follow this loop:

1. Make the code change
2. Ensure the dev server is running (e.g. `npm run dev`)
3. Use Playwright MCP to navigate to the relevant route
4. Take a screenshot and visually inspect it
5. List the top differences from the intended design or expected result
6. Address those differences, then repeat from step 3
7. Do at least 2 comparison rounds
8. Stop when the UI matches the intent and no obvious issues remain

Do not rely on structural reasoning alone to predict visual outcomes —
always render and inspect before considering a visual task complete.

If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.

If no reference image: design from scratch with high craft using guardrails defined in this file.

### Invocation reminder

Always invoke via Playwright MCP, not bash. If in doubt, prefix your
intent with "use playwright mcp to..." to ensure the MCP tools are used
rather than falling back to CLI Playwright.

## Architecture

**Static Astro site** deployed to GitHub Pages at `timberandtideswoodcraft.com`. No backend — all pages are statically generated at build time.

### Content Collections

Content lives in `src/content/` as Markdown/MDX files and is schema-validated via Zod in [src/content.config.ts](src/content.config.ts):

- `projects/` — Portfolio pieces with frontmatter: `title`, `date`, `coverImage`, `gallery[]`, `featured`, `wood`, `finish`, `dimensions`, `tags[]`, `excerpt`
- `testimonials/` — Client feedback with `name`, `roleOrContext`, `projectSlug`, `date`

Pages fetch content with `getCollection()` and use `getStaticPaths()` for dynamic routes (e.g., `src/pages/projects/[slug].astro`).

### Layout & Components

- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) — Shell for all pages (header, nav, footer). Mobile nav toggle uses an inline `<script>` block.
- [src/components/](src/components/) — `ProjectCard.astro`, `Gallery.astro`, `TagPill.astro`

### Styling

Tailwind CSS v4 loaded as a Vite plugin (not PostCSS). Global styles in [src/styles/](src/styles/):
- `global.css` — Tailwind import
- `theme.css` — CSS custom properties for the dark color palette (primary `#8ba2c2`, secondary `#8e9d60`, accent `#994a4e`, background `#0b0b0c`)

### Routing

File-based Astro routing with `trailingSlash: 'always'`. All routes produce static HTML — no client-side routing.

### Deployment

Two GitHub Actions workflows in `.github/workflows/`:
- `ci.yml` — Runs `npm ci && npm run build` on PRs
- `deploy.yml` — Builds and publishes `dist/` to GitHub Pages on pushes to `main`
