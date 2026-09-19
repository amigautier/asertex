//Crea toggle para animación de botón menu
let menu = document.getElementById("contenedormenu");

function myFunction(x) {
  menu.classList.toggle("change-contenedormenu");
  x.classList.toggle("change");
}

//Crea toggle para dar animación al header al abrir menu
let noscroll = document.getElementById('contenedormenu');
const headerblack = document.getElementById('header1');
noscroll.addEventListener('click', ()=>{

   document.body.classList.toggle('noscroll'); 
   headerblack.classList.toggle('header1black');
    
});

    //Quitar flecha al  scrollear y degradado
    window.addEventListener("scroll", function(){
      var lineaheader = document.querySelector(".header1");
      lineaheader.classList.toggle("header1linea",window.scrollY>5);

    });