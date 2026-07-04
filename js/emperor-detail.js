// ============================================================
// emperor-detail.js — EmperorDetail class
// Powers emperor.html as a single reusable template rather than
// 15 separate static pages: reads ?id=<slug> from the URL, finds
// the matching entry in data.js, and renders it.
// ============================================================

import { Navbar } from "./navbar.js";
import { PageTransition } from "./page-transition.js";
import { emperors } from "./data.js";

class EmperorDetail {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
  }

  slug(emperor) {
    return emperor.image.replace(/\.[^/.]+$/, "");
  }

  getRequestedId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  notFoundTemplate() {
    return `
      <p class="state-message error">
        No emperor found for this link.
        <br><a href="pantheon.html">&larr; Back to The Emperors</a>
      </p>
    `;
  }

  detailTemplate(emperor) {
    const bioParagraphs = emperor.bio.map(p => `<p>${p}</p>`).join("");
    return `
      <a class="back-link" href="pantheon.html">&larr; Back to The Emperors</a>

      <img class="emperor-portrait" src="assets/img/emperors/${emperor.image}"
           alt="Portrait bust of ${emperor.name}"
           onerror="this.src='https://placehold.co/320x400/ddd1b8/4a1942?text=No+Portrait'">

      <h1>${emperor.name}</h1>
      <div class="meta-row">
        <span class="dynasty">${emperor.dynasty}</span>
        <span class="reign mono">${emperor.reign}</span>
      </div>

      <div class="bio">${bioParagraphs}</div>

      <div class="fun-fact">
        <span class="label">Lesser-Known Fact</span>
        ${emperor.funFact}
      </div>
    `;
  }

  render() {
    if (!this.container) return;

    const requestedId = this.getRequestedId();
    const emperor = emperors.find(e => this.slug(e) === requestedId);

    if (!emperor) {
      this.container.innerHTML = this.notFoundTemplate();
      return;
    }

    document.title = `Imperium Archive — ${emperor.name}`;
    this.container.innerHTML = this.detailTemplate(emperor);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PageTransition().init();
  new Navbar("#navbar-mount", "pantheon").render();
  new EmperorDetail("#emperor-detail").render();
});