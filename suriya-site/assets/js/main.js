// App JS for Suriya site
(function () {
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const success = document.getElementById('formSuccess');
      if (success) {
        success.classList.remove('d-none');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }
})();
