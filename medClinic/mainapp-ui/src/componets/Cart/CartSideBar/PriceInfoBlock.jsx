import React from 'react';

function PriceInfoBlock(props) {
    return (
        <div className="cart-info__info-block info-block">
            <div className="info-block__products-price">
                <div className="info-block__products-price-title _title-standart">
                    Ваши товары:
                </div>
                {props.productsElements}
            </div>

            <div className="info-block__price-result price-result">
                <p className="price-result__text _title-standart">Итого: </p>
                <span className="price-result__result">{props.result_price}.00 p</span>
            </div>
        </div>
    );
}

export default PriceInfoBlock;