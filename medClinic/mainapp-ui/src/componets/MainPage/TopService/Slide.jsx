import React from 'react';
import { Link } from 'react-router-dom';
import img from "./../../../img/main-slider/pcr_test.webp"
const Slide = (props) => {
    return (
        <div class="swiper-slide">
            <div class="slider-main__image _ibg">
                <img src={props.img} alt="vaccination" />
            </div>
            <Link to={props.link}  class="slider-main__content">
                <div class="slider-main__title">{props.title}</div>
                <div class="slider-main__text">{props.text}</div>
                <div class="slider-main__price _icon-arrow-link">{props.price}</div>
            </Link>
        </div>
    );
}

export default Slide;