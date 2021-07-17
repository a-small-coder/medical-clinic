import React from 'react';
import Paggination from '../Paggination/Paggination';
import Product from './Product';

const Products = (props) => {

    let productsElements = props.products.items.map(
        a => <Product key={a.id} title={a.title} time={a.time} number={a.number} link={a.link} price={a.price} id={a.id}/>);

    return (
        <div class="analyze-section">
            <h2 class="analyze-section__title _title">{props.products.title}</h2>
            <div class="analyze-section__items">

                {productsElements}
            </div>
            <Paggination/>
        </div>
    );
}

export default Products;