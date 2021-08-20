import React from 'react';
import { Link } from 'react-router-dom';
import ProductBuyButton from './ProductBuyButton';
import '../../../styles/CatalogPage/Proguct.scss';

const Product = (props) => {

    const onButtonBuyClick = ()=>{
        props.buttonButClickHandler(props.id, props.InCart)
    }

    let buttonCartClassName = "analyze-item__buy btn _icon-cart"
    if (props.InCart){
        buttonCartClassName += " _active"
    }

    const buttonBuyData = {
        inCart: props.forCart, 
        buttonClickHandler: onButtonBuyClick, 
        buttonClassName: buttonCartClassName, 
        showButton: props.showBuyButton
    }

    return (
        <div className="analyze-section__item analyze-item">
            <Link to={props.mainSlug + `/${props.slug}`} replace  className="analyze-item__title">{props.title}</Link>
            <div className="analyze-item__specs">
                <div className="analyze-item__spec">
                    <div className="analyze-spec__title">Арт.</div>
                    <div className="analyze-spec__text">{props.vendor_code}</div>
                </div>
                <div className="analyze-item__spec">
                    <div className="analyze-spec__title">Срок:</div>
                    <div className="analyze-spec__text">{props.time}</div>
                </div>
            </div>
            <div className="analyze-item__buy-container">
                 <div className="analyze-item__price">{props.price != null ? props.price + " р": null}</div> 
                <ProductBuyButton {...buttonBuyData}/>
            </div>
            
        </div>
    );
}

export default Product;