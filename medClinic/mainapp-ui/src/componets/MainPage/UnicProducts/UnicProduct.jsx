import React from 'react';
import { NavLink } from 'react-router-dom';
const UnicProduct = () => {
    return (
        <article data-pid="1" class="products__item item-product">
            <div class="item-product__labels">
                <div class="item-product__label item-product__label_new">New</div>
            </div>
            <NavLink to="" class="item-product__image _ibg">
                <img src="img/unic-products/unique_service_nasba_1_.webp" alt="" />
            </NavLink>
            <div class="item-product__body">
                <div class="item-product__content">
                    <h5 class="item-product__title">Syltherine</h5>
                    <div class="item-product__text">Stylish cafe chair</div>
                </div>
            </div>
        </article>
    );
}

export default UnicProduct;