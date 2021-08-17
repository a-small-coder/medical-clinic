import React from 'react';
import OfficeTypeSwitch from './OfficeTypeSwitch';
import PriceInfoBlock from './PriceInfoBlock';

function CartInfo(props) {

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
                <div className="cart-info__cart-order">
                    <OfficeTypeSwitch type_office={props.type_office} officeOptionHandler={props.setOfficeType}/>
                    <button 
                        className="button-block__button btn _filled-btn _blue"
                        type='submit' 
                    >
                        ОФОРМИТЬ ЗАКАЗ
                    </button>
                </div>
                <PriceInfoBlock productsElements={productsElements} result_price={result_price}/>
            </div>
        </div>
    );
}

export default CartInfo;