# Mitja Works

My photography portfolio — commercial real estate, architecture, interiors and
drone work in Tallinn. A single page, built to be sent rather than found.

That constraint shaped everything. The people who open it are real-estate
agencies who already emailed me; they want to see the pictures and get to the
contact form. So there is no blog, no SEO surface, no long "about me" — large
photographs, a short services section, and a way to reach me from anywhere on
the page.

## Design decisions worth naming

**Full-width plates, one or two per screen.** A tight thumbnail grid is the
obvious choice and the wrong one: with twenty-odd photographs it reads as
sparse and cheap. Big frames make a small archive look deliberate.

**Loading is a feature, not an afterthought.** The page is opened on a phone,
on mobile data, seconds after the link arrives. Every image ships with an
inline base64 blur preview generated into
[`src/content/blurData.ts`](src/content/blurData.ts), so a plate never flashes
empty while it loads.

**Copy is data.** All user-facing text lives in
[`src/content/en.ts`](src/content/en.ts) as one typed object, kept separate
from the image manifest. An Estonian version is a sibling `et.ts` implementing
the same shape — a translation file, not a rewrite of the components.

**A local-only image workaround.** The project sits on an exFAT volume, where
macOS scatters AppleDouble `._` sidecar files into Next's image-optimizer
cache; reads then fail and photographs render as broken icons with nothing
wrong in the code. The optimizer is bypassed in development only — production
builds and Vercel are untouched. The reasoning is in
[`next.config.ts`](next.config.ts), because a bare `unoptimized: true` is
exactly the sort of line someone deletes six months later.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · `next/image` · Vercel

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

No environment variables — the site is fully static, photographs included.

## Credits

Photographs are mine, shot on assignment for **Restate**, and the case labels
on the site say so. Site design and code are mine as well.
