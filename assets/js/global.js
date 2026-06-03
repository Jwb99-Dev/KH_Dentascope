/* ============================================================
   KH DENTASCOPE UK — GLOBAL JAVASCRIPT
   Handles: Preloader, Nav (desktop + mobile), Scroll animations,
            Active nav state, Smooth hash scrolling
   ============================================================ */

/* ── NAV LABELS (change here → updates all nav instances) ─── */
const NAV_CONFIG = {
  cta:      "Get in Touch",
  ctaHref:  "../contact/index.html",
  links: [
    { label: "Home", href: "../home/index.html" },
    {
      label: "Services",
      href:  "../services/index.html",
      dropdown: [
        { label: "Demos & Room Assessment",  href: "../services/index.html#demos"     },
        { label: "Installation & Training",  href: "../services/index.html#install"   },
        { label: "Servicing & Aftercare",    href: "../services/index.html#servicing" },
        { label: "Education & Institutions", href: "../services/index.html#education" },
      ]
    },
    { label: "Products", href: "../products/index.html" },
    {
      label: "Resources",
      href:  "../resources/index.html",
      dropdown: [
        { label: "Brochures & Spec Sheets", href: "../resources/index.html#brochures" },
        { label: "FAQs",                    href: "../resources/index.html#faqs"       },
        { label: "Guides",                  href: "../resources/index.html#guides"     },
      ]
    },
    { label: "About", href: "../about/index.html" },
  ]
};

/* Override relative paths for the home page */
function fixHomeHref(href) {
  if (window.location.pathname.includes('/home/')) return href;
  return href;
}

/* ── PRELOADER ─────────────────────────────────────────────── */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  // Hide after 2 seconds
  setTimeout(() => {
    preloader.classList.add('hidden');
    document.body.style.overflow = '';
    triggerPageAnimations();
  }, 1000);
  document.body.style.overflow = 'hidden';
}

/* ── BUILD NAV ─────────────────────────────────────────────── */
function buildNav() {
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  const currentPath = window.location.pathname;

  const logoHTML = `
    <a class="nav-logo" href="../home/index.html" aria-label="KH Dentascope UK Home">
      <img src="../Website Assets/Tooth Logo Nav Bar.png"
           onerror="this.style.display='none'"
           alt="KH Dentascope UK Logo">
      <span class="nav-logo-text">KH Dentascope<span>UK</span></span>
    </a>`;

  // Desktop menu
  let menuHTML = '<nav class="nav-menu" role="navigation" aria-label="Main navigation"><ul style="display:flex;align-items:center;gap:1.5rem;list-style:none;">';
  NAV_CONFIG.links.forEach(link => {
    const isActive = currentPath.includes(link.href.replace('../','').split('/')[0]);
    if (link.dropdown) {
      menuHTML += `
        <li class="nav-item" role="none">
          <a class="nav-link${isActive?' active':''}" href="${link.href}" role="menuitem">
            ${link.label}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="4 6 8 10 12 6"/></svg>
          </a>
          <div class="nav-dropdown" role="menu">
            ${link.dropdown.map(d=>`<a href="${d.href}" role="menuitem">${d.label}</a>`).join('')}
          </div>
        </li>`;
    } else {
      menuHTML += `
        <li class="nav-item" role="none">
          <a class="nav-link${isActive?' active':''}" href="${link.href}" role="menuitem">${link.label}</a>
        </li>`;
    }
  });
  menuHTML += `</ul></nav>`;

  // CTA
  const ctaHTML = `<a class="nav-cta" href="${NAV_CONFIG.ctaHref}">${NAV_CONFIG.cta}</a>`;

  // Hamburger
  const hambHTML = `
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open navigation menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>`;

  navEl.innerHTML = `
    <div class="nav-inner">
      ${logoHTML}
      ${menuHTML}
      <div style="display:flex;align-items:center;gap:1rem;">
        ${ctaHTML}
        ${hambHTML}
      </div>
    </div>`;

  // Mobile drawer
  let mobileHTML = `
    <div class="nav-mobile-overlay" id="nav-overlay"></div>
    <div class="nav-mobile-drawer" id="nav-drawer" role="dialog" aria-label="Mobile navigation">`;
  NAV_CONFIG.links.forEach(link => {
    if (link.dropdown) {
      mobileHTML += `
        <div class="mobile-nav-section">
          <a class="mobile-nav-link" href="${link.href}">${link.label}</a>
          <div class="mobile-nav-sub">
            ${link.dropdown.map(d=>`<a href="${d.href}">${d.label}</a>`).join('')}
          </div>
        </div>`;
    } else {
      mobileHTML += `<a class="mobile-nav-link" href="${link.href}">${link.label}</a>`;
    }
  });
  mobileHTML += `
      <div class="mobile-nav-cta">
        <a class="btn btn-primary" href="${NAV_CONFIG.ctaHref}" style="width:100%;justify-content:center;">${NAV_CONFIG.cta}</a>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', mobileHTML);

  // Hamburger toggle
  const hamb = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  if (hamb && drawer && overlay) {
    function toggleMobileNav() {
      const open = drawer.classList.toggle('open');
      overlay.classList.toggle('open', open);
      hamb.classList.toggle('open', open);
      hamb.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
    hamb.addEventListener('click', toggleMobileNav);
    overlay.addEventListener('click', toggleMobileNav);
  }
}

/* ── NAV SCROLL BEHAVIOUR ──────────────────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── HANDLE HASH LINKS (dropdown → page scroll) ─────────────── */
function handleHashOnLoad() {
  if (!window.location.hash) return;
  setTimeout(() => {
    const target = document.querySelector(window.location.hash);
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, 400);
}

/* ── SCROLL FADE ANIMATIONS ────────────────────────────────── */
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

function triggerPageAnimations() {
  initScrollAnimations();
}

/* ── BUILD FOOTER ──────────────────────────────────────────── */
function buildFooter() {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;
  footerEl.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="../Website Assets/Tooth Logo Nav Bar.png"
               onerror="this.style.display='none'"
               class="footer-brand-logo"
               alt="KH Dentascope UK">
          <div class="footer-brand-name">KH Dentascope UK</div>
          <p class="footer-brand-tagline">Expertly sourced dental microscopes, professionally installed across the United Kingdom.</p>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="../services/index.html#demos">Demos &amp; Room Assessment</a></li>
            <li><a href="../services/index.html#install">Installation &amp; Training</a></li>
            <li><a href="../services/index.html#servicing">Servicing &amp; Aftercare</a></li>
            <li><a href="../services/index.html#education">Education &amp; Institutions</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="../products/index.html#microscopes">Dental Microscopes</a></li>
            <li><a href="../products/index.html#loupes">Dental Loupes</a></li>
            <li><a href="../products/index.html#ophthalmic">Ophthalmic/ENT</a></li>
            <li><a href="../products/index.html#compare">Compare Models</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="../about/index.html">About Us</a></li>
            <li><a href="../resources/index.html">Resources</a></li>
            <li><a href="../contact/index.html">Contact</a></li>
            <li><a href="../resources/index.html#faqs">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; ${new Date().getFullYear()} KH Dentascope UK. All rights reserved.</span>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </div>`;
}

/* ── INIT ALL ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  initNavScroll();
  handleHashOnLoad();
  initPreloader();
});
