// Animar secciones al hacer scroll (igual que antes)
const sections = document.querySelectorAll('section');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

// Botón volver arriba (igual que antes)
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  revealOnScroll();
  if(window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Scroll suave para las tarjetas que llevan al formulario
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const targetSelector = card.getAttribute('data-scroll');
    const target = document.querySelector(targetSelector);
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // También puedes enfocar el primer input para mejor UX
      const input = target.querySelector('input, textarea');
      if(input) input.focus();
    }
  });
});

// Formulario (igual que antes)
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Simulamos envío
  form.reset();
  successMsg.classList.remove('hidden');

  setTimeout(() => {
    successMsg.classList.add('hidden');
  }, 5000);
});
