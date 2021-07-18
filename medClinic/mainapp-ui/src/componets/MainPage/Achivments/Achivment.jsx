import React from 'react';
import img from '../../../img/achivments-small/01.svg'
const Achivment = (props) => {
    return (
        <div className="advantages__item">
            <div className="advantages__icon">
                <picture> <img src={props.img} alt="High Quality" /></picture>
            </div>
            <h4 className="advantages__title">{props.title}</h4>
            <div className="advantages__text">{props.text}</div>
        </div>
    );
}

export default Achivment;