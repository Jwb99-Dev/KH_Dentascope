/* ============================================================
   KH DENTASCOPE UK — HOME PAGE SCRIPT
   Page-specific interactions for the home page
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SMOOTH SCROLL for "What We Do" CTA ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── HERO PARALLAX (subtle) ──────────────────────────────── */
  const heroImg = document.querySelector('.hero-image-wrap');
  if (heroImg && window.matchMedia('(min-width:769px)').matches) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroImg.style.transform = `translateY(${scrolled * 0.04}px)`;
    }, { passive: true });
  }

});
