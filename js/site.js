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

  /* ── SITEWIDE STYLES (WhatsApp + nav call) ───────────── */
  var sitewideStyle = document.createElement('style');
  sitewideStyle.textContent = [
    '.nav__call{display:inline-flex;align-items:center;gap:6px;font-size:.76rem;font-weight:600;color:var(--ink);text-decoration:none;padding:5px 11px;border-radius:100px;border:1px solid var(--border);transition:border-color .15s,color .15s;white-space:nowrap}',
    '.nav__call:hover{border-color:var(--accent);color:var(--accent)}',
    '.nav__call svg{flex-shrink:0}',
    '.nav__call-text{display:none}',
    '@media(min-width:860px){.nav__call-text{display:inline}}',
    '.wa-btn{position:fixed;bottom:24px;right:24px;z-index:9000;width:54px;height:54px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(37,211,102,.42);transition:transform .18s,box-shadow .18s;text-decoration:none}',
    '.wa-btn:hover{transform:scale(1.1);box-shadow:0 6px 24px rgba(37,211,102,.55)}',
    '@media(max-width:600px){.wa-btn{bottom:16px;right:16px;width:50px;height:50px}}'
  ].join('');
  document.head.appendChild(sitewideStyle);

  /* ── NAV: click-to-call phone ─────────────────────────── */
  var navRight = document.querySelector('.nav__right');
  if (navRight) {
    var callLink = document.createElement('a');
    callLink.href = 'tel:+919315515312';
    callLink.className = 'nav__call';
    callLink.setAttribute('aria-label', 'Call +91 93155 15312');
    callLink.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.61 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="nav__call-text">+91 93155 15312</span>';
    navRight.insertBefore(callLink, navRight.firstChild);
    callLink.addEventListener('click', function () {
      gaEvent('phone_click', { source: 'nav', page: page });
    });
  }

  /* ── WHATSAPP FLOATING BUTTON ─────────────────────────── */
  var waBtn = document.createElement('a');
  waBtn.href = 'https://wa.me/919315515312?text=Hi%20Sumedha%2C%20I%27d%20like%20to%20know%20more%20about%20your%20Local%20SEO%20services';
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.className = 'wa-btn';
  waBtn.setAttribute('aria-label', 'Chat with Sumedha on WhatsApp');
  waBtn.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.118 1.529 5.85L0 24l6.335-1.505A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.902 0-3.68-.516-5.2-1.416l-.373-.219-3.763.894.951-3.669-.242-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>';
  document.body.appendChild(waBtn);
  waBtn.addEventListener('click', function () {
    gaEvent('whatsapp_click', { source: 'floating_button', page: page });
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
