import React from 'react';
import { NavLink } from 'react-router-dom';
const HeaderActions = () => {
    return(
        <div class="header__actions actions-header">
            <NavLink to="" class="actions-header__item actions-header__item_feed-back _icon-feed-back"></NavLink>
            <div class="actions-header__item cart-header">
                <NavLink to="" class="cart-header__icon _icon-cart"></NavLink>
                <div class="cart-header__body">
                    <ul class="cart-header__list cart-list"></ul>
                </div>
            </div>
            <NavLink to="" class="actions-header__item actions-header__item_user _icon-user"></NavLink>
        </div>
    )
}

export default HeaderActions;