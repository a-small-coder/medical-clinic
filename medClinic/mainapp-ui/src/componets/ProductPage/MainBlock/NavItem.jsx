
import React from 'react';
import { Link } from 'react-router-dom';
const NavItem = () => {


    return (
        <li class="menu-product__item">
            <Link to="#" class="menu-product__link">Описание</Link>
            <button data-spoller type="button" class="menu-product__arrow _icon-arrow-down"></button>

        </li>
    );
}

export default NavItem;