import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../../img/stocks/slide2.webp'
const Stock = () => {
    return (
        <div class="swiper-slide">
            <Link to="" class="slider-stocks__image _ibg" activeClassName="slider-stocks__image _ibg">
            <picture><img src={img} alt="special vactination" /></picture>
            </Link>
            <div class="slider-stocks__content">
                <Link to="" class="slider-stocks__title" activeClassName="slider-stocks__title">Protected yourself, make vactination</Link>
                <div class="slider-stocks__text">20 jan 2021</div>
            </div>
        </div>
    );
}

export default Stock;