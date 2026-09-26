// Shared behavior for the plain fallback pages (about/projects/contact):
// highlight the current nav link and stamp the footer with the current
// year. Imported as a native ES6 module via <script type="module">.

function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav__link").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("main-nav__link--active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function stampFooterYear() {
  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

highlightActiveNavLink();
stampFooterYear();
