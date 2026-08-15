// Theme handling ------------------------------------------------------------
const THEME_KEY = 'mfh-theme';

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  toggles.forEach((btn) => btn.setAttribute('aria-pressed', String(theme === 'dark')));
}

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

function bindThemeToggle() {
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', toggleTheme);
  });
}

// Scroll reveal ---------------------------------------------------------------
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

// Active nav link -------------------------------------------------------------
function markActiveNav() {
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href');
    const isActive = href === path || (href !== '/' && path.startsWith(href));
    link.classList.toggle('is-active', Boolean(isActive));
  });
}

function init() {
  initTheme();
  bindThemeToggle();
  initReveal();
  markActiveNav();
}

init();
// Re-run after Astro View Transitions swap the DOM
document.addEventListener('astro:after-swap', init);
document.addEventListener('astro:page-load', initReveal);
