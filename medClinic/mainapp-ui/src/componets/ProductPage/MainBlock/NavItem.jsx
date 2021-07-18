
import React from 'react';
import { Link } from 'react-router-dom';
const NavItem = () => {


    return (
        <li className="menu-product__item">
            <Link to="#" className="menu-product__link">Описание</Link>
            <button data-spoller type="button" className="menu-product__arrow _icon-arrow-down"></button>

        </li>
    );
}

export default NavItem;