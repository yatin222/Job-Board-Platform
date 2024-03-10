document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section-heading');
  
    sections.forEach(function(section) {
      section.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('hidden');
      });
    });
  });
  