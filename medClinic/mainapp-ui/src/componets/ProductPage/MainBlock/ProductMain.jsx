import React from 'react';
import ProductForMobile from './ProductForMobile';
import ProductForPC from './ProductForPC';
import Paggination from './../../Paggination/Paggination'
import Description from './Description'
const ProductMain = () => {


    return (
        <div class="product-main__menu menu-product">

            {/* for pc or for mobile */}
            <ProductForMobile />

            {/* for pc or for mobile */}
            {/* <ProductForPC /> */}
            {/* @@include('./Content/Content.html',{}) */}
            <div class="catalog__analyze analyze-section">
                <h2 class="analyze-section__title _title">Все анализы</h2>

                <Description/>
                <Paggination/>
            </div>
        </div>
    );
}

export default ProductMain;