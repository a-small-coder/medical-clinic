import React, {useState} from 'react';
import MenuSubItem from '../../Header/Navigation/MenuSubItem';
const MenuColumn = (props) => {

    let buttonClassName = "menu-footer__title _footer-title";
    let contentClassName = "menu-footer__list";

    const [isSpoilerActive, setSpoilerActive] = useState(true)

    if (isSpoilerActive){
        buttonClassName += " _active"
    }
    else {
        contentClassName += " _hidden"
    }
    let menuElements = props.category.sub_categories.map(s =>
        <MenuSubItem 
            key={s.id} 
            title={s.sub_category} 
            link={s.link} 
            classLi={""} 
            classLink={"menu-footer__link"} 
            icon_class={s.icon} 
            societies={props.category.societies}
        />
    )

    const onSpoilerClick = () =>{
        setSpoilerActive(!isSpoilerActive)
    }
    return (
        <div className="menu-footer__column">
            <button type="button"
                className={buttonClassName}
                onClick={onSpoilerClick}
            >
                {props.category.category}
            </button>
            <ul className={contentClassName}>
                {menuElements}
            </ul>
        </div>
    );
}

export default MenuColumn;