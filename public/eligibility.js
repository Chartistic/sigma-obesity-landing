/* =============================================
   Eligibility Modal + UTM Tracking + DataLayer
   Shared across lp1b, lp2b, lp3b
   ============================================= */
(function() {
  'use strict';

  /* --- UTM capture --- */
  try {
    var params = new URLSearchParams(window.location.search);
    ['utm_source','utm_campaign','utm_medium','utm_content','utm_term'].forEach(function(k) {
      var v = params.get(k);
      if (v) localStorage.setItem(k, v);
    });
  } catch(e) {}

  /* --- DataLayer helper --- */
  function track(event) {
    try { if (window.dataLayer) window.dataLayer.push({ event: event }); } catch(e) {}
  }

  /* --- Modal elements --- */
  var backdrop = document.getElementById('elig-backdrop');
  var form = document.getElementById('elig-form');
  var formView = document.getElementById('elig-form-view');
  var thanksView = document.getElementById('elig-thanks');
  if (!backdrop) return;

  function openModal() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    track('eligibility_open');
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    /* Reset to form view after close animation */
    setTimeout(function() {
      if (formView) formView.style.display = '';
      if (thanksView) thanksView.style.display = 'none';
    }, 300);
  }

  /* Open triggers */
  document.querySelectorAll('[data-open-eligibility]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      track('cta_click_primary');
      openModal();
    });
  });

  /* Close triggers */
  document.querySelectorAll('[data-close-eligibility]').forEach(function(btn) {
    btn.addEventListener('click', closeModal);
  });
  backdrop.addEventListener('click', function(e) {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });

  /* Form submit */
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      track('eligibility_submit');
      if (formView) formView.style.display = 'none';
      if (thanksView) thanksView.style.display = 'block';
    });
  }
})();
