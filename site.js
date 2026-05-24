const header = document.querySelector('[data-elevate]');
const revealEls = document.querySelectorAll('.reveal');

function updateHeader(){
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el) => observer.observe(el));

document.querySelectorAll('.service-card,.value-card,.sector-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const hero = document.querySelector('.hero');
  const heroPhoto = document.querySelector('.hero-photo');
  const heroPhotoAlt = document.querySelector('.hero-photo-alt');

  window.addEventListener('scroll', () => {
    if (!hero || !heroPhoto) return;
    const progress = Math.max(0, Math.min(1, window.scrollY / (hero.offsetHeight || 1)));
    heroPhoto.style.transform = `scale(${1.05 + progress * 0.05}) translate3d(0, ${progress * -18}px, 0)`;
    if (heroPhotoAlt) {
      heroPhotoAlt.style.transform = `scale(${1.08 + progress * 0.04}) translate3d(0, ${progress * -10}px, 0)`;
    }
  }, { passive: true });
}
