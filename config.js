// Single source of truth for site-wide values.
// Change the email here and every page picks it up — the "Contact" links
// in the footers, and the contact line on the privacy page.
(function () {
  var CONTACT_EMAIL = 'damianlabs.app@gmail.com'; // ← the one line to change

  window.KRON = { contactEmail: CONTACT_EMAIL };

  function apply() {
    var links = document.querySelectorAll('[data-kron-email]');
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('href', 'mailto:' + CONTACT_EMAIL);
      if (links[i].hasAttribute('data-kron-email-text')) {
        links[i].textContent = CONTACT_EMAIL;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
