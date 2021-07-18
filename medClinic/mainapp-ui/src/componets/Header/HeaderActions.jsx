import React from 'react';
import { Link } from 'react-router-dom';
const HeaderActions = () => {
    return(
        <div className="header__actions actions-header">
            <Link to="" 
            className="actions-header__item actions-header__item_feed-back _icon-feed-back"></Link>
            <div className="actions-header__item cart-header">
                <Link to="" className="cart-header__icon _icon-cart" ></Link>
                <div className="cart-header__body">
                    <ul className="cart-header__list cart-list"></ul>
                </div>
            </div>
            <Link to="" 
            className="actions-header__item actions-header__item_user _icon-user"></Link>
        </div>
    )
}

export default HeaderActions;