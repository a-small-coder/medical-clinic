import React from 'react';
const Paggination = () => {
    return (
        <div class="analyze-section__paggination paggination">
            <div class="paggination__items">
                <button class="paggination__arrow slider-arrow slider-arrow_white slider-arrow_prev _anactive _icon-arrow-down"></button>
                <span class="paggination__page-number _active">1</span>
                <span class="paggination__page-number">2</span>
                <button class="paggination__arrow slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down"></button>
            </div>
        </div>
    );
}

export default Paggination;