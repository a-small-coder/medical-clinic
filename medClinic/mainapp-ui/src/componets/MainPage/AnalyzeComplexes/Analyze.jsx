import React from 'react';
import { NavLink } from 'react-router-dom';
const Analyze = () => {
    return (
        <div class="slider-sub-slider-big__slide">
            <div class="slider-sub-slider-big__image _ibg">
                <img src="img/complexes/one_year_reserch_s.jpg" alt="one_year_reserch_s" />
            </div>
            <NavLink to="" data-swiper-parallax-opacity="0" data-swiper-parallax-y="-100%" class="slider-sub-slider-big__content _icon-arrow-link">
                <div class="slider-sub-slider-big__label label-slider">
                    <div class="label-slider__number">01</div>
                    <div class="label-slider__line"></div>
                    <div class="label-slider__text">Bed Room</div>
                </div>
                <div class="slider-sub-slider-big__title">Inner Peace</div>
            </NavLink>
        </div>
    );
}

export default Analyze;