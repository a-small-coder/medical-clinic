import React, {useCallback, useRef} from 'react';
import {slideUp, slideDown} from '../Other/Spoiler';
import MenuSubItem from '../Header/MenuSubItem';
const MenuColumn = (props) => {

    const buttonClassName = "menu-footer__title _footer-title";
    const contentClassName = "menu-footer__list";
    const contentRef = useRef(null);
    const _slideDown = useCallback(slideDown, []);
    const _slideUp = useCallback(slideUp, []);

    let menuElements = props.category.sub_categories.map(s =>
        <MenuSubItem key={s.id} title={s.sub_category} link={s.link} classLi={""} classLink={"menu-footer__link"}/>
    )

    const onSpoilerClick = () =>{
        if (props.isSpoilerInit){
            if (props.category.spoilerActive){
                props.disactivateSpoiler(props.category.id);
                _slideUp(contentRef);
            }
            else{
                props.activateSpoiler(props.category.id);
                _slideDown(contentRef);
            }
        }
        
    }
    return (
        <div className="menu-footer__column">
            <button type="button"
                className={props.category.spoilerActive ? buttonClassName + " _active" : buttonClassName}
                onClick={onSpoilerClick}>{props.category.category}</button>
            <ul className={props.category.spoilerActive ? contentClassName + " _slide-up" : contentClassName + " _slide-down"} ref={contentRef}>
                {menuElements}
            </ul>
        </div>
    );
}

export default MenuColumn;