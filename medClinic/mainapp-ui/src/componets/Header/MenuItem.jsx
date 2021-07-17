import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {slideUp, slideDown} from '../Spoiler';
const MenuItem = (props) => {

    const menuItem = useRef();

    
    /*
    const setIconMenuActive = useCallback(() => {
        console.log("hey!");
        iconMenuContainer.current.classList.toggle("_active");
    }, []);


    const iconMenuClick = () => {
        if (iconMenu.current != null) {
            menuItem.current.addEventListener("mousedown", setIconMenuActive);
        };
    };

    if (window.innerWidth > 768 && isMobile.any()){
        if (targetElement.classList.contains('menu__arrow')){
            if (targetElement.closest('.menu__item').classList.contains('_hover')){
                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
            else{
                if (document.querySelectorAll('.menu__item._hover').length > 0){
                    _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
                }
                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
            
        }
        if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0){
            _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
        }
    }


    this.wrapperRef && !this.wrapperRef.contains(event.target)
    */

    const [spoilerActive, setSpoilerActive] = useState(true);
    const buttonClassName = "menu__arrow _icon-arrow-down";
    const contentClassName = "menu__sub-list";

    const onClick = useCallback(()=>{
        if (props.isInit){
            setSpoilerActive(!spoilerActive)
        }
    }, [props.isInit, spoilerActive]);

    const contentRef = useRef(null);
    const _slideDown = useCallback(slideDown, []);
    const _slideUp = useCallback(slideUp, []);
    useEffect(() => {
            if (spoilerActive) {
                _slideDown(contentRef);
            }
            else {
                _slideUp(contentRef);
            }
        
    }, [spoilerActive, _slideDown, _slideUp]);

    return (
        <li class="menu__item" ref={menuItem} >
            <Link to="/catalog" class="menu__link" >Аназизы</Link>
            <button data-spoller type="button" 
            className={spoilerActive ? buttonClassName + " _active" : buttonClassName}
            onClick={onClick}></button>
            <ul className={spoilerActive ? contentClassName + " _slide-up" : contentClassName + " _slide-down"} ref={contentRef}>
                <li class="menu__sub-item">
                    <Link to="/catalog" class="menu__sub-link" >Каталог анализов</Link>
                </li>
                <li class="menu__sub-item">
                    <Link to="/catalog" class="menu__sub-link" >Комплексы анализов</Link>
                </li>
                <li class="menu__sub-item">
                    <Link to="/catalog" class="menu__sub-link" >Уникальные анализы</Link>
                </li>
            </ul>
        </li>
    );
}

export default MenuItem;