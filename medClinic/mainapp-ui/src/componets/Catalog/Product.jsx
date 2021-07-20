import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    console.log(props.mainSlug + `/${props.slug}`)

    return (
        <div className="analyze-section__item analyze-item">
            <Link to={props.mainSlug + `/${props.slug}`} replace  className="analyze-item__title">{props.title}</Link>
            <div className="analyze-item__specs">
                <div className="analyze-item__spec">
                    <div className="analyze-spec__title">Арт.</div>
                    <div className="analyze-spec__text">{props.number}</div>
                </div>
                <div className="analyze-item__spec">
                    <div className="analyze-spec__title">Срок:</div>
                    <div className="analyze-spec__text">{props.time}</div>
                </div>
            </div>
            <div className="analyze-item__price">{props.price} р</div>
            <button type="button" className="analyze-item__buy btn _icon-cart" title="Добавить в корзину"></button>
        </div>
    );
}

export default Product;