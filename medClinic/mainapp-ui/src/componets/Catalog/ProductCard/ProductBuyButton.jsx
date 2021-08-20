import React from 'react';

function ProductBuyButton(props) {
    const {inCart, buttonClickHandler, buttonClassName, showButton=true} = props
    if (showButton) {
        if (inCart) {
            return (
                <button type="button"  onClick={buttonClickHandler}
                    className={"cart-item__close _icon-close"} title="Удалить из корзины">
                </button>
            )
        }
        return (
            <button type="button"  onClick={buttonClickHandler}
                className={buttonClassName} title="Добавить в корзину">
            </button>
        )
    }
    return null
}

export default ProductBuyButton;