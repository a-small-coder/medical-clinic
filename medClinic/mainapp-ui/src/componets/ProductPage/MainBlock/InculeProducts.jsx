import React from 'react';
import Product from '../../Catalog/ProductCard/Product';
import '../../../styles/ProductPage/IncludeProduct.scss'

const InculeProducts = (props) => {

    let productsElements
    if (props.products != null){
        productsElements = props.products.map(
            a => <Product key={a.id} title={a.title} time={a.time} number={a.number} showBuyButton={false}
                slug={a.id} price={null} mainSlug={"catalog/all-analyzes"} forCart={false} />);
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