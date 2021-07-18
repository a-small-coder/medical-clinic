import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../img/unic-products/unique_service_corona.webp'
const UnicProduct = (props) => {
    const state = props.markers;
    let labelElements
    if (state.count > 0){
        labelElements = state.items.map(m => <div key={m.id} className={`item-product__label item-product__label_${m.type}`}>{m.label}</div>)
    }
    else {
        labelElements = <span></span>
    }
    

    return (
        <article data-pid="1" className="products__item item-product">
            <div className="item-product__labels">
            {labelElements}
            </div>
            <Link to={props.link} className="item-product__image _ibg" >
                <picture><img src={props.img} alt="" /></picture>
            </Link>
            <div className="item-product__body">
                <div className="item-product__content">
                    <h5 className="item-product__title">{props.title}</h5>
                    <div className="item-product__text">{props.description}</div>
                </div>
            </div>
        </article>
    );
}

export default UnicProduct;