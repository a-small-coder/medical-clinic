import React from 'react';
import Item from './Item';
const AboutUs = () => {
    return (
        <section class="page__aboutus aboutus">
            <div class="aboutus__container _container">
                <div class="aboutus__slider slider-aboutus">
                    <div class="slider-aboutus__dotts"></div>
                    <div class="slider-aboutus__body _swiper">
                        <Item/>
                        <Item/>
                        <Item/>

                    </div>
                    <div class="slider-aboutus__arrows slider-arrows">
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down"></button>
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down"></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;