import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../../img/stocks/slide2.webp'
const Stock = (props) => {
    return (
        <div className="swiper-slide">
            <Link to={props.link} className="slider-stocks__image _ibg">
            <picture><img src={props.img} alt="special vactination" /></picture>
            </Link>
            <div className="slider-stocks__content">
                <Link to={props.link} className="slider-stocks__title">{props.slogan}</Link>
                <div className="slider-stocks__text">{props.text}</div>
            </div>
        </div>
    );
}

export default Stock;