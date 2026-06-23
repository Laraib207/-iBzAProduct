const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('#contactForm');
const formNote = document.querySelector('#formNote');

document.querySelector('#year').textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name')?.toString().trim() || 'there';

  formNote.textContent = `Thanks, ${name}! Your request has been captured in this demo form.`;
  contactForm.reset();
});

window.addEventListener('scroll', () => {
  document.querySelector('.site-header')?.classList.toggle(
    'scrolled',
    window.scrollY > 12
  );
}, { passive: true });