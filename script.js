const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      else {
      entry.target.classList.remove('visible'); // ensures reverse scroll works
    }
    });
  }, {
    threshold: 0.20 // Trigger when 15% of section is visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });