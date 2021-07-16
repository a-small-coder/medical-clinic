import React from 'react';
import ProductSide from './ProductSide';

const ProductInfo = () => {


    return (
        <aside class="analyze-product__sidebar product-info">
            <div class="product-info__fixed-wrapper">
                <div class="product-info__scroll-wrapper">

                </div>
                <div class="product-info__body">
                    <div class="product-info__items">
                        <ProductSide/>
                        <ProductSide/>
                        <ProductSide/>
                    </div>
                </div>
            </div>

        </aside>
    );
}

export default ProductInfo;