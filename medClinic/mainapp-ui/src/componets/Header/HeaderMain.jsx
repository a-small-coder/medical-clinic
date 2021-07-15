import React from 'react';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';
const HeaderMain = () => {

   

    return (
        <div class="header__main">
            <NavLink to="/home" class="header__logo">TedMed.</NavLink>
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