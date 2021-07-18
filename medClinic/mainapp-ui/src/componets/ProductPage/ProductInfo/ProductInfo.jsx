import React from 'react';
import ProductSide from './ProductSide';

const ProductInfo = () => {


    return (
        <aside className="analyze-product__sidebar product-info">
            <div className="product-info__fixed-wrapper">
                <div className="product-info__scroll-wrapper">

                </div>
                <div className="product-info__body">
                    <div className="product-info__items">
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