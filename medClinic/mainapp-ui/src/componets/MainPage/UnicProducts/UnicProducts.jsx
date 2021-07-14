import React from 'react';
import { NavLink } from 'react-router-dom';
import UnicProduct from './UnicProduct';
const UnicProducts = () => {
    return (
        <section class="page__products products">
            <div class="products__container _container">
                <h2 class="products__title _title">Our Products</h2>
                <div class="products__items">
                    <UnicProduct />
                    <UnicProduct />
                    <UnicProduct />
                    <UnicProduct />
                    <UnicProduct />
                    <UnicProduct />
                    <UnicProduct />
                    <UnicProduct />
                </div>
                <div class="products__footer">
                    <NavLink to="" class="products__more btn btn_white">Show More</NavLink>
                </div>
            </div>
        </section>
    );
}

export default UnicProducts;