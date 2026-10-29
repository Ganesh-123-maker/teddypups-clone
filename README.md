# TeddyPups U.A.E. — Website Clone (Insta Biz Web take-home)

A fresh re-implementation of https://puppy.instabizweb.com/ — TeddyPups U.A.E.,
premium teacup puppies in Dubai — built as the Technical Round assignment for
Insta Biz Web.

## What was cloned

- **Homepage:** hero (“every puppy is family / Premium teacup puppies in Dubai”),
  15-puppy grid, two ways to meet a puppy, 3-step puppy journey, trust badges,
  testimonial, FAQ accordion, WhatsApp CTA, footer with business + phone.
- **Available puppies (`/puppies`):** search by breed, filter by origin
  (In Dubai / Imported), breed and sex, live result count.
- **Puppy detail (`/puppies/[slug]`):** photo, breed / sex / age / where,
  availability, “what comes with” checklist, “the way home” 4-step import
  journey, enquiry form + WhatsApp link pre-filled with that puppy, and
  previous/next pup links. Verified slugs kept where known, e.g.
  `maltipoo-max-male` (Max, imported) and `copper-male`.
- **How it works (`/how-it-works`):** meet-in-person vs order-upon-request,
  4 steps each, premium puppy promise, delivery & collection (`#delivery`),
  why choose us.
- **Happy families (`/happy-families`), FAQ (`/faq`, with search),
  Visit & contact (`/contact`, letter-style form), Gone home (`/gone-home`).**
  The original happy-families and gone-home pages are large photo grids;
  this clone reproduces their structure and verified names/testimonial
  without copying family photos.
- **Responsive:** 3-column grid → 2 → 1, stacked hero/detail on mobile,
  sticky header with a compact nav on small screens.

## Tech

- Next.js 14 (App Router), React 18, TypeScript, plain CSS (no CSS framework,
  so the build has no Tailwind/PostCSS version risk).
- All puppy data lives in one typed file: `data/puppies.ts`.
- Photos are the reference site's public listing photos, loaded from its image
  proxy for this demo. All code, layout CSS and components are original —
  no source was copied from the reference site.
- The enquiry form is a demo: it shows a confirmation state and does not
  send or store anything. WhatsApp links (`wa.me`) are real links.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
```

## Deploy

Any Next.js host works; Vercel is the natural fit (import the repo, no
environment variables, no build settings to change).

## Notes on fidelity

- At the time of checking (29 Oct 2026), the original's local filter returned
  no puppies, while its imported filter listed all 15. This clone keeps a
  demonstrable local/imported split for the showroom vs imported journey,
  except for profiles verified as imported (Max). That is a deliberate,
  documented deviation from a quirk in the live site, not an oversight.
- No prices are shown anywhere, matching the reference site.

## AI tools used

Built with Muse (Meta's personal AI agent) as a coding assistant, with the
reference site inspected page by page first, then a fresh Next.js app written
from that structure. Prompts and decisions are documented in the Loom video
script — see `LOOM_SCRIPT.md`.
