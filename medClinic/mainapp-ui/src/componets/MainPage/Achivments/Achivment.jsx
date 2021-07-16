import React from 'react';
import img from '../../../img/achivments-small/01.svg'
const Achivment = () => {
    return (
        <div class="advantages__item">
            <div class="advantages__icon">
                <picture> <img src={img} alt="High Quality" /></picture>
            </div>
            <h4 class="advantages__title">High Quality</h4>
            <div class="advantages__text">crafted from top materials</div>
        </div>
    );
}

export default Achivment;