import React from 'react';
import img from '../../../img/achivments-small/01.svg'
const Achivment = (props) => {
    return (
        <div class="advantages__item">
            <div class="advantages__icon">
                <picture> <img src={props.img} alt="High Quality" /></picture>
            </div>
            <h4 class="advantages__title">{props.title}</h4>
            <div class="advantages__text">{props.text}</div>
        </div>
    );
}

export default Achivment;