import React from 'react';
import Slide from './Slide';
const Slider = () => {
    return (
        <div class="main-slider__slider slider-main">
            <div class="slider-main__controls controls-slider-main">
                <div class="controls-slider-main__dotts"></div>
                <div class="controls-slider-main__arrows slider-arrows">
                    <button type="button" class="slider-arrow slider-arrow_prev _icon-arrow-down"></button>
                    <button type="button" class="slider-arrow slider-arrow_next _icon-arrow-down"></button>
                </div>
            </div>
            <div class="slider-main__body _swiper">
                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>
            </div>
        </div>
    );
}

export default Slider;