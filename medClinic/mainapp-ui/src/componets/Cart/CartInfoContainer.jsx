import React from 'react';

function CartInfoContainer(props) {
    return (
        <div className="cart-side">
            <div className="cart-side__container cart-info">
                <div className="cart-info__cart-order-form">
                    <button className="button-block__button btn _filled-btn _blue" type='submit' disabled={!props.isFormValid}>ОФОРМИТЬ ЗАКАЗ</button>
                </div>
                <div className="cart-info__info-block info-block">
                    <div className="info-block__products-price">
                        <div className="info-block__propduct-price-item propduct-price-item">
                            <span className="propduct-price-item__title">
                                Какое-то там оооооооочень длинное, прям неимоверно огромное и нескончаемое название одного из товаров в корзине
                            </span>
                            <span className="propduct-price-item__price">19 895.00</span>
                        </div>
                    </div>

                    <div className="info-block__price-result price-result">
                        <p className="price-result__text">ИТОГ: </p>
                        <span className="price-result__result">109 000.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartInfoContainer;