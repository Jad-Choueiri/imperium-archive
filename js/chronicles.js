// ============================================================
// chronicles.js — TabController class
// CUSTOM UI REQUIREMENT: tabbed navigation implemented in JS.
// Clicking a tab button toggles the corresponding panel's visibility
// without a page reload, and keeps ARIA state in sync for
// accessibility (aria-selected / hidden).
// ============================================================

import { Navbar } from "./navbar.js";
import { PageTransition } from "./page-transition.js";
import { conflicts, emperors } from "./data.js";

class TabController {
  constructor(navSelector, panelContainerSelector, data) {
    this.nav = document.querySelector(navSelector);
    this.panelContainer = document.querySelector(panelContainerSelector);
    this.data = data;
    this.tabKeys = Object.keys(data); // ['early', 'pax', 'crisis']
  }

  slugFor(emperor) {
    return emperor.image.replace(/\.[^/.]+$/, "");
  }

  figureChip(figureName) {
    const matchedEmperor = emperors.find(e => e.name === figureName);
    if (!matchedEmperor) {
      return `<span class="figure-chip">${figureName}</span>`;
    }
    return `<a class="figure-chip figure-chip-link" href="emperor.html?id=${this.slugFor(matchedEmperor)}">${figureName}</a>`;
  }

  conflictCard(item) {
    const figuresHtml = item.keyFigures
      ? `<div class="key-figures">${item.keyFigures.map(f => this.figureChip(f)).join("")}</div>`
      : "";

    const outcomeHtml = item.outcome
      ? `<div class="outcome"><span class="label">Outcome</span> ${item.outcome}</div>`
      : "";

    const researchLinkHtml = `<a class="research-link" href="search.html?q=${encodeURIComponent(item.name)}">Research this war in the Bibliotheca &rarr;</a>`;

    return `
      <div class="conflict-card">
        <div class="date">${item.date}</div>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        ${figuresHtml}
        ${outcomeHtml}
        ${researchLinkHtml}
      </div>
    `;
  }

  buildMarkup() {
    // Tab buttons
    this.nav.innerHTML = this.tabKeys
      .map((key, i) => `
        <button class="tab-btn" role="tab" id="tab-btn-${key}"
          aria-selected="${i === 0}" aria-controls="tab-${key}"
          data-tab="${key}">
          ${this.data[key].label}
        </button>
      `).join("");

    // Panels
    this.panelContainer.innerHTML = this.tabKeys
      .map((key, i) => `
        <div class="tab-panel ${i === 0 ? "active" : ""}" id="tab-${key}" role="tabpanel"
          aria-labelledby="tab-btn-${key}" ${i === 0 ? "" : "hidden"}>
          ${this.data[key].items.map(item => this.conflictCard(item)).join("")}
        </div>
      `).join("");
  }

  bindEvents() {
    this.nav.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => this.activate(btn.dataset.tab));
    });
  }

  activate(key) {
    this.nav.querySelectorAll(".tab-btn").forEach(btn => {
      btn.setAttribute("aria-selected", String(btn.dataset.tab === key));
    });
    this.panelContainer.querySelectorAll(".tab-panel").forEach(panel => {
      const isMatch = panel.id === `tab-${key}`;
      panel.classList.toggle("active", isMatch);
      if (isMatch) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
    this.activateBanner(key);
  }

  activateBanner(key) {
    document.querySelectorAll(".era-banner-layer").forEach(layer => {
      layer.classList.toggle("active", layer.id === `era-bg-${key}`);
    });
  }

  init() {
    this.buildMarkup();
    this.bindEvents();
    this.activate(this.tabKeys[0]); // show the first era's banner immediately
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PageTransition().init();
  new Navbar("#navbar-mount", "chronicles").render();
  new TabController("#tab-nav", "#tab-panels", conflicts).init();
});