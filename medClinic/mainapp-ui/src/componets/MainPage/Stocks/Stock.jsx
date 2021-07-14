import React from 'react';
import { NavLink } from 'react-router-dom';
const Stock = () => {
    return (
        <div class="slider-stocks__slide">
            <NavLink to="" class="slider-stocks__image _ibg">
                <img src="img/stocks/special_vac.png" alt="special vactination" />
            </NavLink>
            <div class="slider-stocks__content">
                <NavLink to="" class="slider-stocks__title">Protected yourself, make vactination</NavLink>
                <div class="slider-stocks__text">20 jan 2021</div>
            </div>
        </div>
    );
}

export default Stock;