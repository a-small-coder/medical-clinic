
import React from 'react';
const NavItem = (props) => {

    const className = props.active_block ? "menu-product__link _selected" : "menu-product__link"
    const onTitleClick = () =>{
        props.switchProductActiveContent(props.id);
    }

    return (
        <li className="menu-product__item">
            <h4 to="#" className={className} onClick={onTitleClick}>{props.title}</h4>
            <button data-spoller type="button" className="menu-product__arrow _icon-arrow-down"></button>

        </li>
    );
}

export default NavItem;