/*Variables*/
const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('.slide_img img');
const lightbox = document.querySelector('#lightbox');
const imagenActiva = document.querySelector('#img-activa');

let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
  document.body.classList.toggle('noscroll2');
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  document.body.classList.remove('noscroll2');
  lightbox.style.display = 'none';
});

window.addEventListener('keyup', function(e){
  if(e.keyCode==27){
    document.body.classList.remove('noscroll2');
    lightbox.style.display = 'none';
  }
});

imagenActiva.addEventListener('click', () => {
  document.body.classList.remove('noscroll2');
  lightbox.style.display = 'none';
});

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen == imagenes.length - 1) {
    indiceImagen = -1;
    //btnAdelanta.style.display = 'none';
   }
   
   imagenActiva.src = imagenes[indiceImagen + 1].src;
   indiceImagen++;
 
};

btnAdelanta.addEventListener('click', adelantaImagen);

window.addEventListener('keyup', function(e){
  if(e.keyCode==39){
    if (indiceImagen == imagenes.length - 1) {
      indiceImagen = -1;
     // btnAdelanta.style.display = 'none';
     }

    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;

  }
});


document.addEventListener('swiped-left', function(e) {
  console.log(e.target); // the element that was swiped
  if (indiceImagen == imagenes.length - 1) {
    indiceImagen = -1;
   // btnAdelanta.style.display = 'none';
   }

  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;

});

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;

};

btnRetrocede.addEventListener('click', retrocederImagen);

window.addEventListener('keyup', function(e){
  if(e.keyCode==37){
    if (indiceImagen === 0) {
      indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;

  }
});

document.addEventListener('swiped-right', function(e) {
  console.log(e.target); // the element that was swiped
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;

});