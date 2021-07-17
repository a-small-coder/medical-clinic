import React from 'react';
import { Link } from 'react-router-dom';
import UnicProduct from './UnicProduct';
const UnicProducts = (props) => {
    const countProducts = props.products.count;
    const products = props.products.products.slice(0, countProducts);
    console.log(props.products.products);
    console.log(products);
    let productElements = products.map(p => <UnicProduct key={p.id} title={p.title} description={p.description} img={p.img} link={p.link} markers={p.markers}/>);
    
    return (
        <section class="page__products products">
            <div class="products__container _container">
                <h2 class="products__title _title">Our Products</h2>
                <div class="products__items">
                    {productElements}
                </div>
                <div class="products__footer">
                    <Link to="" class="products__more btn btn_white">Show More</Link>
                </div>
            </div>
        </section>
    );
}

export default UnicProducts;