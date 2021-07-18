import React from 'react';
const Paggination = () => {
    return (
        <div className="analyze-section__paggination paggination">
            <div className="paggination__items">
                <button className="paggination__arrow slider-arrow slider-arrow_white slider-arrow_prev _anactive _icon-arrow-down"></button>
                <span className="paggination__page-number _active">1</span>
                <span className="paggination__page-number">2</span>
                <button className="paggination__arrow slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down"></button>
            </div>
        </div>
    );
}

export default Paggination;