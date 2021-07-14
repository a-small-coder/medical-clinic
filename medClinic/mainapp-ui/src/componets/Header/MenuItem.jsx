import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuItem = () => {
    return (
        <li class="menu__item">
            <NavLink to="/catalog" class="menu__link">Аназизы</NavLink>
            <button data-spoller type="button" class="menu__arrow _icon-arrow-down"></button>
            <ul class="menu__sub-list">
                <li class="menu__sub-item">
                    <NavLink to="/catalog" class="menu__sub-link">Каталог анализов</NavLink>
                </li>
                <li class="menu__sub-item">
                    <NavLink to="/catalog" class="menu__sub-link">Комплексы анализов</NavLink>
                </li>
                <li class="menu__sub-item">
                    <NavLink to="/catalog" class="menu__sub-link">Уникальные анализы</NavLink>
                </li>
            </ul>
        </li>
    );
}

export default MenuItem;