import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {


    return (
        <div class="analyze-section__item analyze-item">
            <Link to={props.link + `/${props.id}`}class="analyze-item__title">{props.title}</Link>
            <div class="analyze-item__specs">
                <div class="analyze-item__spec">
                    <div class="analyze-spec__title">Арт.</div>
                    <div class="analyze-spec__text">{props.number}</div>
                </div>
                <div class="analyze-item__spec">
                    <div class="analyze-spec__title">Срок:</div>
                    <div class="analyze-spec__text">{props.time} к.д.</div>
                </div>
            </div>
            <div class="analyze-item__price">{props.price} р</div>
            <button type="button" class="analyze-item__buy btn _icon-cart" title="Добавить в корзину"></button>
        </div>
    );
}

export default Product;