const header = document.querySelector('[data-elevate]');
const revealEls = document.querySelectorAll('.reveal');
const motionSafe = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateHeader() {
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
}, { threshold: 0.16, rootMargin: '0px 0px -56px 0px' });

revealEls.forEach((el) => observer.observe(el));

document.querySelectorAll('.proof-card,.solution-card,.step').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });
});

if (motionSafe) {
  const heroMain = document.querySelector('.hero-photo-main');
  const heroFloat = document.querySelector('.hero-photo-float');

  window.addEventListener('scroll', () => {
    const progress = Math.min(1, window.scrollY / 860);
    if (heroMain) {
      heroMain.style.transform = `rotate(${-2 + progress * 1.5}deg) translate3d(0, ${progress * -28}px, 0)`;
    }
    if (heroFloat) {
      heroFloat.style.transform = `rotate(${3 - progress * 2}deg) translate3d(0, ${progress * 38}px, 0)`;
    }
  }, { passive: true });
}
