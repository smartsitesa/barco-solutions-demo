const header = document.querySelector('[data-elevate]');
const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

const revealEls = document.querySelectorAll('[data-reveal]');

if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => revealObserver.observe(el));
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const heroMedia = document.querySelector('.hero-visual .media-frame img');

  window.addEventListener('scroll', () => {
    if (!heroMedia) return;
    const offset = Math.min(window.scrollY * 0.06, 26);
    heroMedia.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
  }, { passive: true });
}

const contactForm = document.querySelector('[data-contact-form]');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const body = [
      `Name: ${name || 'Not supplied'}`,
      `Company: ${company || 'Not supplied'}`,
      `Phone: ${phone || 'Not supplied'}`,
      `Email: ${email || 'Not supplied'}`,
      '',
      message || 'No project details supplied.'
    ].join('\n');

    window.location.href = `mailto:info@barcosolutions.co.za?subject=${encodeURIComponent('Barco Solutions enquiry')}&body=${encodeURIComponent(body)}`;
  });
}
