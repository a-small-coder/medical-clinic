import React from 'react';
import { Link } from 'react-router-dom';
const Content = (props) => {
    return (
        <div class="main-slider__content content-main">
            <h1 class="content-main__title">
                {props.content.title}
            </h1>
            <div class="content-main__text">
                {props.content.text}
            </div>
            <Link to={props.content.link} data-da=".main-slider__body, 991.98" class="content-main__button btn">Shop Now</Link>
        </div>
    );
}

export default Content;