import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../img/unic-products/unique_service_corona.webp'
const UnicProduct = (props) => {
    let labelElements
    let stockSize = 0;
    if (props.markers != null && props.markers.length > 0){
        labelElements = props.markers.items.map(m => {
            if (m.type === "sale"){
                stockSize = Number(m.label.substring(1, 2)) / 100
            }
            return (
            <div key={m.id} className={`item-product__label item-product__label_${m.type}`}>{m.label}</div>
            )
        })
        
    }
    else {
        labelElements = ""
    }
    

    return (
        <article data-pid="1" className="products__item item-product">
            <div className="item-product__labels">
                {labelElements}
            </div>
            <Link to={props.slug} className="item-product__image _ibg" >
                <picture><img src={props.img} alt="" /></picture>
            </Link>
            <div className="item-product__body">
                <div className="item-product__content">
                    <h5 className="item-product__title">{props.title}</h5>
                    <div className="item-product__text">{props.description}</div>
                </div>
                {props.price != null ? (
                    <div class="item-product__prices">
                        <div class="item-product__price">{props.price}</div>
                        {props.markers != null && props.markers.length > 0 && stockSize > 0 ? (
                            <div class="item-product__price item-product__price_old">{props.price * stockSize}</div>
                        ) : (
                            ""
                        )}
                        
                    </div>
                ) :
                    (
                        ""
                    )

                }

            </div>
        </article>
    );
}

export default UnicProduct;