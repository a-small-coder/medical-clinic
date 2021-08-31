import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuNavItem(props) {
    return (
        <li className={props.classLi}>
            
            <NavLink 
                to={props.link}
                className={props.classLink} 
                activeClassName={props.classLink + "_selected"}
                >
                    {props.title}
            </NavLink>
        </li>
    );
}

export default MenuNavItem;