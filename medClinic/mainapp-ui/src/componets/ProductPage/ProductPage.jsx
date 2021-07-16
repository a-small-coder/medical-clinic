import React from 'react';
import ProductMain from './MainBlock/ProductMain';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductForPC = () => {


    return (
        <section class="page__product analyze-product">
            <div class="analyze-product__container _container">
                <div class="analyze-product__body">
                    <h1 class="analyze-product__title _title"><span>Триглицериды</span></h1>
                    <div class="analyze-product__content">
                        <div class="analyze-product__main product-main">

                            <ProductMain/>

                        </div>
                        <ProductInfo/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductForPC;