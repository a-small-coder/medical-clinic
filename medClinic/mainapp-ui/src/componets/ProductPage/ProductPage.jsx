import React from 'react';
import ProductMain from './MainBlock/ProductMain';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductForPC = () => {


    return (
        <section className="page__product analyze-product">
            <div className="analyze-product__container _container">
                <div className="analyze-product__body">
                    <h1 className="analyze-product__title _title"><span>Триглицериды</span></h1>
                    <div className="analyze-product__content">
                        <div className="analyze-product__main product-main">

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