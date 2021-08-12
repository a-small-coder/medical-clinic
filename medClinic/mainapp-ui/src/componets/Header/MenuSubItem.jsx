import React from 'react';
import { Link } from 'react-router-dom';
const MenuSubItem = (props) =>{

    return (
        <li className={props.classLi}>
            
            <Link to={props.link} className={props.classLink} >{props.title}</Link>
        </li>
    )
}

export default MenuSubItem