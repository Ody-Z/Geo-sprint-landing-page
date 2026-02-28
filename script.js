document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-q');

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close others for clean UX
      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          const openBtn = openItem.querySelector('.faq-q');
          if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !expanded);
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });
});
