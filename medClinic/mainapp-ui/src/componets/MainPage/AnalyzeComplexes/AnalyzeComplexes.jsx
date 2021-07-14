import React from 'react';
import { NavLink } from 'react-router-dom';
import Analyze from './Analyze';
const AnalyzeComplexes = () => {
    return (
        <section class="page__sub-slider-big sub-slider-big">
            <div class="sub-slider-big__container _container">
                <div class="sub-slider-big__body">
                    <h2 class="sub-slider-big__title _title">50+ Beautiful rooms inspiration</h2>
                    <div class="sub-slider-big__text">
                        Our designer already made a lot of beautiful
                        prototipe of rooms that inspire you
                    </div>
                    <NavLink to="" class="sub-slider-big__button btn">Explore More</NavLink>
                </div>
                <div class="sub-slider-big__slider slider-sub-slider-big">
                    <div class="slider-sub-slider-big__body _swiper">
                        <Analyze/>
                        <Analyze/>
                        <Analyze/>

                    </div>
                    <div class="slider-sub-slider-big__arrows slider-arrows">
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down"></button>
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down"></button>
                    </div>
                    <div class="slider-sub-slider-big__dotts"></div>
                </div>
            </div>
        </section>
    );
}

export default AnalyzeComplexes;