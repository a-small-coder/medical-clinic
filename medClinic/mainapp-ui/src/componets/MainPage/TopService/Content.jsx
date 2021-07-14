import React from 'react';
import { NavLink } from 'react-router-dom';
const Content = () => {
    return (
        <div class="main-slider__content content-main">
            <h1 class="content-main__title">
                High-Quality
                Furniture Just
                For You
            </h1>
            <div class="content-main__text">
                Our furniture is made from selected
                and best quality materials that are suitable for your dream home
            </div>
            <NavLink to="" data-da=".main-slider__body, 991.98" class="content-main__button btn">Shop Now</NavLink>
        </div>
    );
}

export default Content;