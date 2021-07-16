import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';

const ProductForMobile = () => {


    return (
        <nav class="menu-product__body">
            <ul data-spollers="992, max" class="menu-product__list">
                <li class="menu-product__item">
                    <Link to="#" class="menu-product__link menu-product__link _selected">Интерпритация результатов</Link>
                    <button data-spoller type="button" class="menu-product__arrow _icon-arrow-down"></button>
                    <div class="menu-product__wrapper">
                        <Description/>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default ProductForMobile;