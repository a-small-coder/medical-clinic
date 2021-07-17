import React from 'react';
import { Link } from 'react-router-dom';
const Item = (props) => {
    return (
        <div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-100%" class="swiper-slide">
            <h5 class="slider-aboutus__title">{props.title}</h5>
            <div class="slider-aboutus__text">
                {props.text}
            </div>
            <Link to={props.link} class="slider-aboutus__button btn btn_white">Узнать Больше</Link>
        </div>
    );
}

export default Item;