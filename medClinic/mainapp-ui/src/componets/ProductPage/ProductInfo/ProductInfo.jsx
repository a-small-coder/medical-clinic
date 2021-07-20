import React from 'react';
import ProductSide from './ProductSide';

const ProductInfo = (props) => {

    let productSideGenerate = () =>{
        let p = props.product;
        return (
            <div className="product-info__items">
                        <ProductSide title={"Артикул"} text={p.number != null ? p.number : `6hAa1dB${p.id}`}/>
                        <ProductSide title={"Срок исполнения"} subtext={p.time != null ? p.time : "рассчитывается при оформлении заказа"}/>
                        <ProductSide title={"Цена"} text={p.price + " руб."} subtext={p.subprice}/>
                        <ProductSide title={"Итого"} subtext={p.price + " руб."} isButton={true}/>
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