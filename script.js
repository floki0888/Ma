// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const form = document.querySelector('#contact-form');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Simple contact form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  }
});