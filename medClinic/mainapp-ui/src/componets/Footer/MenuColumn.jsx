import React from 'react';
import { Link } from 'react-router-dom';
const MenuColumn = () => {
    return (
        <div class="menu-footer__column">
            <button data-spoller type="button" class="menu-footer__title _footer-title">Menu</button>
            <ul class="menu-footer__list">
                <li><Link to="" class="menu-footer__link" activeClassName="menu-footer__link">Products</Link></li>
                {/* <li><Link to="" class="menu-footer__link" activeClassName="">Rooms</Link></li>
                <li><Link to="" class="menu-footer__link" activeClassName="">Inspirations</Link></li>
                <li><Link to="" class="menu-footer__link" activeClassName="">About us</Link></li>
                <li><Link to="" class="menu-footer__link" activeClassName="">Terms {"&"} Policy</Link></li> */}
            </ul>
        </div>
    );
}

export default MenuColumn;