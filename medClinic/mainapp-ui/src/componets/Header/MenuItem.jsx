import React, {useRef, useCallback} from 'react';
import { Link } from 'react-router-dom';
import {slideUp, slideDown} from '../Spoiler';
import MenuSubItem from './MenuSubItem';
const MenuItem = (props) => {

    // props:
    // isSpoilerInit
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
    // disactivateSpoiler();
    // activateSpoiler();
    const contentRef = useRef(null);
    let isNeedSubList;
    let buttonClassName;
    isNeedSubList = props.category.sub_categories.length > 0
    isNeedSubList ? buttonClassName = "menu__arrow _icon-arrow-down" : buttonClassName = "menu__arrow";
    const contentClassName = "menu__sub-list";
    
    const _slideDown = useCallback(slideDown, []);
    const _slideUp = useCallback(slideUp, []);

    let subMenuElements = props.category.sub_categories.map(s =>
        <MenuSubItem key={s.id} title={s.sub_category} link={"/" + props.category.slug + "/" + s.slug} classLi={"menu__sub-item"} classLink={"menu__sub-link"}/>
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
        <li className="menu__item">
            <Link to={"/" + props.category.slug} className="menu__link" >{props.category.category}</Link>
            <button data-spoller type="button"
                className={props.category.spoilerActive ? buttonClassName + " _active" : buttonClassName}
                onClick={onSpoilerClick}></button>
            <ul className={isNeedSubList ? contentClassName + (props.category.spoilerActive ? " _slide-up" : " _slide-down") : "hidden"} ref={contentRef}>
                {subMenuElements}
            </ul>
        </li>
    );
}

export default MenuItem;