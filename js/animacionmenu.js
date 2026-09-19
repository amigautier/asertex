// Manejo del clic en el menú (animación + bloqueo de scroll + fondo header)
document.addEventListener('click', (evento) => {
  // Verifica si el clic fue en #contenedormenu o en un hijo dentro de él
  const botonMenu = evento.target.closest('#contenedormenu');
  
  if (botonMenu) {
    // 1. Animación propia del botón (lo que hacía tu antigua myFunction)
    botonMenu.classList.toggle('change-contenedormenu');
    botonMenu.classList.toggle('change');

    // 2. Bloqueo de scroll en body y html
    document.body.classList.toggle('noscroll');
    document.documentElement.classList.toggle('noscroll');
    
    // 3. Fondo negro para el header
    const headerblack = document.getElementById('header1');
    if (headerblack) {
      headerblack.classList.toggle('header1black');
    }
  }
});

// Quitar flecha al scrollear y degradado
window.addEventListener('scroll', function () {
  var lineaheader = document.querySelector('.header1');
  if (lineaheader) {
    lineaheader.classList.toggle('header1linea', window.scrollY > 5);
  }
});