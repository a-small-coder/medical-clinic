import React, { useEffect } from 'react';
import Item from './Item';
import Swiper from 'react-id-swiper';
const AboutUs = () => {

    const swiperRef = React.useRef(null);
    const prefBtn = React.useRef(null);
    const nextBtn = React.useRef(null);

    const [activeSlideIndex, setActiveslideIndex] = React.useState(0);
    const goNext = () => {

        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            setActiveslideIndex(swiperRef.current.swiper.realIndex);
        }
    };
    const goPrev = () => {

        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
            setActiveslideIndex(swiperRef.current.swiper.realIndex);
        }
    };


    useEffect(() => {
        if (prefBtn.current != null) {
            console.log(activeSlideIndex);
            console.log(swiperRef.current.swiper);
            prefBtn.current.style.visibility = 'visible';
            nextBtn.current.style.visibility = 'visible';
            if (activeSlideIndex === 0) {
                prefBtn.current.style.visibility = 'hidden';
            }
            if (swiperRef.current.swiper.isEnd) {
                nextBtn.current.style.visibility = 'hidden';
            }
        }


    }, [activeSlideIndex]);


    const params = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        watchOverflow: true,
        spaceBetween: 20,
        speed: 800,
        loop: false,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.slider-aboutus__dotts',
            clickable: true,
        },
        wrapperClass: "swiper-wrapper",
        containerClass: "slider-aboutus__body _swiper"
    }

    return (
        <section class="page__aboutus aboutus">
            <div class="aboutus__container _container">
                <div class="aboutus__slider slider-aboutus">
                    <div class="slider-aboutus__dotts"></div>
                    <Swiper {...params} ref={swiperRef}>
                        <Item />
                        <Item />
                        <Item />
                    </Swiper>
                    <div class="slider-aboutus__arrows slider-arrows">
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down" onClick={goPrev} ref={prefBtn}></button>
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down" onClick={goNext} ref={nextBtn}></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;