import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuSubItem from './MenuSubItem';
const MenuItem = (props) => {

    // flags from props
    const isSpoiler = props.isBurgerShowed
    const isNeedSubList = props.category.sub_categories.length > 0

    const [menuItemHover, setMenuItemHover] = useState(false)
    const [subListHidden, setSubListHidden] = useState(true)

    // classes
    let menuItemClassName = "menu__item"
    if (menuItemHover){
        menuItemClassName = "menu__item _hover"
    }

    let buttonClassName = "menu__arrow";
    let contentClassName = "menu__sub-list";
    if (isNeedSubList) {
        buttonClassName += " _icon-arrow-down"
    }
    else{
        contentClassName= "hidden"
    }

    if(subListHidden){
        contentClassName += " _hidden"
    }
    else{
        buttonClassName += " _active"
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
                classLink={"menu__sub-link"}
            />
        )
    })
    
    const onSpoilerClick = () =>{
        if (!isSpoiler){
            setMenuItemHover(!menuItemHover)
        }
        else{
            setSubListHidden(!subListHidden)
        }
    }
    if (subMenuElements.length > 0){
        return (
            <li className={menuItemClassName}>
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
    return (
        <li className={menuItemClassName}>
            <Link to={menuItemLink} className="menu__link" >{props.category.category}</Link>
        </li>
    );
    
}

export default MenuItem;

// props:
    //isBurgerShowed : <bool>
    // category: {
    //     category: "анализы",
    //         sub_categories: [
    //             { id: 1, sub_category: "каталог анализов", link: "" },
    //             { id: 2, sub_category: "уникальные анализы", link: "" },
    //             { id: 3, sub_category: "комплексы анализов", link: "" },
    //         ],
    //       link: ""
    // }