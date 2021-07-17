import React from 'react';
import { Link } from 'react-router-dom';
const HeaderActions = () => {
    return(
        <div class="header__actions actions-header">
            <Link to="" 
            class="actions-header__item actions-header__item_feed-back _icon-feed-back"></Link>
            <div class="actions-header__item cart-header">
                <Link to="" class="cart-header__icon _icon-cart" ></Link>
                <div class="cart-header__body">
                    <ul class="cart-header__list cart-list"></ul>
                </div>
            </div>
            <Link to="" 
            class="actions-header__item actions-header__item_user _icon-user"></Link>
        </div>
    )
}

export default HeaderActions;