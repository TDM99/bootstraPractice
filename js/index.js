function Scroll(clase, duraction, origin, distance, delay){
  window.sr = ScrollReveal();
  sr.reveal(clase, {
    duration: duraction,
    origin: origin,
    distance: distance,
    delay: delay
  });
}

Scroll('.navbar', 2000, 'bottom', 0, 0);
Scroll('.header-content-left', 2000, 'top', '300px', 0);
Scroll('.header-content-right', 2000, 'right', '300px', 0);
Scroll('.header-bottom', 2000, 'bottom', 0, 1500);
Scroll('.bloque', 2000, 'bottom', '300px', 0);
Scroll('.info-left', 2000, 'left', '300px', 0);
Scroll('.info-rigth', 2000, 'right', '300px', 0);
Scroll('.info-bottom', 2000, 'bottom', 0, 1500);
Scroll('.card', 2000, 'left', '300px', 0);


//jquerry
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});