   
   //Ver qué navegador se está utilizando

   function Navegador()
    {
     var Agente = navigator.userAgent
     var navegadores = [ "Firefox", "Edg", "OPR", "MSIE", "Trident", "Chrome"];

     for (var i in navegadores) {
           if (Agente.indexOf(navegadores[i]) != -1)
        {
            return navegadores[i]
           }
        }
    }

    //Hacer zoom al backgroung fijo al scrollear
    const nav = Navegador();

    

    window.addEventListener("scroll", function(){

        if(screen.height < 1131){
            if(nav === "OPR"){
            
                var imagen_backfijo = document.querySelector(".imagen_backfijo");
                imagen_backfijo.classList.toggle("backfijozoom",window.scrollY>1700);
            }else if(nav === "Chrome"){
                var imagen_backfijo = document.querySelector(".imagen_backfijo");
                imagen_backfijo.classList.toggle("backfijozoom",window.scrollY>1700);
            }
        }
        
    });  
    

    //Quitar flecha al  scrollear y degradado
    window.addEventListener("scroll", function(){
        var flecha = document.querySelector(".indicador_bottom_arrow");
        
        flecha.classList.toggle("arrowscroll",window.scrollY>30);
        

        if(screen.height < 1131){
            var degradadofijo = document.querySelector(".degradado_backfijo");
            degradadofijo.classList.toggle("degradadofijo",window.scrollY>1700);
        }

      });

//Constantes
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider_section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnprev = document.querySelector('#slider_btn_prev');
const btnnext = document.querySelector('#slider_btn_next');

const dots1 = document.querySelector('input[id="dots1"]');
const dots2 = document.querySelector('input[id="dots2"]');
const dots3 = document.querySelector('input[id="dots3"]');

let contador = 0


slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Inserta la ultima foto de primeras

function Next(){
    let sliderSectionFirst = document.querySelectorAll('.slider_section')[0]; //Va tomar la primera foto
    slider.style.marginLeft = "-200%"; // da un margin de -200
    slider.style.transition = "all 1s"; //medio segundo es igual a 500 y un segundo 1000
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst); //Vuelve a poner la imagen de ultimas
        slider.style.marginLeft = "-100%"; //Regresa el valor a -100
    }, 1000); //medio segundo es igual a 500 y un segundo 1000
    
}

btnnext.addEventListener('click', function(){
    contador = 1;
    Next();
});

function Prev(){
    let sliderSection = document.querySelectorAll('.slider_section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0'; // da un margin de 0
    slider.style.transition = 'all 1s'; //medio segundo es igual a 500 y un segundo 1000
    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Vuelve a poner la imagen de primera
        slider.style.marginLeft = '-100%'; //Regresa el valor a -100
    }, 1000); //medio segundo es igual a 500 y un segundo 1000
}

btnprev.addEventListener('click', function(){
    contador = 1;
    Prev();
});


setInterval(function(){ //Para que se inicie
   if(contador == '0'){
    Next();
   }
}, 4000); //1000 es un segundo

