# Small Space Tech — Blog Starter

A lightweight Astro blog: write posts as markdown files, get a fast, SEO-friendly
static site. No AI-builder credits, no per-page limits — just files.

## What's in here
- `src/content/blog/` — your posts, one markdown file each. Add a new file here to publish a new post.
- `src/pages/index.astro` — homepage that lists all posts automatically.
- `src/pages/blog/[...slug].astro` — renders each post (you never need to touch this).
- `src/pages/affiliate-disclosure.astro` — required FTC disclosure page, already linked in the header.

## 1. Buy a domain
Any registrar works (Namecheap, Cloudflare, Google Domains successor, etc.).
Pick something short and on-topic, e.g. `smallspacetech.com` or similar
(check availability — this is just an example, not a real registered check).

## 2. Push this to a new GitHub repo
```bash
cd gadget-blog
git init
git add .
git commit -m "Initial blog starter"
git branch -M main
git remote add origin https://github.com/Eins1899/YOUR-NEW-REPO-NAME.git
git push -u origin main
```
Create the empty repo on GitHub first (github.com/new), then run the above.

## 3. Deploy for free
Easiest option: **Vercel** or **Netlify** (both have generous free tiers for this size of site).
1. Sign up with your GitHub account.
2. "Import project" → select your new repo.
3. Build command: `npm run build` (auto-detected for Astro).
4. Output directory: `dist` (auto-detected).
5. Deploy — you'll get a free `.vercel.app` or `.netlify.app` URL immediately.
6. Add your purchased domain in the project's Domain settings and follow the DNS instructions they give you (usually just adding a couple of records at your registrar).

## 4. Update the placeholders before going live
- `astro.config.mjs` — replace `your-domain-here.com` with your real domain.
- `public/robots.txt` — same.
- `src/content/blog/best-small-desks-for-tiny-home-offices.md` — replace the
  `[Product Name]` placeholders with your real researched picks and affiliate links.

## 5. Publishing a new post (your weekly routine)
1. Ask Claude for a keyword + outline + draft using the prompt library from Month 1 Plan.
2. Create a new file in `src/content/blog/your-post-slug.md` with this frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "One-sentence summary for search results."
   pubDate: 2026-09-08
   keyword: "your target keyword"
   ---
   ```
3. Write/paste the post body below the frontmatter in markdown.
4. Commit and push — Vercel/Netlify auto-deploys on every push to `main`.

## Local preview (optional, needs Node.js installed)
```bash
npm install
npm run dev
```
Then open the local URL it prints.
