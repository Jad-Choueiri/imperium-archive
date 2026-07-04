// ============================================================
// chronicles.js — TabController class
// CUSTOM UI REQUIREMENT: tabbed navigation implemented in JS.
// Clicking a tab button toggles the corresponding panel's visibility
// without a page reload, and keeps ARIA state in sync for
// accessibility (aria-selected / hidden).
// ============================================================

import { Navbar } from "./navbar.js";
import { conflicts } from "./data.js";

class TabController {
  constructor(navSelector, panelContainerSelector, data) {
    this.nav = document.querySelector(navSelector);
    this.panelContainer = document.querySelector(panelContainerSelector);
    this.data = data;
    this.tabKeys = Object.keys(data); // ['early', 'pax', 'crisis']
  }

  conflictCard(item) {
    return `
      <div class="conflict-card">
        <div class="date">${item.date}</div>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
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
  }

  init() {
    this.buildMarkup();
    this.bindEvents();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Navbar("#navbar-mount", "chronicles").render();
  new TabController("#tab-nav", "#tab-panels", conflicts).init();
});