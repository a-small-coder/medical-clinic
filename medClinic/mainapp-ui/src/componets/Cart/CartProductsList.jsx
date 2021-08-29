import React from 'react';
import Product from '../Catalog/ProductCard/Product';

const CartProductsList = (props) => {

    let productsElements
    if (props.products && props.products.length > 0){
        productsElements = props.products.map(
            a => {
            return <Product key={a.id} id={a.id} title={a.product.title} time={a.product.completion_time}
                slug={a.product.id} price={a.final_price} mainSlug={"catalog/all-analyzes"} vendor_code={a.product.vendor_code} 
                InCart={true} buttonButClickHandler={props.productCloseClick} forCart={true}
                />
            });
    }

    return (
        <div className="cart-items">
            {productsElements}
        </div>
    )
}

export default CartProductsList