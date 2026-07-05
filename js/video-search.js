// ============================================================
// video-search.js — VideoSearch class
// Fetches from the YouTube Data API v3 (key-authenticated), silently
// biasing every search toward Roman history, same trick as BookSearch.
// Runs alongside BookSearch as an independent grid + status pair, so
// a YouTube failure never blocks book results (or vice versa).
//
// NOTE: Replace YOUTUBE_API_KEY below with your own key from
// https://console.cloud.google.com/apis/credentials (Enable
// "YouTube Data API v3" first).
// ============================================================

const YOUTUBE_API_KEY = "AIzaSyC3bsilBOEaeMfgtHg0D4fhUNYtHiDt8wM";

class VideoSearch {
  constructor({ resultsSelector, statusSelector }) {
    this.results = document.querySelector(resultsSelector);
    this.status = document.querySelector(statusSelector);
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

    this.setStatus(`<div class="spinner-imperium"></div>Scouting the archives for footage…`);

    try {
      // Silently bias every search toward Roman history, matching the
      // same approach used for book search.
      const biasedQuery = `${encodeURIComponent(query)} ancient Rome history`;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&q=${biasedQuery}&key=${YOUTUBE_API_KEY}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      const data = await response.json();
      const videos = data.items || [];

      if (videos.length === 0) {
        this.setStatus(`No footage found for "${this.escapeHtml(query)}".`);
        return;
      }

      this.clearStatus();
      this.renderVideos(videos);
    } catch (err) {
      console.error("Video search failed:", err);
      this.setStatus(`The archive's projector broke. Please try again in a moment.`, true);
    }
  }

  renderVideos(videos) {
    this.results.innerHTML = videos.map(video => this.cardTemplate(video)).join("");
  }

  cardTemplate(video) {
    const { videoId } = video.id;
    const snippet = video.snippet || {};
    const thumb = (snippet.thumbnails && snippet.thumbnails.medium && snippet.thumbnails.medium.url)
      || "https://placehold.co/320x180/ddd1b8/4a1942?text=No+Thumbnail";

    return `
      <div class="col-sm-6 col-lg-4">
        <a class="video-card" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">
          <img src="${thumb}" alt="Thumbnail for ${this.escapeHtml(snippet.title || 'video')}" loading="lazy">
          <div class="body">
            <h3>${this.escapeHtml(snippet.title || "Untitled video")}</h3>
            <div class="channel">${this.escapeHtml(snippet.channelTitle || "Unknown channel")}</div>
          </div>
        </a>
      </div>
    `;
  }

  escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
}

export { VideoSearch };