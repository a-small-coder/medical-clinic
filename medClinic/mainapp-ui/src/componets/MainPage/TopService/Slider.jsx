import React, { useRef } from 'react';
import Slide from './Slide';
import Swiper from 'react-id-swiper';

const Slider = (props) => {

    const swiperRef = useRef(null);

    let slidesElements = props.slides.map(s => <Slide key={s.id} title={s.title} text={s.text} price={s.price} img={s.img} link={s.link}/>)

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
        wrapperClass: "swiper-wrapper",
        containerClass: "slider-main__body _swiper"
      }
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
              {slidesElements}
            </Swiper>
        </div>
        
    );
}

export default Slider;