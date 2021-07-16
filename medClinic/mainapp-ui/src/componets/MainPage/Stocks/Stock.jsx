import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './../../../img/stocks/slide2.webp'
const Stock = () => {
    return (
        <div class="swiper-slide">
            <NavLink to="" class="slider-stocks__image _ibg">
            <picture><img src={img} alt="special vactination" /></picture>
            </NavLink>
            <div class="slider-stocks__content">
                <NavLink to="" class="slider-stocks__title">Protected yourself, make vactination</NavLink>
                <div class="slider-stocks__text">20 jan 2021</div>
            </div>
        </div>
    );
}

export default Stock;