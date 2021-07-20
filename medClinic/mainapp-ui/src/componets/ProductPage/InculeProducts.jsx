import React from 'react';
import Product from '../Catalog/Product';
import './IncludeProduct.scss'

const InculeProducts = (props) => {

    let productsElements
    if (props.products != null){
        productsElements = props.products.map(
            a => <Product key={a.id} title={a.title} time={a.time} number={a.number}
                slug={a.id} price={a.price} mainSlug={"catalog/all-analyzes"} />);
    }


    return (
        <div className="analyze-section__items">
            <div className="top_margin50px"></div>
            <h2 className="analyze-section__title _title">В состав комплекса входят:</h2>
            {productsElements}
        </div>
    );
}

export default InculeProducts;