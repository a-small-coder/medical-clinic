import React from 'react';
import Product from '../Catalog/Product';

const CartProductsList = (props) => {

    let productsElements
    if (props.products != null){
        productsElements = props.products.map(
            a => {
            return <Product key={a.id} id={a.id} title={a.analyze.title} time={a.analyze.time}
                slug={a.analyze.id} price={a.final_price} mainSlug={"catalog/all-analyzes"} vendor_code={a.analyze.vendor_code} 
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