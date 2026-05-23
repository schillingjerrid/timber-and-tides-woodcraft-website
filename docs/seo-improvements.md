# SEO Improvement Backlog

Notes on remaining SEO work after the initial on-site SEO pass completed on
2026-05-23. The on-site foundation (meta tags, JSON-LD, location-targeted
titles, NAP, optimized images, robots.txt, sitemap) is in place. What follows
is the backlog of items that were either out of scope, off-site, or required
content the maker should write themselves.

Target queries for the site:
- "northern colorado woodworker"
- "custom woodworking northern colorado"
- "custom furniture colorado"

---

## Highest-impact remaining work (off-site)

### 1. Create a Google Business Profile

This is the single largest remaining gap. Without a GBP listing, the site
cannot appear in the Google Maps "local pack" for `[city] woodworker` queries,
regardless of how well the on-site SEO is tuned.

- Name: **Timber and Tides Woodcraft** (must match the site exactly)
- Category: Custom Furniture Maker (primary), Woodworker, Cabinet Maker
- Location: Milliken, CO (set as a service-area business if no public
  storefront address is desired)
- Service area: Fort Collins, Loveland, Greeley, Windsor, Longmont, Boulder,
  Denver metro (match the `areaServed` list in
  `src/layouts/BaseLayout.astro`)
- URL: https://timberandtideswoodcraft.com
- Photos: upload 10+ high-quality project shots from `src/assets/projects/`

After creation, request reviews from past clients. Reviews that mention the
city/region ("great Northern Colorado woodworker", "loved the Fort Collins
delivery") dominate local rankings.

### 2. Build NAP citations across local directories

Each listing reinforces the business's location signal. NAP (Name, Address,
Phone) must be identical across every listing — exact spelling and
punctuation matter to Google's deduplication.

Recommended directories:
- Houzz (woodworking pros)
- Thumbtack
- Yelp
- Nextdoor (Local Recommendations)
- Bing Places for Business
- Apple Business Connect
- Northern Colorado / NoCo maker and craft directories
- Local chamber of commerce listings (Milliken, Greeley, Loveland)

---

## On-site work the maker can do over time

### 3. Expand project page body copy

Project `.mdx` files in `src/content/projects/` currently average 150–225
words. Search engines reward depth; aim for 350–500 words per page when the
build justifies it. For each project, consider adding:

- Why this wood species was chosen (climate, color, durability, customer
  preference)
- The design problem the client was solving
- Specific joinery or technique used and why
- Finish choice rationale and care instructions
- Approximate build time / commission timeline
- City or general region the project was delivered to (with client consent)

Skipped during the initial pass because accurate per-project details require
the maker's first-hand knowledge.

### 4. Collect and publish more testimonials

Only one testimonial is currently published
(`src/content/testimonials/flores-armando.md`). Each additional testimonial:

- Adds unique on-page content
- Reinforces the social-proof signal
- Provides natural placement for location keywords if clients mention them

Ask satisfied clients for a short paragraph that mentions:
- What was built
- The general region or city (optional)
- One specific thing they loved about the process or finished piece

Include client photos when possible — the testimonial schema already supports
an `images` array.

### 5. Add an FAQ section to About or Contact (with FAQPage JSON-LD)

Captures question-style queries such as:
- "how much does custom furniture cost in Colorado"
- "how long does a custom dining table take to build"
- "do you ship custom furniture outside Colorado"
- "what wood is best for a kitchen island in Colorado"

Wrap the FAQ in `FAQPage` JSON-LD so Google can display rich results in
SERPs. Add this in a new component or directly in the relevant page; pattern
the structured data after the existing `ProfessionalService` schema in
`BaseLayout.astro`.

### 6. Start a blog / articles section for long-tail content

The slowest-compounding but highest-quality SEO lever. Ideas:

- "Choosing a wood species for the Colorado climate"
- "Walnut vs cherry for a dining table"
- "What to expect when commissioning custom furniture in Northern Colorado"
- "Caring for an oil-finished hardwood piece in dry Front Range air"
- "How a custom bookcase gets designed and built — start to finish"

Each article should be 800–1500 words and target a specific long-tail query.
Set up as a new content collection (`articles` or `blog`) mirroring the
`projects` collection pattern.

---

## Smaller on-site improvements

### 7. Background images still use raw JPGs via CSS `background-image: url()`

Located in `public/images/backgrounds/`. These are still served as
unoptimized `_large.jpg` / `_small.jpg` files and bypass Astro's image
pipeline because they're referenced from CSS, not from JSX.

Options when ready:
- Convert to WebP/AVIF manually and reference both via a `<picture>` element
  in the markup instead of CSS backgrounds
- Or move to `src/assets/`, import per-page, and use Astro's `<Image>` in an
  absolutely-positioned `<div>` inside each hero section

This would improve LCP further, especially on mobile.

### 8. Preload the homepage hero background

Even before migrating away from CSS backgrounds, adding
`<link rel="preload" as="image" href="/images/backgrounds/background-3_large.jpg">`
to the homepage `<head>` would improve LCP without a refactor.

### 9. Add a `BreadcrumbList` JSON-LD to project and plan detail pages

Helps Google render breadcrumb-style rich results in SERPs (e.g.
"Home › Projects › Cherry Bookcase"). Cheap win.

### 10. Add `dateModified` to project pages

The `CreativeWork` JSON-LD currently only sets `dateCreated`. If projects get
photo updates or copy edits, adding `dateModified` (sourced from git or
frontmatter) signals freshness to Google.

### 11. Per-image alt text in project frontmatter

Gallery images currently get a generic `"{title} — detail photo N"` alt. The
content schema could be extended so each gallery entry can be either a string
or an `{ src, alt }` object, allowing image-specific alts when worth the
effort (especially for hero shots and unique angles).

---

## Things explicitly decided against

- **Phone number in JSON-LD / footer**: maker preferred email-only contact.
  This slightly weakens local SEO completeness (GBP and most directories
  prefer a phone) but is workable.
- **Public street address**: only city-level location ("Milliken, CO") is
  shown. Stronger local-pack signal would come from a full street address but
  the trade-off favors privacy here.

---

## How to know the work is paying off

- **Google Search Console**: register the site and watch impressions for the
  three target queries climb over weeks/months.
- **GBP Insights**: once a Business Profile exists, track searches and
  direction-requests.
- **Direct SERP checks**: search the three target queries from an incognito
  window in Colorado IP space; track week-over-week position changes.

SEO is slow. Expect 2–6 months of consistent signals before the site moves
into the top 10 for the target queries. The local pack (3-pack) is generally
faster than the organic results once GBP is established.
