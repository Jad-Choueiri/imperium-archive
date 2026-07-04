// ============================================================
// page-transition.js — PageTransition class
// Cross-browser fade between pages: intercepts clicks on internal
// links, fades the current page out, then navigates. Works
// alongside the view-transition meta tag (Chromium-only) as the
// fallback every other browser actually sees.
// ============================================================

export class PageTransition {
  constructor(duration = 300) {
    this.duration = duration;
  }

  init() {
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href$=".html"]');
      if (!link || link.target === "_blank" || e.metaKey || e.ctrlKey) return;

      e.preventDefault();
      document.body.classList.add("page-fade-out");
      setTimeout(() => {
        window.location.href = link.href;
      }, this.duration);
    });
  }
}