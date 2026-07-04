// ============================================================
// navbar.js — Navbar class
// Injects one consistent nav bar into every page from a single
// source of truth, so the nav can't drift out of sync between pages.
// ============================================================

export class Navbar {
  constructor(mountSelector, activePage) {
    this.mount = document.querySelector(mountSelector);
    this.activePage = activePage; // 'index' | 'search' | 'chronicles'
    this.links = [
      { id: "index", href: "index.html", label: "Pantheon" },
      { id: "search", href: "search.html", label: "Bibliotheca" },
      { id: "chronicles", href: "chronicles.html", label: "Chronicles" }
    ];
  }

  render() {
    if (!this.mount) return;
    const items = this.links
      .map(link => {
        const activeClass = link.id === this.activePage ? "active" : "";
        const ariaCurrent = link.id === this.activePage ? 'aria-current="page"' : "";
        return `<a class="nav-link ${activeClass}" href="${link.href}" ${ariaCurrent}>${link.label}</a>`;
      })
      .join("");

    this.mount.innerHTML = `
      <nav class="navbar navbar-imperium navbar-expand-md">
        <div class="container">
          <a class="navbar-brand" href="index.html">IMPERIUM <span>ARCHIVE</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent"
            aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navContent">
            <div class="navbar-nav ms-auto">
              ${items}
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}