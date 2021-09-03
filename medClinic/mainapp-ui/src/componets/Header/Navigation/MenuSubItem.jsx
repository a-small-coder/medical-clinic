import React from 'react';
import { Link } from 'react-router-dom';
const MenuSubItem = (props) =>{

    if (props.societies){
        return (
            <li className={props.classLi}>
                
                <a href={props.link} target="_blank" className={`${props.classLink} ${props.icon_class}`} >{props.title}</a>
            </li>
        )
    }
    return (
        <li className={props.classLi}>
            
            <Link to={props.link} className={`${props.classLink} ${props.icon_class}`} >{props.title}</Link>
        </li>
    )
}

export default MenuSubItem