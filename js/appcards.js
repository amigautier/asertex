//Cards de las galeria
var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.button-next',
	  prevEl: '.button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  //Cuantas cards se muestran a respectivo tamaño de pantalla
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 20,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 20,
	  }
	} 
    });

	//Como se comporta al adelantar imágenes en el contenedor

	var swiper = new Swiper('.swiper-container1', {
		navigation: {
		  nextEl: '.button-next1',
		  prevEl: '.button-prev1'
		},
		slidesPerView: 1,
		spaceBetween: 10,
		// init: false,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	
	  
		breakpoints: {
		  620: {
			slidesPerView: 1,
			spaceBetween: 20,
		  },
		  680: {
			slidesPerView: 2,
			spaceBetween: 20,
		  },
		  920: {
			slidesPerView: 3,
			spaceBetween: 20,
		  },
		  1240: {
			slidesPerView: 4,
			spaceBetween: 20,
		  }
		} 
		});	
