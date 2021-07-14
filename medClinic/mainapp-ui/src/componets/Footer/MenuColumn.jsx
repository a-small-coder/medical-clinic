import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuColumn = () => {
    return (
        <div class="menu-footer__column">
            <button data-spoller type="button" class="menu-footer__title _footer-title">Menu</button>
            <ul class="menu-footer__list">
                <li><NavLink to="" class="menu-footer__link">Products</NavLink></li>
                <li><NavLink to="" class="menu-footer__link">Rooms</NavLink></li>
                <li><NavLink to="" class="menu-footer__link">Inspirations</NavLink></li>
                <li><NavLink to="" class="menu-footer__link">About us</NavLink></li>
                <li><NavLink to="" class="menu-footer__link">Terms {"&"} Policy</NavLink></li>
            </ul>
        </div>
    );
}

export default MenuColumn;