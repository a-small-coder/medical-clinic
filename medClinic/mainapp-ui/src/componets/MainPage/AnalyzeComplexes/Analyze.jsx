import React from 'react';
import { Link } from 'react-router-dom';
const Analyze = (props) => {
    return (
        <div className="swiper-slide">
            <div className="slider-sub-slider-big__image _ibg">
                <picture><img src={props.img} alt="one_year_reserch_s" /></picture>
            </div>
            <Link to={props.link} data-swiper-parallax-opacity="0" 
            data-swiper-parallax-y="-100%" 
            className="slider-sub-slider-big__content _icon-arrow-link">
                <div className="slider-sub-slider-big__label label-slider">
                    <div className="label-slider__number">{props.number}</div>
                    <div className="label-slider__line"></div>
                    <div className="label-slider__text">{props.text}</div>
                </div>
                <div className="slider-sub-slider-big__title">{props.title}</div>
            </Link>
        </div>
    );
}

export default Analyze;