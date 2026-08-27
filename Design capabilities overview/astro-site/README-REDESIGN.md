# Small Space Tech — redesign drop-in

Copy the contents of `astro-site/` over your repo root, keeping your existing
`src/content/blog/` posts. Then `npm install && npm run dev`.

## Rename one file first
`src/pages/blog/-...slug-.astro` → `src/pages/blog/[...slug].astro`
(square brackets can't be saved here, so it arrives with dashes. Astro needs the
brackets — that's what makes it a dynamic route.)

## What's here
| File | What it does |
| --- | --- |
| `src/styles/global.css` | The whole design. One file, CSS variables at the top. |
| `src/components/BaseLayout.astro` | Header, nav, footer, fonts, meta. Every page uses it. |
| `src/components/PostRow.astro` | One row in a post list. Used on home + reviews. |
| `src/components/ProductCard.astro` | Price-paid / verdict block with an affiliate button. |
| `src/components/Placeholder.astro` | Striped image placeholder until you have a photo. |
| `src/components/Signup.astro` | Newsletter form, light and dark variants. |
| `src/pages/index.astro` | Home: hero, featured review, recent rows, signup. |
| `src/pages/reviews.astro` | Archive, grouped by month, with category counts. |
| `src/pages/blog/[...slug].astro` | Article template. |
| `src/pages/about.astro`, `newsletter.astro`, `affiliate-disclosure.astro` | Standalone pages. |
| `src/content/config.ts` | Adds `category`, `pricePaid`, `readTime`, `heroNote`, `heroImage`. |

## Publishing a new review

Create `src/content/blog/your-post-slug.md`:

```yaml
---
title: "The Cable Setup That Finally Cleared My Desk"
description: "One £12 tray, two clips, and why under-desk routing beats a floor power strip."
pubDate: 2026-09-18
keyword: "under desk cable management"
category: "Power"          # Desks | Storage | Power | Light | Audio
pricePaid: "£12 total"
readTime: "4 min"
heroNote: "photo: the tray mounted under the desk"
# heroImage: "/images/cable-tray.jpg"   # uncomment once you add the photo
draft: false
---
```

Then write the body in markdown. `##` headings, bullet lists, `**bold**`,
blockquotes and images are all styled already — you don't need to touch CSS.
Commit and push; Vercel/Netlify deploys automatically.

The newest post becomes the home-page featured review on its own. Set
`draft: true` to keep something out of the build.

## Three things to do before going live
1. `astro.config.mjs` and `public/robots.txt` — replace `your-domain-here.com`.
2. `src/pages/about.astro` — fill in the "Who writes this" box with your real details.
3. `Signup.astro` — point `action=""` at your email provider's form endpoint.

## Using the product card in a post
Markdown files can't render components. Two options:
- Rename the post to `.mdx`, add `npx astro add mdx`, then import and use
  `<ProductCard price="£29.98" specs={[["Width","60 cm"]]} verdict="Would buy again"
  href="https://..." cta="See it at Wayfair" note="photo: desk in his room" />`.
- Or paste the equivalent HTML (the `.product` markup in `global.css`) straight
  into the markdown — plain HTML works in `.md` files.

## Photos
Every placeholder says what should go there. Drop real images in `public/images/`
and set `heroImage` in the frontmatter. Real photos of your own room are the
single biggest credibility upgrade this site can get.
