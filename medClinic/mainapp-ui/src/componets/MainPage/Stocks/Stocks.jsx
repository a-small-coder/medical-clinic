import React from 'react';
import Stock from './Stock';
const Stocks = () => {
    return (
        <section class="page__stocks stocks">
            <div class="stocks__container _container">
                <h2 class="stocks__title _title">Our Stocks</h2>
                <div class="stocks__slider slider-stocks">
                    <div class="slider-stocks__body _swiper">
                        <Stock/>
                        <Stock/>
                        <Stock/>
                    </div>
                    <div class="slider-stocks__dotts"></div>
                    <div class="slider-stocks__arrows slider-arrows">
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down"></button>
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down"></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stocks;