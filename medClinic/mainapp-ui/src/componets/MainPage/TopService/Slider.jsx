import React, { useRef } from 'react';
import Slide from './Slide';
import Swiper from 'react-id-swiper';
const Slider = () => {

    const swiperRef = useRef(null);
    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };

    const params = {
        observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 4,
		preloadImages: false,
		parallax: true,
        // parallaxEl: {
        //     el: '.slider-main__slide',
        //     value: '-23%'
        //   },
		// Dotts
		// pagination: {
		// 	el: '.controls-slider-main__dotts',
        //     type: 'bullets',
		// 	clickable: true,
		// },
		// Arrows
		// navigation: {
		// 	nextEl: '.slider-main.slider-arrow_next',
		// 	prevEl: '.slider-main.slider-arrow_prev',
		// },
        wrapperClass: "swiper-wrapper",
        containerClass: "slider-main__body _swiper",
      }

    // const [parallaxSwiper, setParallaxSwiper] = useState(null);
    // const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    // const parallaxOpacity =0;
    return (
        <div class="main-slider__slider slider-main">
            <div class="slider-main__controls controls-slider-main">
                <div class="controls-slider-main__dotts"></div>
                <div class="controls-slider-main__arrows slider-arrows">
                    <button onClick={goPrev} type="button" class="slider-arrow slider-arrow_prev _icon-arrow-down"></button>
                    <button onClick={goNext} type="button" class="slider-arrow slider-arrow_next _icon-arrow-down"></button>
                </div>
            </div>
            <Swiper {...params} ref={swiperRef}>
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
            </Swiper>
        </div>
        
    );
}

export default Slider;