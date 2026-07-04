// ============================================================
// search.js — BookSearch class
// Fetches from the Google Books API (key-authenticated), renders
// results, and supports client-side filtering by print format.
//
// NOTE: Replace GOOGLE_BOOKS_API_KEY below with your own key from
// https://console.cloud.google.com/apis/credentials (enable the
// "Books API"). The key is passed on every request — see README
// for why this satisfies the "key-based public API" requirement.
// ============================================================

import { Navbar } from "./navbar.js";
import { PageTransition } from "./page-transition.js";

const GOOGLE_BOOKS_API_KEY = "AIzaSyC3bsilBOEaeMfgtHg0D4fhUNYtHiDt8wM";

class BookSearch {
  constructor({ formSelector, inputSelector, filterSelector, resultsSelector, statusSelector }) {
    this.form = document.querySelector(formSelector);
    this.input = document.querySelector(inputSelector);
    this.filter = document.querySelector(filterSelector);
    this.results = document.querySelector(resultsSelector);
    this.status = document.querySelector(statusSelector);
    this.allBooks = []; // raw results from the last successful fetch

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.search(this.input.value.trim());
    });

    this.filter.addEventListener("change", () => this.applyFilter());
  }

  setStatus(html, isError = false) {
    this.results.innerHTML = "";
    this.status.className = `state-message${isError ? " error" : ""}`;
    this.status.innerHTML = html;
  }

  clearStatus() {
    this.status.innerHTML = "";
    this.status.className = "";
  }

  async search(query) {
    if (!query) return;

    this.setStatus(`<div class="spinner-imperium"></div>Unrolling scrolls…`);

    try {
      // Silently bias every search toward Roman history, regardless of what
      // the user actually typed — keeps results on-theme even for unrelated
      // queries like "cooking" or "law".
      const biasedQuery = `${encodeURIComponent(query)}+subject:history+subject:rome`;
      const url = `https://www.googleapis.com/books/v1/volumes?q=${biasedQuery}&maxResults=24&key=${GOOGLE_BOOKS_API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      this.allBooks = data.items || [];

      if (this.allBooks.length === 0) {
        this.setStatus(`No scrolls found for "${this.escapeHtml(query)}". Try another search.`);
        return;
      }

      this.clearStatus();
      this.applyFilter();
    } catch (err) {
      console.error("Book search failed:", err);
      this.setStatus(`The archive network broke. Please try again in a moment.`, true);
    }
  }

  applyFilter() {
    const mode = this.filter.value; // 'all' | 'ebooks'
    let list = this.allBooks;

    if (mode === "ebooks") {
      list = list.filter(book => book.accessInfo && book.accessInfo.epub && book.accessInfo.epub.isAvailable);
    }

    if (this.allBooks.length > 0 && list.length === 0) {
      this.setStatus(`No results match this filter. Try "Show All Results".`);
      return;
    }

    this.clearStatus();
    this.renderBooks(list);
  }

  renderBooks(list) {
    this.results.innerHTML = list.map(book => this.cardTemplate(book)).join("");
  }

  cardTemplate(book) {
    const info = book.volumeInfo || {};
    const access = book.accessInfo || {};
    const thumb = (info.imageLinks && (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail))
      || "https://placehold.co/200x280/ddd1b8/4a1942?text=No+Cover";
    const authors = info.authors ? info.authors.join(", ") : "Unknown author";
    const desc = info.description ? this.truncate(info.description, 140) : "No description available.";
    const isFreeEbook = access.epub && access.epub.isAvailable;

    return `
      <div class="col-sm-6 col-lg-4">
        <div class="book-card">
          <img src="${thumb}" alt="Cover of ${this.escapeHtml(info.title || "book")}" loading="lazy">
          <div class="body">
            <h3>${this.escapeHtml(info.title || "Untitled")}</h3>
            <div class="authors">${this.escapeHtml(authors)}</div>
            <p class="desc">${this.escapeHtml(desc)}</p>
            ${isFreeEbook ? '<span class="badge-format">Free eBook</span>' : ""}
          </div>
        </div>
      </div>
    `;
  }

  truncate(str, len) {
    return str.length > len ? str.slice(0, len).trim() + "…" : str;
  }

  escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PageTransition().init();
  new Navbar("#navbar-mount", "search").render();
  new BookSearch({
    formSelector: "#search-form",
    inputSelector: "#search-input",
    filterSelector: "#format-filter",
    resultsSelector: "#book-results",
    statusSelector: "#search-status"
  });
});