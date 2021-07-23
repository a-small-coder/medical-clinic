import React, { useRef } from 'react';
import Slide from './Slide';
import Swiper from 'react-id-swiper';

const Slider = (props) => {

    const swiperRef = useRef(null);

    let slidesElements = props.slides.map(s => <Slide key={s.id} title={s.title_min} text={s.description} price={s.price} img={s.big_image} link={s.slug}/>)

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
        <div className="main-slider__slider slider-main">
            <div className="slider-main__controls controls-slider-main">
                <div className="controls-slider-main__dotts"></div>
                <div className="controls-slider-main__arrows slider-arrows">
                    <button onClick={goPrev} type="button" className="slider-arrow slider-arrow_prev _icon-arrow-down"></button>
                    <button onClick={goNext} type="button" className="slider-arrow slider-arrow_next _icon-arrow-down"></button>
                </div>
            </div>
            <Swiper {...params} ref={swiperRef}>
              {slidesElements}
            </Swiper>
        </div>
        
    );
}

export default Slider;