document.addEventListener('DOMContentLoaded', () => {
  initSiteComponents();
});

function initSiteComponents() {
  setupScrollBehavior();
  setupDropdowns();
}

function setupScrollBehavior() {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown-toggle');
  
  if (window.innerWidth > 992) {
    dropdowns.forEach(dropdown => {
      const parent = dropdown.parentElement;
      const menu = parent.querySelector('.dropdown-menu');
      
      parent.addEventListener('mouseenter', () => {
        menu.classList.add('show');
      });
      
      parent.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
      });
    });
  }
}
