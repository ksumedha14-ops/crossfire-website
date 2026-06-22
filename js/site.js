/* ═══════════════════════════════════════════════════════════
   CROSSFIRE MARKETING — Shared Site JS
   Handles: nav active state, mobile menu, FAQ accordion,
   scroll reveal, form validation, real email submission,
   Google Analytics 4 event tracking.
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── FORM CONFIG ──────────────────────────────────────────
     Get your free access key at https://web3forms.com
     Sign in with Google → "Create Access Key" → paste below.
     Free tier: 250 submissions/month, instant setup.
  ─────────────────────────────────────────────────────────── */
  var WEB3FORMS_KEY = 'af1edb38-7263-4dac-bc89-42485e7d3943';

  /* ── ANALYTICS HELPER ─────────────────────────────────── */
  function gaEvent(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params || {});
  }

  /* ── NAV: active link ─────────────────────────────────── */
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (
      href === page ||
      (page === '' && href === 'index.html') ||
      (page === 'index.html' && href === '/')
    ) {
      a.classList.add('active');
    }
  });

  /* ── NAV: mobile menu ─────────────────────────────────── */
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    hamburger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hamburger.click(); }
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* ── FOOTER: dynamic copyright year ──────────────────── */
  var footerCopy = document.querySelector('.site-footer__copy');
  if (footerCopy) {
    footerCopy.innerHTML = footerCopy.innerHTML.replace(/\d{4}/, new Date().getFullYear());
  }

  /* ── SCROLL REVEAL ────────────────────────────────────── */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.fade-up').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── FAQ ACCORDION ────────────────────────────────────── */
  window.toggleFaq = function (btn) {
    var item    = btn.closest('.faq-item');
    var wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function (el) {
      el.classList.remove('open');
      el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  };

  /* ── FORM VALIDATION HELPERS ──────────────────────────── */
  window.validateField = function (input) {
    var wrap = input.closest('.field');
    if (!wrap) return true;
    var valid = input.checkValidity();
    if (input.type === 'email') {
      valid = valid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    }
    if (valid) {
      wrap.classList.remove('has-err');
      input.classList.remove('err');
    } else {
      wrap.classList.add('has-err');
      input.classList.add('err');
    }
    return valid;
  };

  window.validateForm = function (formEl) {
    var fields   = Array.from(formEl.querySelectorAll('[required]'));
    var allValid = true;
    fields.forEach(function (f) { if (!validateField(f)) allValid = false; });
    if (!allValid) {
      var firstErr = formEl.querySelector('.has-err input, .has-err select, .has-err textarea');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return allValid;
  };

  // Attach inline validation to all forms
  document.querySelectorAll('form').forEach(function (form) {
    form.querySelectorAll('[required]').forEach(function (el) {
      el.addEventListener('blur',  function () { validateField(el); });
      el.addEventListener('input', function () { if (el.classList.contains('err')) validateField(el); });
    });
  });

  /* ── CHAR COUNTER ─────────────────────────────────────── */
  document.querySelectorAll('textarea[maxlength]').forEach(function (ta) {
    var countEl = document.getElementById(ta.getAttribute('data-count'));
    if (!countEl) return;
    ta.addEventListener('input', function () { countEl.textContent = ta.value.length; });
  });

  /* ── FORM SUBMIT ──────────────────────────────────────── */
  window.handleFormSubmit = function (e, opts) {
    e.preventDefault();
    opts = opts || {};

    var form    = e.target;
    var btn     = opts.btn    || form.querySelector('[type=submit]');
    var wrapper = opts.wrap   || form.closest('[data-form-wrap]');
    var success = opts.success || (wrapper && wrapper.querySelector('[data-form-success]'));

    /* Honeypot — abort silently if bot filled the hidden field */
    var honeypot = form.querySelector('[name="botcheck"]');
    if (honeypot && honeypot.value) return;

    if (!validateForm(form)) return;

    var originalLabel = btn.textContent;
    btn.textContent   = 'Sending…';
    btn.disabled      = true;

    /* Build submission payload */
    var payload = new FormData(form);
    payload.set('access_key', WEB3FORMS_KEY);
    payload.set('from_name',  'Crossfire Website');

    /* Dynamic subject line using business name + city if present */
    var bizField  = form.querySelector('[name="business"]');
    var cityField = form.querySelector('[name="city"]');
    var subject   = 'New Crossfire Inquiry';
    if (bizField  && bizField.value.trim())  subject += ' — ' + bizField.value.trim();
    if (cityField && cityField.value.trim()) subject += ' (' + cityField.value.trim() + ')';
    payload.set('subject', subject);

    /* Set reply-to to email if provided, otherwise phone */
    var emailField = form.querySelector('[name="email"]');
    var phoneField = form.querySelector('[name="phone"]');
    if (emailField && emailField.value.trim()) {
      payload.set('replyto', emailField.value.trim());
    } else if (phoneField && phoneField.value.trim()) {
      payload.set('replyto', phoneField.value.trim());
    }

    /* Submit to Web3Forms */
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body:   payload
    })
    .then(function (res) { return res.json(); })
    .then(function (json) {
      if (json.success) {
        /* GA4: form submission event */
        var formName = form.id === 'auditForm'   ? 'Audit Hero Form'
                     : form.id === 'bookForm'    ? 'Audit Book Form'
                     : form.id === 'contactForm' ? 'Contact Form'
                     : form.id || 'Unknown Form';
        gaEvent('form_submit', {
          form_id:   form.id,
          form_name: formName,
          page:      page
        });

        if (success) {
          form.style.display    = 'none';
          success.style.display = 'block';
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          btn.textContent      = '✓ Sent!';
          btn.style.background = '#16a34a';
          form.reset();
          setTimeout(function () {
            btn.textContent      = opts.resetLabel || 'Send';
            btn.style.background = '';
            btn.disabled         = false;
          }, 4000);
        }
      } else {
        _formError(btn, originalLabel);
      }
    })
    .catch(function () {
      _formError(btn, originalLabel);
    });
  };

  function _formError(btn, originalLabel) {
    btn.textContent      = 'Something went wrong — please try again';
    btn.style.background = '#dc2626';
    btn.disabled         = false;
    setTimeout(function () {
      btn.textContent      = originalLabel;
      btn.style.background = '';
    }, 5000);
  }

  /* ── GA4: AUDIT CTA CLICKS ────────────────────────────── */
  document.querySelectorAll('a[href="audit.html"], a[href="#book"]').forEach(function (a) {
    a.addEventListener('click', function () {
      gaEvent('audit_cta_click', {
        button_text: a.textContent.trim().replace(/\s+/g, ' '),
        source_page: page
      });
    });
  });

  /* ── GA4: OUTBOUND & MAILTO LINKS ─────────────────────── */
  document.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if (href.indexOf('mailto:') === 0) {
      a.addEventListener('click', function () {
        gaEvent('outbound_link', { link_type: 'email', url: href });
      });
    } else if (href.indexOf('http') === 0 && href.indexOf(location.hostname) === -1) {
      a.addEventListener('click', function () {
        gaEvent('outbound_link', { link_type: 'external', url: href });
      });
    }
  });

})();
