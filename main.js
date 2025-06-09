document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mode-toggle');
  const navLinks = document.querySelectorAll('.nav-container a');
  const sections = document.querySelectorAll('section');
  const themeIcon = document.getElementById('theme-icon');
  
  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  
    // Change emoji instantly without slowing anything down
    const isDark = document.body.classList.contains('dark-mode');
    themeIcon.textContent = isDark ? '☀️' : '🌑';
  });
  

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
