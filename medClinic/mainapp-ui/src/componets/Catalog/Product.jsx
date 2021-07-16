import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {


    return (
        <div class="analyze-section__item analyze-item">
            <Link to="/product/1" class="analyze-item__title" activeClassName="analyze-item__title">РНК SARS-CoV-2 (COVID-19), качественное определение</Link>
            <div class="analyze-item__specs">
                <div class="analyze-item__spec">
                    <div class="analyze-spec__title">Код:</div>
                    <div class="analyze-spec__text">0001</div>
                </div>
                <div class="analyze-item__spec">
                    <div class="analyze-spec__title">Срок:</div>
                    <div class="analyze-spec__text">2 к.д.</div>
                </div>
            </div>
            <div class="analyze-item__price">1 750p</div>
            <button type="button" class="analyze-item__buy btn _icon-cart" title="Добавить в корзину"></button>
        </div>
    );
}

export default Product;