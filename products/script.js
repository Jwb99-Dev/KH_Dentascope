/* ============================================================
   KH DENTASCOPE UK — PRODUCTS PAGE SCRIPT
   Reads from products-catalogue.js and builds the full
   product grid, filters and lightbox dynamically.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── ELEMENT REFS ──────────────────────────────────────── */
  const grid          = document.getElementById('products-grid');
  const countEl       = document.getElementById('products-count');
  const emptyEl       = document.getElementById('products-empty');
  const brandFilters  = document.getElementById('brand-filters');
  const catFilters    = document.getElementById('category-filters');
  const resetBtn      = document.getElementById('filter-reset');
  const emptyResetBtn = document.getElementById('empty-reset');

  /* Lightbox elements */
  const lightbox         = document.getElementById('lightbox');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxClose    = document.getElementById('lightbox-close');
  const lightboxHeader   = document.getElementById('lightbox-header');
  const lightboxBody     = document.getElementById('lightbox-body');
  const lightboxEnquire  = document.getElementById('lightbox-enquire-btn');
  const lightboxPdfBtn   = document.getElementById('lightbox-pdf-btn');

  /* ── FILTER STATE ──────────────────────────────────────── */
  let activeFilters = { brand: 'all', category: 'all' };

  /* ── BUILD FILTER CHIPS ─────────────────────────────────── */
  function buildFilters() {
    // Brands
    const brands = Object.keys(BRANDS);
    brands.forEach(brand => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip';
      btn.dataset.filter = 'brand';
      btn.dataset.value  = brand;
      btn.textContent    = brand;
      brandFilters.appendChild(btn);
    });

    // Categories
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip';
      btn.dataset.filter = 'category';
      btn.dataset.value  = cat;
      btn.textContent    = cat;
      catFilters.appendChild(btn);
    });

    // Chip click handlers
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const filterType = chip.dataset.filter;
        const filterVal  = chip.dataset.value;

        // Update active state within the chip group
        const groupId = filterType === 'brand' ? 'brand-filters' : 'category-filters';
        document.querySelectorAll(`#${groupId} .filter-chip`).forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        activeFilters[filterType] = filterVal;
        applyFilters();
      });
    });
  }

  /* ── APPLY FILTERS ──────────────────────────────────────── */
  function applyFilters() {
    let visible = 0;

    document.querySelectorAll('.product-tile').forEach(tile => {
      const tBrand = tile.dataset.brand;
      const tCat   = tile.dataset.category;

      const brandMatch = activeFilters.brand    === 'all' || tBrand === activeFilters.brand;
      const catMatch   = activeFilters.category === 'all' || tCat   === activeFilters.category;
      const show = brandMatch && catMatch;

      tile.dataset.hidden = show ? 'false' : 'true';
      tile.style.display  = show ? '' : 'none';
      if (show) visible++;
    });

    countEl.textContent = `Showing ${visible} product${visible !== 1 ? 's' : ''}`;
    emptyEl.hidden = visible > 0;
    grid.hidden    = visible === 0;
  }

  /* ── RESET FILTERS ──────────────────────────────────────── */
  function resetFilters() {
    activeFilters = { brand: 'all', category: 'all' };
    document.querySelectorAll('.filter-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.value === 'all');
    });
    applyFilters();
  }

  resetBtn.addEventListener('click', resetFilters);
  emptyResetBtn.addEventListener('click', resetFilters);

  /* ── CONTACT PAGE URL WITH AUTOFILL PARAMS ──────────────── */
  function buildContactUrl(productName) {
    const base   = '../contact/index.html';
    const type   = 'product';
    const msg    = `I would like to know more information and pricing regarding ${productName}`;
    return `${base}?enquiry_type=${encodeURIComponent(type)}&message=${encodeURIComponent(msg)}`;
  }

  /* ── RENDER PRODUCT TILES ────────────────────────────────── */
  function renderTiles() {
    grid.innerHTML = '';

    PRODUCTS.forEach(p => {
      const tile = document.createElement('article');
      tile.className     = 'product-tile fade-in';
      tile.dataset.brand = p.brand;
      tile.dataset.category = p.category;
      tile.dataset.id    = p.id;
      tile.setAttribute('role', 'listitem');

      /* Image / placeholder */
      const imgHTML = p.image
        ? `<img src="${p.image}"
                onerror="this.parentElement.innerHTML='<div class=\\'product-tile-img-placeholder\\'><svg width=\\'48\\' height=\\'48\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><circle cx=\\'11\\' cy=\\'11\\' r=\\'8\\'/><line x1=\\'21\\' y1=\\'21\\' x2=\\'16.65\\' y2=\\'16.65\\'/></svg><span>Image Coming Soon</span></div>'"
                class="product-tile-img"
                alt="${p.name}"
                loading="lazy">`
        : `<div class="product-tile-img-placeholder">
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
             <span>Image Coming Soon</span>
           </div>`;

      /* Brand logo */
      const brandLogoHTML = p.brandLogo
        ? `<img src="${p.brandLogo}" onerror="this.style.display='none'" alt="${p.brand}" class="product-tile-brand-logo">`
        : '';

      /* Feature bullets */
      const featuresHTML = p.features.map(f => `<li>${f}</li>`).join('');

      /* Tile markup */
      tile.innerHTML = `
        ${p.bestseller ? '<span class="product-badge">Best Seller</span>' : ''}
        <div class="product-tile-img-wrap">${imgHTML}</div>
        <div class="product-tile-body">
          <div class="product-tile-brand-row">
            ${brandLogoHTML}
            <span class="product-tile-brand-name">${p.brand}</span>
          </div>
          <h3 class="product-tile-name">${p.name}</h3>
          <span class="product-tile-model">${p.model}</span>
          <ul class="product-tile-features">${featuresHTML}</ul>
          <div class="product-tile-ctas">
            <a href="${buildContactUrl(p.name)}" class="btn btn-primary">Enquire Now</a>
            <button class="btn btn-outline lightbox-trigger" data-product-id="${p.id}">Learn More</button>
          </div>
        </div>`;

      grid.appendChild(tile);
    });

    /* Attach lightbox triggers */
    document.querySelectorAll('.lightbox-trigger').forEach(btn => {
      btn.addEventListener('click', () => openLightbox(btn.dataset.productId));
    });

    applyFilters();
  }

  /* ── LIGHTBOX OPEN ──────────────────────────────────────── */
  function openLightbox(productId) {
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;

    /* Header */
    const imgHTML = p.image
      ? `<img src="${p.image}"
              onerror="this.parentElement.innerHTML='<div class=\\'lightbox-header-img-placeholder\\'><svg width=\\'64\\' height=\\'64\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><polyline points=\\'21 15 16 10 5 21\\'/></svg><span>Image Coming Soon</span></div>'"
              class="lightbox-header-img"
              alt="${p.name}">`
      : `<div class="lightbox-header-img-placeholder">
           <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
           <span>Image Coming Soon</span>
         </div>`;

    const brandLogoHTML = p.brandLogo
      ? `<img src="${p.brandLogo}" onerror="this.style.display='none'" alt="${p.brand}" class="lightbox-header-brand-logo">`
      : '';

    lightboxHeader.innerHTML = `
      <div class="lightbox-header-img-wrap">${imgHTML}</div>
      <div class="lightbox-header-info">
        ${brandLogoHTML}
        <h2 class="lightbox-header-name">${p.name}</h2>
        <p class="lightbox-header-model">${p.model}</p>
        <span class="lightbox-header-brand-badge">${p.brand}</span>
      </div>`;

    /* Body */
    const specsHTML = p.lightbox.specs.map(s =>
      `<tr><td>${s.label}</td><td>${s.value}</td></tr>`
    ).join('');

    /* Gallery — only images with a src */
    const galleryImages = p.lightbox.images.filter(img => img.src && img.src !== '');
    const galleryHTML = galleryImages.length > 1
      ? `<h3 class="lightbox-gallery-title">Image Gallery</h3>
         <div class="lightbox-gallery">
           ${galleryImages.map(img =>
             `<div class="lightbox-gallery-item" tabindex="0" role="button" aria-label="View ${img.caption}">
                <img src="${img.src}"
                     onerror="this.parentElement.style.display='none'"
                     alt="${img.caption}"
                     loading="lazy">
                <div class="gallery-caption">${img.caption}</div>
              </div>`
           ).join('')}
         </div>`
      : '';

    lightboxBody.innerHTML = `
      <p class="lightbox-description">${p.lightbox.description}</p>
      ${specsHTML ? `<h3 class="lightbox-specs-title">Specifications</h3>
        <table class="lightbox-specs">${specsHTML}</table>` : ''}
      ${galleryHTML}`;

    /* Enquire button */
    lightboxEnquire.href = buildContactUrl(p.name);

    /* PDF button */
    if (p.pdfDownload) {
      lightboxPdfBtn.href    = p.pdfDownload;
      lightboxPdfBtn.hidden  = false;
    } else {
      lightboxPdfBtn.hidden = true;
    }

    /* Show lightbox */
    lightbox.classList.add('is-open');
    lightboxBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    /* Focus trap start */
    setTimeout(() => lightboxClose.focus(), 50);

    /* Gallery image zoom (simple — swap header image) */
    lightboxBody.querySelectorAll('.lightbox-gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const src     = item.querySelector('img')?.src;
        const caption = item.querySelector('.gallery-caption')?.textContent;
        if (!src) return;
        const mainImg = lightboxHeader.querySelector('.lightbox-header-img');
        if (mainImg) {
          mainImg.src = src;
          mainImg.alt = caption || p.name;
        }
      });
    });
  }

  /* ── LIGHTBOX CLOSE ──────────────────────────────────────── */
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    lightboxHeader.innerHTML = '';
    lightboxBody.innerHTML   = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  /* Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  /* ── CHECK URL PARAMS for section anchor from nav ────────── */
  function handleUrlSection() {
    const hash = window.location.hash;
    if (!hash) return;
    const map = {
      '#microscopes': { brand: 'all',      category: 'Dental Microscope' },
      '#loupes':      { brand: 'all',      category: 'Dental Loupes'     },
      '#ophthalmic':  { brand: 'all',      category: 'Ophthalmic/ENT'    },
      '#compare':     { brand: 'all',      category: 'all'               },
    };
    if (map[hash]) {
      activeFilters = { ...map[hash] };
      document.querySelectorAll('.filter-chip').forEach(c => {
        const matchBrand = c.dataset.filter === 'brand' && c.dataset.value === activeFilters.brand;
        const matchCat   = c.dataset.filter === 'category' && c.dataset.value === activeFilters.category;
        c.classList.toggle('active', matchBrand || matchCat);
      });
      applyFilters();
    }
  }

  /* ── INIT ───────────────────────────────────────────────── */
  buildFilters();
  renderTiles();
  handleUrlSection();

  /* Re-run scroll animations after tiles render */
  if (typeof initScrollAnimations === 'function') initScrollAnimations();

  /* ── AUTO-OPEN LIGHTBOX from home page "Learn More" links ── */
  const openParam = new URLSearchParams(window.location.search).get('open');
  if (openParam) {
    setTimeout(() => openLightbox(openParam), 600);
  }

});

/* ── HELPER: initScrollAnimations (defined in global.js,
   called again after dynamic content renders) ─────────────── */
