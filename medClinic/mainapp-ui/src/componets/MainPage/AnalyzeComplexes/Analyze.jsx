import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../../img/complexes/blood_anl_s.webp';
const Analyze = () => {
    return (
        <div class="swiper-slide">
            <div class="slider-sub-slider-big__image _ibg">
                <picture><img src={img} alt="one_year_reserch_s" /></picture>
            </div>
            <Link to="" data-swiper-parallax-opacity="0" 
            data-swiper-parallax-y="-100%" 
            class="slider-sub-slider-big__content _icon-arrow-link" 
            activeClassName="slider-sub-slider-big__content _icon-arrow-link">
                <div class="slider-sub-slider-big__label label-slider">
                    <div class="label-slider__number">01</div>
                    <div class="label-slider__line"></div>
                    <div class="label-slider__text">Bed Room</div>
                </div>
                <div class="slider-sub-slider-big__title">Inner Peace</div>
            </Link>
        </div>
    );
}

export default Analyze;