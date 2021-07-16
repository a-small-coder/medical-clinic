import React, {useRef} from 'react';
import Swiper from 'react-id-swiper';
import Stock from './Stock';

const Stocks = () => {

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
		slidesPerView: 3,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		pagination: {
			el: '.slider-stocks__dotts',
            type: 'bullets',
			clickable: true,
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
		},
        wrapperClass: "swiper-wrapper",
        containerClass: "slider-stocks__body _swiper"
      }

    return (
        <section class="page__stocks stocks">
            <div class="stocks__container _container">
                <h2 class="stocks__title _title">Our Stocks</h2>
                <div class="stocks__slider slider-stocks">
                    <Swiper {...params} ref={swiperRef}>
                        <Stock />
                        <Stock />
                        <Stock />
                    </Swiper>
                    <div class="slider-stocks__dotts"></div>
                    <div class="slider-stocks__arrows slider-arrows">
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down" onClick={goPrev}></button>
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down" onClick={goNext}></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stocks;