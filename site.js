const header = document.querySelector('[data-elevate]');
const progressBar = document.querySelector('.scroll-progress i');
const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
const syncProgress = () => {
  if (!progressBar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.setProperty('--scroll-progress', `${Math.min(100, Math.max(0, ratio))}%`);
};

syncHeader();
syncProgress();
window.addEventListener('scroll', syncHeader, { passive: true });
window.addEventListener('scroll', syncProgress, { passive: true });

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
  const floatingEls = [...document.querySelectorAll('[data-float]')];

  window.addEventListener('scroll', () => {
    floatingEls.forEach((el) => {
      const speed = Number(el.dataset.floatSpeed || 1);
      const offset = Math.min(window.scrollY * 0.028 * speed, 24 * speed);
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }, { passive: true });

  const slideshow = document.querySelector('[data-slideshow]');

  if (slideshow) {
    const slides = [...slideshow.querySelectorAll('.hero-slide')];
    const dots = [...slideshow.querySelectorAll('.hero-slide-dots i')];
    const labelEl = slideshow.querySelector('[data-slide-label]');
    const titleEl = slideshow.querySelector('[data-slide-title]');
    const slideMeta = [
      ['Barco Solutions', 'Construction and project delivery'],
      ['Barco Solutions', 'Property maintenance and finishing'],
      ['Barco Assist', 'Maintenance support'],
      ['Barco Hygiene', 'Cleaning and hygiene']
    ];

    let activeIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === index);
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === index);
      });

      if (labelEl && titleEl && slideMeta[index]) {
        labelEl.textContent = slideMeta[index][0];
        titleEl.textContent = slideMeta[index][1];
      }
    };

    window.setInterval(() => {
      activeIndex = (activeIndex + 1) % slides.length;
      showSlide(activeIndex);
    }, 3200);
  }
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
