// ============================================================
// quote.js — QuoteLoader class
// Fetches philosophy quotes from API Ninjas, restricted to a
// curated list of Roman & Greek thinkers. Uses v2/randomquotes
// with the free-tier `author` + `categories` filters (one author
// per request — we pick from the list client-side).
// ============================================================

const API_NINJAS_KEY = "TfJxUmVanlK5IScr39yLrw2xMdbut75AWafzHmLg";

const ALLOWED_PHILOSOPHERS = [
  "Marcus Aurelius",
  "Seneca",
  "Epictetus",
  "Cicero",
  "Plato",
  "Aristotle",
  "Socrates",
  "Epicurus",
  "Lucretius"
];

const FALLBACK_QUOTES = [
  { quote: "Fate leads the willing and drags the reluctant.", author: "Seneca" },
  { quote: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { quote: "It is not things that disturb us, but our judgments about things.", author: "Epictetus" },
  { quote: "The unexamined life is not worth living.", author: "Socrates" }
];

export class QuoteLoader {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
  }

  render(quote, author) {
    if (!this.container) return;
    this.container.innerHTML = `
      <p class="quote-text">
        "${quote}"
        <span class="attribution">— ${author}</span>
      </p>
    `;
  }

  shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  isAllowedAuthor(author) {
    if (!author) return false;
    const lower = author.toLowerCase();
    return ALLOWED_PHILOSOPHERS.some(name => lower.includes(name.toLowerCase()));
  }

  async fetchForAuthor(author) {
    const params = new URLSearchParams({
      author,
      categories: "philosophy"
    });

    const response = await fetch(
      `https://api.api-ninjas.com/v2/randomquotes?${params}`,
      { headers: { "X-Api-Key": API_NINJAS_KEY } }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(data.error || `Request failed with status ${response.status}`);
    }

    const first = Array.isArray(data) ? data[0] : null;

    if (!first || !first.quote) throw new Error("Empty response from quotes API");
    if (!this.isAllowedAuthor(first.author)) {
      throw new Error(`Quote author "${first.author}" is not in the allowed list`);
    }

    return first;
  }

  async load() {
    const candidates = this.shuffle(ALLOWED_PHILOSOPHERS).slice(0, 3);

    for (const author of candidates) {
      try {
        const result = await this.fetchForAuthor(author);
        this.render(result.quote, result.author);
        return;
      } catch (err) {
        console.warn(`No quote found for ${author}:`, err.message);
      }
    }

    console.warn("All philosopher lookups failed, using local fallback.");
    const fallback = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    this.render(fallback.quote, fallback.author);
  }
}
