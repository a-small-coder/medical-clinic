import React, {useRef, useCallback, useState} from 'react';
import { Link } from 'react-router-dom';
import MenuSubItem from './MenuSubItem';
const MenuItem = (props) => {

    // props:
    // category: {
    //     category: "анализы",
    //         sub_categories: [
    //             { id: 1, sub_category: "каталог анализов", link: "" },
    //             { id: 2, sub_category: "уникальные анализы", link: "" },
    //             { id: 3, sub_category: "комплексы анализов", link: "" },
    //         ],
    //       spoilerActive: false,
    //       link: ""
    // }

    // flags from props
    const isSpoiler = false
    // props.category.spoilerActive
    const isNeedSubList = props.category.sub_categories.length > 0

    const [menuItemHover, setMenuItemHover] = useState(false)

    // classes
    let menuItemClassName = "menu__item"
    if (menuItemHover){
        menuItemClassName = "menu__item _hover"
    }

    let buttonClassName = "menu__arrow";
    let contentClassName = "menu__sub-list";
    if (isNeedSubList) {
        buttonClassName += " _icon-arrow-down"
        if (isSpoiler) {
            buttonClassName += " _active"
            contentClassName += " _slide-up"
        }
        else {
            contentClassName += " _slide-down"
        }
    }
    else{
        contentClassName= "hidden"
    }
    
    // for menuItem
    const menuItemLink = "/" + props.category.slug
    
    let subMenuElements = props.category.sub_categories.map(s => {
        return (
            <MenuSubItem 
                key={s.id} 
                title={s.sub_category} 
                link={menuItemLink + "/" + s.slug} 
                classLi={"menu__sub-item"} 
                classLink={"menu__sub-link"}/>
        )
    })
    
    const onSpoilerClick = () =>{
        if (!isSpoiler){
            setMenuItemHover(!menuItemHover)
        }
        
    }

    return (
        
        <li className={menuItemClassName}>
            {console.log(menuItemClassName)}
            <Link to={menuItemLink} className="menu__link" >{props.category.category}</Link>

            <button type="button"
                className={buttonClassName}
                onClick={onSpoilerClick}>
            </button>

            <ul className={contentClassName}>
                {subMenuElements}
            </ul>
        </li>
    );
}

export default MenuItem;