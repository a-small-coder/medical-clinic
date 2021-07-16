import React from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
const HeaderMain = () => {

   

    return (
        <div class="header__main">
            <Link to="/" class="header__logo" activeClassName="header__logo">TedMed.</Link>
            <div class="header__menu menu">
                <nav class="menu__body">
                    <ul data-spollers="768, max" class="menu__list">
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeaderMain;