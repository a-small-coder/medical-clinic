import React from 'react';
import { NavLink } from 'react-router-dom';
const Slide = () => {
    return (
        <div class="slider-main__slide">
            <div class="slider-main__image _ibg">
                <img src="img/main-slider/vaccination_m.jpg" alt="vaccination" />
            </div>
            <NavLink to="" data-swiper-parallax-opacity="0" data-swiper-parallax-x="-100%" class="slider-main__content">
                <div class="slider-main__title">Bohauss</div>
                <div class="slider-main__text">Luxury big sofa 2-seat</div>
                <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
            </NavLink>
        </div>
    );
}

export default Slide;