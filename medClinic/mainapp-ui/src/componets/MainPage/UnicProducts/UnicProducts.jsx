import React from 'react';
import { Link } from 'react-router-dom';
import UnicProduct from './UnicProduct';
const UnicProducts = (props) => {
    const countProducts = props.products.count;
    const products = props.products.items.slice(0, countProducts);
    let productElements = products.map(p => <UnicProduct key={p.id} title={p.title} description={p.description} img={p.img} link={p.link} markers={p.markers}/>);
    
    return (
        <section className="page__products products">
            <div className="products__container _container">
                <h2 className="products__title _title">Our Products</h2>
                <div className="products__items">
                    {productElements}
                </div>
                <div className="products__footer">
                    <Link to="" className="products__more btn btn_white">Show More</Link>
                </div>
            </div>
        </section>
    );
}

export default UnicProducts;