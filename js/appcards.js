function initializeGalleryLogic() {
	const configBase = {
		slidesPerView: 1,
		spaceBetween: 10,
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
	};

	function crearSwiperSiExiste(selectorContenedor, selectorNext, selectorPrev) {
		const el = document.querySelector(selectorContenedor);
		if (!el || el.dataset.swiperInit === 'true') return;

		el.dataset.swiperInit = 'true';
		new Swiper(selectorContenedor, {
			navigation: {
				nextEl: selectorNext,
				prevEl: selectorPrev
			},
			slidesPerView: configBase.slidesPerView,
			spaceBetween: configBase.spaceBetween,
			pagination: configBase.pagination,
			breakpoints: configBase.breakpoints
		});
	}

	// 1. Principal: Extintores
	crearSwiperSiExiste('.swiper-container1', '.button-next1', '.button-prev1');

	// 2. Seguridad y Emergencias
	crearSwiperSiExiste('.swiper-seguridad', '.button-next-seguridad', '.button-prev-seguridad');

	// 3. Colección de prendas
	crearSwiperSiExiste('.swiper-prendas', '.button-next-prendas', '.button-prev-prendas');

	// 4. Cuarta galería
	crearSwiperSiExiste('.swiper-galeria4', '.button-next-galeria4', '.button-prev-galeria4');
}