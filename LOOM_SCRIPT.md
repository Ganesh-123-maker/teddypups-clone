# Loom video script — TeddyPups clone, step by step from scratch

Use this exactly in order. For every step it says: OPEN this, CLICK this,
SHOW this, SAY this. You do not have to read the SAY lines word for word —
say them in your own words, but cover every bullet in that step.
Target length: about 10–12 minutes. Do not rush; pausing on a screen is good.

## Before you press Record — set up your screen (2 minutes, off camera)

Open these tabs/windows in this order, so you never hunt for anything
while recording:

1. Tab 1 — Reference site: https://puppy.instabizweb.com/
2. Tab 2 — Your live clone: https://teddypups-clone-flax.vercel.app
3. Tab 3 — GitHub repo: https://github.com/Ganesh-123-maker/teddypups-clone
4. VS Code — open the project folder `teddypups-clone`, with the file
   explorer visible on the left.
5. A terminal inside VS Code, in the project folder, ready for one command.

Check before recording: your screen share is on, your mic is on, and the
live clone tab loads. Use the flax link above on camera — NOT the long
Vercel deployment link (that one asks strangers to log in), and NOT
`teddypups-clone.vercel.app` (that is not this project).

---

## Step 1 — Introduction (30 seconds)

OPEN: Tab 2, your live clone homepage. Stay on the hero.
SAY:
- "Hi, I'm Ganesh. This is my Technical Round assignment for Insta Biz Web."
- "The task was to clone the complete website at puppy.instabizweb.com,
  deploy it, and share the source code."
- "Here are the three deliverables: this live site, the GitHub repo, and
  this video explaining how I built it."

## Step 2 — What the reference site is (1 minute)

OPEN: Tab 1, the reference site. Scroll slowly from top to bottom.
SHOW and SAY, as you scroll:
- The hero: premium teacup puppies in Dubai, with a showroom and imported
  puppies.
- The puppy grid: 15 puppies, each with breed, boy/girl, and age.
- The two ways to meet a puppy: in the Dubai showroom, or imported.
- The 3-step journey, the trust points, the testimonial, and the FAQ.
SAY:
- "Before writing any code, I mapped the site page by page. It is not
  just one homepage — there are inner pages too, and I will show them
  in the clone."

## Step 3 — Demo the clone homepage (1 minute)

OPEN: Tab 2, your live clone. Scroll slowly, in the same order as Step 2.
SHOW and SAY:
- Same hero, same 15-puppy grid, same two-ways section, same 3-step
  journey, same trust points, same testimonial, same FAQ preview, and
  the WhatsApp call-to-action at the bottom.
- "The layout and sections match the reference. The code behind it is
  mine — I recreated the structure from what the pages show, I did not
  copy the reference site's source code."

## Step 4 — Demo the puppies list and filters (1.5 minutes)

OPEN: Tab 2, click "View available puppies" (or go to `/puppies`).
CLICK, in this order, and SAY what happens each time:
1. Type "Maltipoo" in the search box — "The list narrows to Maltipoos,
   and the count at the top updates."
2. Clear the search, then click the "Imported" chip — "Now only the
   imported puppies show, including Max."
3. Change the breed dropdown to "Pomeranian" — "Now only Pomeranians."
4. Change the sex dropdown, then reset everything to "All / Any breed /
   Any sex" — "Back to all 15 puppies."
SAY:
- "This is the one deliberate addition beyond a static copy: real
  filtering, so the clone is functional, not just a screenshot."

## Step 5 — Demo one puppy detail page (1.5 minutes)

OPEN: Tab 2, click the "Max" card. Its URL is
`/puppies/maltipoo-max-male`.
SHOW and SAY, top to bottom:
- Photo, name, and the facts: breed Maltipoo, boy, 3 months, and
  "Where: Imported for you."
- The "what comes with" checklist: vaccinated, dewormed, verified
  health certificate, thoroughly checked.
- The "way home" import steps: reserve, consultation, import and
  arrival, welcome home.
- Click "Send an enquiry" — it scrolls down to the form. SAY:
  "The form shows a confirmation and stores nothing — that is honest
  for a demo. The WhatsApp button next to it is real: it opens a chat
  pre-filled with this puppy's name, breed, sex, and age."
- Click "Next pup" at the bottom — "Every detail page links to the
  previous and next puppy, so you can browse all 15 without going back."

## Step 6 — Demo the other pages, quickly (1 minute)

OPEN: Tab 2, use the top navigation, one page each, 10–15 seconds each.
SAY one line per page as you open it:
- "How it works" — the two 4-step paths, in-person and order-upon-request,
  plus delivery and why choose us.
- "Happy families" — the testimonial wall structure.
- "FAQ" — type a word in the search box, the questions filter live.
- "Visit & contact" — the letter-style form, Downtown Dubai details,
  phone, email, and social links.
- "Gone home" (from the footer) — puppies who have already found homes.
SAY: "In total the site has 25 pages, including all 15 puppy detail pages."

## Step 7 — Show the project structure in VS Code (1 minute)

OPEN: VS Code, project folder `teddypups-clone`. Keep the explorer open.
POINT at each folder and SAY:
- "`app/` holds the pages: the homepage, the puppies list, one folder
  for puppy detail pages, how-it-works, happy-families, FAQ, contact,
  and gone-home."
- "`components/` holds the reusable pieces: the header and footer,
  the puppy card, and the enquiry form."
- "`data/` holds all the puppy data in one place — I will open that next."
- "No database, no environment variables, so deployment is simple."

## Step 8 — Open the data file and explain it (1 minute)

OPEN: `data/puppies.ts` in VS Code.
SHOW and SAY:
- "At the top there is one type, Puppy: slug, title, breed, sex, age,
  origin, whether it has a video, and a photo."
- Scroll through the list: "All 15 puppies are just entries in this one
  array. Max is here, Copper is here, the Korean Teacup puppies are here."
- "That means adding a new puppy is one new entry, not a new page —
  the detail page is generated from this data."
- Point at the WhatsApp helper at the top: "This builds the WhatsApp
  link with the puppy's details already filled in."
- SAY honestly: "The photos are the reference site's public listing
  photos, used for this demo submitted back to the company that owns
  that site. All the code and styling around them is original."

## Step 9 — Open three code files, one point each (1.5 minutes)

OPEN each file, point at the one thing named, then move on. Do not
read the whole file.

1. OPEN `app/puppies/page.tsx`. SAY:
   - "This page is a client component because of the filters. The list
     is filtered in memory by origin, breed, sex, and search text."
   - "It needs a Suspense boundary around the search params, otherwise
     the build fails — that was a real bug I hit and fixed."

2. OPEN `app/puppies/[slug]/page.tsx`. SAY:
   - "This one function, generateStaticParams, tells Next.js to build
     one static page per puppy at build time, so all 15 detail pages
     are pre-rendered and fast."
   - "The same file renders the facts, the checklist, the import steps,
     the enquiry form, and the previous/next links."

3. OPEN `app/globals.css`. SAY:
   - "Plain CSS, no Tailwind. The design is mostly cards and grids, so
     CSS handles it directly, and it removes a whole class of version
     problems."
   - "The grid is 3 columns on desktop, 2 on tablet, 1 on phone. I will
     show that on the live site in a moment."

## Step 10 — Technologies and AI tools, honestly (1 minute)

OPEN: `package.json` in VS Code. Stay on it.
SAY:
- "Next.js 14 with the App Router, React 18, and TypeScript."
- "I used Muse, Meta's personal AI agent, as a coding assistant. I did
  not paste the reference site's code in, and I did not blindly trust
  the output."
- "The exact workflow was, first: map the reference site's pages and
  sections before writing code. Second: scaffold a Next.js clone with
  the homepage, the puppy list with filters, detail pages, and
  how-it-works. Third: build and fix until the build passes and every
  route returns 200."
- "What I checked myself: the build output, the live local server
  responses, the filters on screen, and the deployed site as an
  anonymous visitor — not just signed in."

## Step 11 — Challenges, testing, and responsiveness (1.5 minutes)

First, OPEN the terminal in VS Code and run: `npm run build`
While it runs, SAY:
- "Challenge one: the puppies list needs Suspense, or the build fails."
- "Challenge two: a detail heading looks broken in raw HTML — it
  renders as 'Ask about' plus a comment plus 'Max' — but it displays
  correctly in the browser. I checked that instead of assuming a bug."
- "Challenge three: the original site's local filter returned no
  puppies when I checked it, while its imported filter listed all 15.
  My clone keeps a demonstrable local/imported split, except for
  profiles verified as imported, like Max — and that deviation is
  written in the README, not hidden."
When the build finishes, POINT at the output and SAY:
- "Compiled successfully, type-checked, 25 static pages."
Then OPEN: Tab 2, your live clone, and narrow the browser window (or
open DevTools device mode) until it is phone-width. SAY:
- "On mobile the hero stacks, the grid goes to one column, and the
  detail page stacks too. Nothing is cut off."
Finally, OPEN: Tab 2, `/puppies`, and confirm the count still says
15 puppies available.

## Step 12 — Deployment and close (1 minute)

OPEN: Tab 3, the GitHub repo. SAY:
- "The full source is here, public, on main, including this script
  itself as LOOM_SCRIPT.md."
OPEN: Tab 2, your live clone homepage one last time. SAY:
- "And it is deployed on Vercel with default Next.js settings, no
  environment variables, from that repo. The link to share is the
  production domain: teddypups-clone-flax.vercel.app."
- "If I had more time, I would add a real enquiry backend, an admin
  page to add puppies without editing code, and image optimisation."
- "Thank you — happy to walk through any part of the code in the
  next round."

Stop recording. Check the video plays back, then share the Loom link
with the live URL and the repo link in one submission email.
