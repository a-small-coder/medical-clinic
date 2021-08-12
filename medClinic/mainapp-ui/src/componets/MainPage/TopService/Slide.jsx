import React from 'react';
import { Link } from 'react-router-dom';
const Slide = (props) => {
    return (
        <div className="swiper-slide">
            <div className="slider-main__image _ibg">
                <img src={props.img} alt="vaccination" />
            </div>
            <Link to={props.link}  className="slider-main__content">
                <div className="slider-main__title">{props.title}</div>
                <div className="slider-main__text">{props.text}</div>
                <div className="slider-main__price _icon-arrow-link">{props.price}</div>
            </Link>
        </div>
    );
}

export default Slide;