# Loom video script — TeddyPups clone (Insta Biz Web take-home)

Target: 6–9 minutes, screen share, talk while you click. Do not read this
word for word — use it as the order of topics, then explain in your own words.

## 1. The brief (30 sec)
- Shortlisted for the Technical Round at Insta Biz Web; assignment was a
  complete clone of puppy.instabizweb.com (TeddyPups U.A.E.), deployed, with
  source on GitHub.
- Deliverables: live URL, GitHub repo, and this video.

## 2. What the reference site actually is (1 min)
- Open the reference site: premium teacup puppies in Dubai, hero, 15-puppy
  grid, local vs imported, 3-step journey, trust badges, testimonial, FAQ.
- Inner pages I mapped: `/puppies` list, `/puppies/[slug]` detail with the
  “way home” import steps and an enquiry form, and `/how-it-works` with two
  4-step paths. I inspected these page by page before writing code.

## 3. Project structure (1 min)
- Show the repo: `app/` (layout, home, puppies list, puppies/[slug],
  how-it-works), `components/` (Header/Footer, PuppyCard, EnquiryForm),
  `data/puppies.ts` — one typed file holding all 15 listings.
- Point out: a puppy is one object (slug, breed, sex, age, origin, video,
  photo), so adding a puppy is one entry, not a new page.

## 4. Technologies (45 sec)
- Next.js 14 App Router + React 18 + TypeScript, plain CSS.
- Why plain CSS here: no Tailwind/PostCSS version risk, and the design is
  mostly cards, grids and rounded panels — CSS handles it directly.
- Static generation: all 15 detail pages are pre-rendered at build time
  (`generateStaticParams`), so the deployed site is fast and cheap to host.

## 5. AI tools and exact prompts (1 min)
- Tool: Muse, Meta's personal AI agent, used as a coding assistant.
- Workflow, honestly: (1) “map the reference site's pages and sections
  before writing code”, (2) “scaffold a Next.js clone with homepage, puppy
  list with filters, detail pages, how-it-works”, (3) “build and fix until
  `npm run build` passes and every route returns 200”.
- What I checked myself, not blindly trusted: the build output (21 pages),
  the live local server responses, and the filter behaviour.

## 6. Implementation decisions (1 min)
- Fresh code, not copied source: I recreated layout and copy structure from
  what the pages show; photos are the reference site's public listing photos
  (this demo is submitted back to the company that owns that site).
- Filters are the one deliberate addition: breed search + origin + sex, so
  the clone is functional, not just a screenshot.
- Enquiry form is honest: it shows a confirmation state and stores nothing;
  the WhatsApp button is a real `wa.me` link pre-filled with the puppy.

## 7. Challenges (1 min)
- The puppies list page renders client-side, so search params need a
  Suspense boundary — without it, the build fails.
- Detail headings render as “Ask about <!-- --> Max” in raw HTML, which
  looks like a missing string to a grep but renders correctly in a browser.
- Responsive layout: grid 3 → 2 → 1 columns, hero and detail stack on mobile.

## 8. Testing and deployment (1 min)
- `npm run build` — compiled, type-checked, 21 static pages.
- Local production server: `/`, `/puppies`, `/puppies/maltipoo-max-male`,
  `/how-it-works` all returned 200.
- Deployment: import the repo into Vercel, no env vars, no custom build
  settings. Then show the live URL and click through it on camera.

## 9. Close (20 sec)
- What I'd do with more time: real enquiry backend, admin page to add
  puppies without editing code, and image optimisation via next/image.
