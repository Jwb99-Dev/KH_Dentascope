/* ============================================================
   KH DENTASCOPE UK — CONTACT PAGE SCRIPT
   Form validation and submission handling
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form       = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  const errorMsg   = document.getElementById('form-error');

  if (!form) return;

  /* ── CLIENT-SIDE VALIDATION ─────────────────────────────── */
  function validateField(field) {
    const val = field.value.trim();
    let valid = true;

    if (field.hasAttribute('required') && !val) valid = false;
    if (field.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) valid = false;
    if (field.tagName === 'SELECT' && field.hasAttribute('required') && !val) valid = false;
    if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) valid = false;

    field.classList.toggle('error', !valid);
    return valid;
  }

  /* Live validation on blur */
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });

  /* ── FORM SUBMIT ─────────────────────────────────────────── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allValid = true;
    form.querySelectorAll('input, select, textarea').forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    errorMsg.hidden = true;
    successMsg.hidden = true;

    if (!allValid) {
      errorMsg.hidden = false;
      errorMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    /*
      ── TO CONNECT A REAL BACKEND ──────────────────────────
      Replace the block below with a fetch() call to your
      preferred form handler (e.g. Formspree, Netlify Forms,
      or your own server endpoint).

      Example with Formspree:
      const data = new FormData(form);
      fetch('https://formspree.io/f/YOUR_ID', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(res => {
        if (res.ok) showSuccess();
        else showError();
      });
      ────────────────────────────────────────────────────────
    */

    // Demo: simulate successful submission
    const submitBtn = form.querySelector('.contact-submit');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      form.querySelectorAll('.error').forEach(f => f.classList.remove('error'));
      successMsg.hidden = false;
      submitBtn.innerHTML = 'Send Enquiry <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      submitBtn.disabled = false;
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });

});
