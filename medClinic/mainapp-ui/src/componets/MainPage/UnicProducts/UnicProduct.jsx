import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../img/unic-products/unique_service_corona.webp'
const UnicProduct = () => {
    return (
        <article data-pid="1" class="products__item item-product">
            <div class="item-product__labels">
                <div class="item-product__label item-product__label_new">New</div>
            </div>
            <Link to="" class="item-product__image _ibg" activeClassName="item-product__image _ibg">
                <picture><img src={img} alt="" /></picture>
            </Link>
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