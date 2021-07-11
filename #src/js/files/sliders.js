//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-main__body')) {
	new Swiper('.slider-main__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.controls-slider-main__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-main .slider-arrow_next',
			prevEl: '.slider-main .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-sub-slider-big__body')) {
	new Swiper('.slider-sub-slider-big__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.slider-sub-slider-big__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-sub-slider-big .slider-arrow_next',
			prevEl: '.slider-sub-slider-big .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-stocks__body')) {
	new Swiper('.slider-stocks__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.slider-stocks__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-stocks .slider-arrow_next',
			prevEl: '.slider-stocks .slider-arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32,
			}
		}
	});
}
if (document.querySelector('.slider-aboutus__body')) {
	new Swiper('.slider-aboutus__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 20,
		speed: 800,
		loop: false,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.slider-aboutus__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-aboutus .slider-arrow_next',
			prevEl: '.slider-aboutus .slider-arrow_prev',
		},
		on: {
			init: function() {
				checkArrow(this);
			},
			slideChangeTransitionStart: function() {
				checkArrow(this);
			}
		  }
	});
}

function checkArrow(aboutusSwiper) {
	var swiperPrev = document.querySelector('.slider-aboutus .slider-arrow_prev');
	var swiperNext = document.querySelector('.slider-aboutus .slider-arrow_next');

	swiperPrev.style.visibility = 'visible';
	swiperNext.style.visibility = 'visible';
	if (aboutusSwiper.isBeginning) {
		swiperPrev.style.visibility = 'hidden';
	}
	if (aboutusSwiper.isEnd){
		swiperNext.style.visibility = 'hidden';
	}
}