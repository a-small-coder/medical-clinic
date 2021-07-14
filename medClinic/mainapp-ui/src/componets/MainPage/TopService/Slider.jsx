import React from 'react';
import Slide from './Slide';
import Swiper from 'react-id-swiper';
const Slider = () => {
    const params = {
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
		},
        wrapperClass: "slider-main__body _swiper",
        containerClass: "main-slider__slider slider-main",
        slideClass: "slider-main__slide"
      }

    return (
        // <div class="main-slider__slider slider-main">
        //     <div class="slider-main__controls controls-slider-main">
        //         <div class="controls-slider-main__dotts"></div>
        //         <div class="controls-slider-main__arrows slider-arrows">
        //             <button type="button" class="slider-arrow slider-arrow_prev _icon-arrow-down"></button>
        //             <button type="button" class="slider-arrow slider-arrow_next _icon-arrow-down"></button>
        //         </div>
        //     </div>
            
        // </div>
        <Swiper {...params} >
            <Slide/>
            <Slide/>
            <Slide/>
            <Slide/>
        </Swiper>
    );
}

export default Slider;