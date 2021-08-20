import React from 'react';

const ProductSide = (props) => {


    return (
        <div className="product-info__item info-item">
            <div className="info-item__title">{props.title}</div>
            <div className="info-item__text">{props.text}</div>
            <div className="info-item__subInfo">
                {props.subtext != null ? <div className="subInfo__text">{props.subtext}</div> : <div className="subInfo__text"></div>}
            </div>
        </div>
    );
}

export default ProductSide;