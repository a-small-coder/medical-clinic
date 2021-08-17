import React from 'react';

function CartInfoContainer(props) {

    let productsElements
    let result_price = 0
    if (props.products != null){
        productsElements = props.products.map(
            a => {
                result_price += Number(a.final_price)
            return (
                <div key={a.id} className="info-block__propduct-price-item propduct-price-item">
                    <span className="propduct-price-item__title">
                        {a.analyze.title}
                    </span>
                    <span className="propduct-price-item__price _title-standart">
                        {Number(a.final_price)} p
                    </span>
                </div>
            )
            });
    }

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
                        {productsElements}
                    </div>

                    <div className="info-block__price-result price-result">
                        <p className="price-result__text _title-standart">Итого: </p>
                        <span className="price-result__result">{result_price}.00 p</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartInfoContainer;