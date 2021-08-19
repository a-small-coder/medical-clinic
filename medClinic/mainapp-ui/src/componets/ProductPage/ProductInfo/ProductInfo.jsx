import React from 'react';
import ProductSide from './ProductSide';

const ProductInfo = (props) => {

    const onBuyClick = () =>{
        props.BuyClick()
    }

    let buttonBuyClassName = "product-info__buy btn _circle-btn _filled-btn _blue _icon-cart"

    if (props.inCart){
        buttonBuyClassName = "product-info__buy btn _circle-btn _filled-btn _green _icon-cart"
    }

    let productSideGenerate = () =>{
        let p = props.product;
        return (
            <div className="product-info__items">
                <ProductSide title={"Артикул:"} text={p.number != null ? p.number : p.vendor_code} />
                <ProductSide title={"Срок исполнения:"} subtext={p.time != null ? p.time : "рассчитывается при оформлении заказа"} />
                <ProductSide title={"Цена:"} text={p.price + " руб."} subtext={p.subprice} />
                <div className="product-info__price-result price-result">
                    <p className="price-result__text _title-standart">Итого: </p>
                    <span className="price-result__result">{p.price + " руб."}</span>
                </div>
                <button
                    className={buttonBuyClassName}
                    type='submit'
                    onClick={onBuyClick}
                >
                    {props.inCart ? "Перейти в корзину" : "Добавить в корзину"}
                </button>
            </div>
        )
    } 


    return (
        <aside className="analyze-product__sidebar product-info">
            <div className="product-info__fixed-wrapper">
                <div className="product-info__scroll-wrapper">

                </div>
                <div className="product-info__body">
                    {productSideGenerate()}
                </div>
            </div>

        </aside>
    );
}

export default ProductInfo;