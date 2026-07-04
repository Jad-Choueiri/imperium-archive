// ============================================================
// emperors.js — EmperorGallery class
// Renders the 15 emperors from data.js into card ("stele") markup.
// Demonstrates dynamic content injection via a JS class + loop, as
// required by the assignment brief.
// ============================================================

import { Navbar } from "./navbar.js";
import { PageTransition } from "./page-transition.js";
import { emperors } from "./data.js";

class EmperorGallery {
  constructor(containerSelector, data) {
    this.container = document.querySelector(containerSelector);
    this.data = data;
  }

  toRoman(num) {
    const map = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    let result = "";
    for (const [value, symbol] of map) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
    return result;
  }

  cardTemplate(emperor, index) {
    return `
      <div class="col-sm-6 col-lg-4">
        <div class="stele">
          <span class="numeral">${this.toRoman(index + 1)}</span>
          <h3>${emperor.name}</h3>
          <span class="dynasty">${emperor.dynasty}</span>
          <div class="reign">${emperor.reign}</div>
          <p class="summary">${emperor.summary}</p>
        </div>
      </div>
    `;
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = this.data.map((e, i) => this.cardTemplate(e, i)).join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PageTransition().init();
  new Navbar("#navbar-mount", "pantheon").render();
  new EmperorGallery("#emperor-grid", emperors).render();
});