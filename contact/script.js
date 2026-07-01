/* ============================================================
   KH DENTASCOPE UK — CONTACT PAGE SCRIPT
   Form validation + EmailJS submission
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form       = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  const errorMsg   = document.getElementById('form-error');

  if (!form) return;

  /* ── URL PARAM AUTOFILL (from Products "Enquire Now" CTA) ──
     Products page links here as:
     contact/index.html?enquiry_type=product&message=I would like...
     ──────────────────────────────────────────────────────── */
  const params = new URLSearchParams(window.location.search);

  const enquiryTypeParam = params.get('enquiry_type');
  if (enquiryTypeParam) {
    const selectEl = document.getElementById('enquiry-type');
    if (selectEl) {
      selectEl.value = enquiryTypeParam;
      /* Brief highlight so the user notices it's been filled */
      selectEl.style.transition = 'box-shadow 0.4s ease';
      selectEl.style.boxShadow  = '0 0 0 3px rgba(5,74,128,0.18)';
      setTimeout(() => { selectEl.style.boxShadow = ''; }, 1800);
    }
  }

  const messageParam = params.get('message');
  if (messageParam) {
    const msgEl = document.getElementById('message');
    if (msgEl) {
      msgEl.value = messageParam;
      /* Scroll to and briefly highlight the prefilled field */
      setTimeout(() => {
        msgEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        msgEl.style.transition = 'box-shadow 0.4s ease';
        msgEl.style.boxShadow  = '0 0 0 3px rgba(5,74,128,0.18)';
        setTimeout(() => { msgEl.style.boxShadow = ''; }, 1800);
      }, 500);
    }
  }

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

    const submitBtn = form.querySelector('.contact-submit');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    /* ── EMAILJS SEND ──────────────────────────────────────── */
    const templateParams = {
      first_name:    form.first_name.value.trim(),
      last_name:     form.last_name.value.trim(),
      email:         form.email.value.trim(),
      phone:         form.phone.value.trim()         || 'Not provided',
      practice:      form.practice.value.trim()      || 'Not provided',
      enquiry_type:  form.enquiry_type.value,
      message:       form.message.value.trim(),
    };

    emailjs.send('service_ftooeni', 'template_qb9sttm', templateParams)
      .then(() => {
        form.reset();
        form.querySelectorAll('.error').forEach(f => f.classList.remove('error'));
        successMsg.hidden = false;
        submitBtn.innerHTML = 'Send Enquiry <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
        submitBtn.disabled = false;
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        errorMsg.textContent = '⚠️ Something went wrong sending your message. Please try again or email us directly.';
        errorMsg.hidden = false;
        submitBtn.innerHTML = 'Send Enquiry <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
        submitBtn.disabled = false;
        errorMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
  });

});
