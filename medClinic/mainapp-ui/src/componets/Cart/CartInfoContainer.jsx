import React from 'react';

function CartInfoContainer(props) {
    return (
        <div className="cart-side">
            <div className="cart-side__container cart-info">
                <div className="cart-info__cart-order-form">
                    <button 
                        className="button-block__button btn _filled-btn _blue"
                        type='submit' 
                    >
                        ОФОРМИТЬ ЗАКАЗ
                    </button>
                </div>
                <div className="cart-info__info-block info-block">
                    <div className="info-block__products-price">
                        <div className="info-block__products-price-title _title-standart">
                            Ваши товары:
                        </div>
                        <div className="info-block__propduct-price-item propduct-price-item">
                            <span className="propduct-price-item__title">
                                Какое-то там оооооооочень длинное, прям неимоверно огромное и 
                                нескончаемое название одного из товаров в корзине
                            </span>
                            <span className="propduct-price-item__price _title-standart">
                                19 895 p
                            </span>
                        </div>
                        <div className="info-block__propduct-price-item propduct-price-item">
                            <span className="propduct-price-item__title">
                                Какое-то там название одного из товаров в корзине
                            </span>
                            <span className="propduct-price-item__price _title-standart">
                                895 p
                            </span>
                        </div>
                        <div className="info-block__propduct-price-item propduct-price-item">
                            <span className="propduct-price-item__title">
                                Какое-то там длинное, название одного из товаров в корзине
                            </span>
                            <span className="propduct-price-item__price _title-standart">
                                9 895 p
                            </span>
                        </div>
                        <div className="info-block__propduct-price-item propduct-price-item">
                            <span className="propduct-price-item__title">
                                Какое-то название товара
                            </span>
                            <span className="propduct-price-item__price _title-standart">
                                9 895 p
                            </span>
                        </div>
                    </div>

                    <div className="info-block__price-result price-result">
                        <p className="price-result__text _title-standart">Итого: </p>
                        <span className="price-result__result">109 000.00 p</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartInfoContainer;