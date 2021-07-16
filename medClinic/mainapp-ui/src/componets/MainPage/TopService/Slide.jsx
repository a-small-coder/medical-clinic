import React from 'react';
import { Link } from 'react-router-dom';
import img from "./../../../img/main-slider/pcr_test.webp"
const Slide = () => {
    return (
        // slider-main__slide 
        <div class="swiper-slide">
            <div class="slider-main__image _ibg">
                <img src={img} alt="vaccination" />
            </div>
            <Link to=""  class="slider-main__content" activeClassName="slider-main__content">
                <div class="slider-main__title">Bohauss</div>
                <div class="slider-main__text">Luxury big sofa 2-seat</div>
                <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
            </Link>
        </div>
    );
}

export default Slide;