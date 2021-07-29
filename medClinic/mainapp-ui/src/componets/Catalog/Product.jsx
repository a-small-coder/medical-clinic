import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import './Proguct.scss';

const Product = (props) => {
    const buttonBuyRef = useRef(null)

    const onButtonBuyClick = ()=>{
        props.buttonButClickHandler(props.id, props.InCart)
    }

    let buttonCartClassName = "analyze-item__buy btn _icon-cart"
    if (props.InCart){
        buttonCartClassName += " _active"
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
            <div className="analyze-item__price">{props.price} р</div>
            <button type="button" ref={buttonBuyRef} onClick={onButtonBuyClick}
            className={buttonCartClassName} title="Добавить в корзину"></button>
        </div>
    );
}

export default Product;