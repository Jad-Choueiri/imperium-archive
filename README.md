# Imperium Archive

A five-page Roman history archive built for the Full Stack Development Final Project (2026): a cinematic landing page, a curated gallery of 15 emperors with individual profile pages, an API-powered book and video research tool, and an interactive "war room" of Rome's major conflicts.

**Author:** Jad Choueiri
**Live site:** https://imperium-archive.vercel.app/
**Repository:** https://github.com/Jad-Choueiri/imperium-archive

---

## Project Description

Imperium Archive is built around three ideas: real, hand-written content (not placeholder text), a consistent visual identity across every page (a "carved stone inscription" aesthetic — Cinzel display type, a limestone/ink/bronze palette, Roman numerals as chronological markers), and pages that link into each other rather than sitting in isolation.

**Pages:**
- **Home (`index.html`)** — a cinematic scroll-narrative landing page. Three background images crossfade in and out as the visitor scrolls past three narrative sections (Culture & Conquest, The Global Legacy, The Mind of Rome), and a "Quote of the Day" box fetches a live philosophy quote from an API on load.
- **The Emperors (`pantheon.html`)** — a responsive grid of 15 Roman emperors, each rendered dynamically from a JavaScript data array, in chronological order.
- **Emperor Profile (`emperor.html`)** — a single reusable template page (not 15 separate files) that reads an emperor's ID from the URL and renders their portrait, dynasty, reign, two-paragraph biography, and a "lesser-known fact."
- **The Bibliotheca (`search.html`)** — a live research tool. Users search a topic, and the site queries the Google Books API and the YouTube Data API simultaneously, silently biasing every search toward Roman history so that even an unrelated query (e.g. "cooking") returns on-theme results (Roman culinary history, in that example).
- **Campaign Chronicles (`chronicles.html`)** — an interactive tabbed "war room" covering six major Roman conflicts across three eras, with a crossfading banner image per era, key-figure chips that link directly to a related emperor's profile page, and a "Research this war in the Bibliotheca" link that pre-fills and auto-runs a search on the previous page.

## APIs Used

1. **Google Books API** (key-authenticated) — powers the book search half of the Bibliotheca page.
2. **YouTube Data API v3** (key-authenticated) — powers the video search half of the same page.
3. **API Ninjas — Quotes API** (key-authenticated via request header) — powers the "Quote of the Day" box on the homepage, with a hardcoded Seneca quote as a graceful fallback if the request fails.

All three keys are restricted where the provider's dashboard allows it (Google Cloud Console: both keys are limited to `imperium-archive.vercel.app/*` and `localhost/*` under Application Restrictions).

## Custom UI Requirement: Tabbed Navigation (JavaScript)

**Where:** `chronicles.html` / `js/chronicles.js` (`TabController` class)

The three tab buttons and their corresponding panels are not hardcoded in the HTML — `chronicles.html` only contains two empty containers (`#tab-nav` and `#tab-panels`). On page load, the `TabController` class reads the three war-era categories from `data.js` and builds both the buttons and the panels dynamically with a loop.

Clicking a tab button:
1. Updates `aria-selected` on all buttons, so only the clicked tab is marked active (for screen readers and for styling).
2. Toggles the `.active` class and the `hidden` attribute on the matching panel, hiding the other two — no page reload, no navigation.
3. Also swaps a full-width background "era banner" image behind the tab content, via the same click handler (`activateBanner()`), so each era has its own visual identity.

The same `data-bg` pattern (an element's dataset pointing to which background layer should be active) is reused from the homepage's scroll-fade system, applied here to click events instead of scroll events — one consistent technique for two different interactions.

## Engineering Log

**Tabbed navigation build process:** The tab system started as the minimum requirement — three buttons, three panels, click to toggle — using a single `TabController` ES6 class so the logic wasn't duplicated per tab. Early on, tab state (which panel is open) and the ARIA accessibility attributes were kept in the same `activate(key)` method rather than as separate functions, so the visual state and the accessibility state can never drift out of sync with each other.

The system was later extended twice without changing its core structure: first to add key-figure chips that conditionally render as clickable links when a war's key figure matches one of the 15 emperors by name (`figureChip()` method), and second to add the per-era banner image crossfade (`activateBanner()`), which reuses the exact same "toggle `.active` based on a data attribute" pattern already used elsewhere in the site (see `ScrollNarrative` on the homepage), rather than inventing a new mechanism.

**General build process:** The site was built incrementally over several sessions — homepage and emperor gallery first, then the API-driven search page, then the tabbed Chronicles page, then a full pass of cross-linking between all three content pages (emperors ↔ chronicles ↔ bibliotheca), followed by content accuracy review, responsive testing, and deployment. Git commits were kept small and scoped to one change each rather than batched, including several commits that were pure bug fixes discovered during testing (see AI-use appendix below).

## AI-Use Appendix

**Tools used:** Claude (Anthropic), via the claude.ai web chat interface, used throughout the entire build — architecture and page structure planning, generating all HTML/CSS/JS, debugging, drafting the emperor biographies and war descriptions, git/GitHub workflow guidance, and deployment guidance (Vercel).

**Example prompts used:**
1. *"I have an idea for this project — assess whether it's feasible, refine it, and tell me if it would earn a strong grade against the brief."* — used at the very start, before any code was written, to validate and refine the overall three-page concept against the assignment requirements.
2. *"Instead of a modal, could clicking an emperor open a dedicated page with a fuller biography and portrait?"* — led to building the `emperor.html` template page and `EmperorDetail` class, rather than the modal originally proposed.


**At least two specific things the AI got wrong, and how I found and fixed each one:**

1. **Sticky navbar bug.** The AI's initial `Navbar` class injected the nav bar using `mount.innerHTML = ...`, which nested the `<nav>` element inside an empty `<div id="navbar-mount">`. That div's height shrank to exactly the nav's height, which meant `position: sticky` had zero room to move within its containing block — it unstuck the instant the page scrolled even slightly, even though the CSS rule itself (`sticky-top`) was verified correct in dev tools. I diagnosed this myself by testing in a real browser before and after changing `innerHTML` to `outerHTML` (which replaces the wrapper div entirely, making `<nav>` a direct child of `<body>` instead), confirming the nav stayed pinned only after that change.

2. **Hero background fade never actually worked, silently.** When adding a crossfading background image to the homepage's hero section, the AI's CSS still left the original opaque gradient declared directly on `.prologue` (the hero container), which painted over the new fixed background layer sitting behind it. The fade logic in JavaScript was technically firing correctly the whole time — the bug was purely that the visible layer could never show through its own container's opaque background. This was only found by pasting the complete, current contents of all four related files (HTML, CSS, and two JS files) back to the AI for review, rather than describing the symptom in words, which is what actually surfaced the leftover duplicate `background:` declaration.


**Content accuracy check:** Before deployment, all 15 emperor biographies and 6 war/conflict descriptions were reviewed for historical accuracy in a dedicated pass. One factual error was found and corrected: Justinian's biography originally stated he ruled "two centuries after Rome itself had fallen," which is incorrect (Western Rome is conventionally dated to 476 CE; Justinian's reign began in 527 CE — roughly half a century later, not two centuries).