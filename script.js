document.addEventListener('DOMContentLoaded', () => {
  /* FAQ accordion */
  const faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

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

  /* Hero feature card active state on click */
  const featureCards = document.querySelectorAll('.hero-feature-card');
  featureCards.forEach((card) => {
    card.addEventListener('click', () => {
      featureCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
});
