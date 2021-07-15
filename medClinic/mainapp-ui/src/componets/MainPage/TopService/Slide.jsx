import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "./../../../img/main-slider/pcr_test.webp"
const Slide = () => {
    return (
        // slider-main__slide 
        <div class="slider-main__slide">
            <div class="slider-main__image _ibg">
                <img src={img} alt="vaccination" />
            </div>
            <NavLink to=""  class="slider-main__content">
                <div class="slider-main__title">Bohauss</div>
                <div class="slider-main__text">Luxury big sofa 2-seat</div>
                <div class="slider-main__price _icon-arrow-link">Rp 17.000.000</div>
            </NavLink>
        </div>
    );
}

export default Slide;