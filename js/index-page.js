// ============================================================
// index-page.js — bootstraps the cinematic landing page
// ============================================================

import { Navbar } from "./navbar.js";
import { PageTransition } from "./page-transition.js";
import { ScrollNarrative } from "./narrative.js";
import { QuoteLoader } from "./quote.js";

document.addEventListener("DOMContentLoaded", () => {
  new PageTransition().init();
  new Navbar("#navbar-mount", "home").render();
  new ScrollNarrative(".prologue, .narrative-block").init();
  new QuoteLoader("#quote-container").load();
});
