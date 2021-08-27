
import React from 'react';
const NavItem = (props) => {

    const className = props.active_block ? "menu-product__item _selected" : "menu-product__item"
    const onTitleClick = () =>{
        props.switchActiveCategory(props.category);
    }

    return (
        <li className={className} onClick={onTitleClick}>
            <h4 to="#" className={"menu-product__link"} >{props.title}</h4>
            <div className="menu-product__circle"></div>

        </li>
    );
}

export default NavItem;