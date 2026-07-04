// ============================================================
// narrative.js — ScrollNarrative class
// Watches each .narrative-block as it scrolls into view and fades
// in the matching fixed background layer (via data-bg -> element id).
// ============================================================

export class ScrollNarrative {
  constructor(blockSelector) {
    this.blocks = document.querySelectorAll(blockSelector);
    this.currentActiveId = "bg-hero";
  }

  activateBackground(targetId) {
    if (targetId === this.currentActiveId) return;

    if (this.currentActiveId) {
      const previous = document.getElementById(this.currentActiveId);
      if (previous) previous.classList.remove("active");
    }

    const next = document.getElementById(targetId);
    if (next) next.classList.add("active");

    this.currentActiveId = targetId;
  }

  init() {
    if (this.blocks.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const targetId = entry.target.dataset.bg;
            this.activateBackground(targetId);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.blocks.forEach(block => observer.observe(block));
  }
}
