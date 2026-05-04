/* multicore_sim landing page — theme toggle + latest release fetch */

const STORAGE_THEME = "ms_theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(STORAGE_THEME, theme); } catch {}
}

document.addEventListener("DOMContentLoaded", () => {
  /* initial theme: stored → media query → dark */
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_THEME); } catch {}
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(saved || (prefersLight ? "light" : "dark"));

  /* theme toggle */
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  /* footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* latest release tag (best-effort, silent on failure / no releases yet) */
  fetch("https://api.github.com/repos/PCSL-git/multicore-sim/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      if (!data || !data.tag_name) return;
      const badge = document.getElementById("dl-version");
      if (badge) badge.textContent = data.tag_name;
      if (data.html_url) {
        const a = document.getElementById("dl-primary");
        const b = document.getElementById("dl-secondary");
        if (a) a.href = data.html_url;
        if (b) b.href = data.html_url;
      }
    })
    .catch(() => {});
});
