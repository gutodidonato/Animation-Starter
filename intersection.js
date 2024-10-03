document.addEventListener('DOMContentLoaded', () => {
    const observed = document.querySelectorAll('.obv');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); 
        }
      });
    }, { threshold: 0.2 }); 
  
    observed.forEach(element => {
      observer.observe(element);
    });
  });