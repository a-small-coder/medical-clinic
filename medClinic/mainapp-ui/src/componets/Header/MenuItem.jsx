import React, { useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
const MenuItem = () => {

    const menuItem = useRef();


    // const setIconMenuActive = useCallback(() => {
    //     console.log("hey!");
    //     iconMenuContainer.current.classList.toggle("_active");
    // }, []);


    // const iconMenuClick = () => {
    //     if (iconMenu.current != null) {
    //         menuItem.current.addEventListener("mousedown", setIconMenuActive);
    //     };
    // };

    // if (window.innerWidth > 768 && isMobile.any()){
    //     if (targetElement.classList.contains('menu__arrow')){
    //         if (targetElement.closest('.menu__item').classList.contains('_hover')){
    //             targetElement.closest('.menu__item').classList.toggle('_hover');
    //         }
    //         else{
    //             if (document.querySelectorAll('.menu__item._hover').length > 0){
    //                 _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
    //             }
    //             targetElement.closest('.menu__item').classList.toggle('_hover');
    //         }
            
    //     }
    //     if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0){
    //         _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
    //     }
    // }


    // this.wrapperRef && !this.wrapperRef.contains(event.target)
    return (
        <li class="menu__item" ref={menuItem} >
            <NavLink to="/catalog" class="menu__link">Аназизы</NavLink>
            <button data-spoller type="button" class="menu__arrow _icon-arrow-down"></button>
            <ul class="menu__sub-list">
                <li class="menu__sub-item">
                    <NavLink to="/catalog" class="menu__sub-link">Каталог анализов</NavLink>
                </li>
                <li class="menu__sub-item">
                    <NavLink to="/catalog" class="menu__sub-link">Комплексы анализов</NavLink>
                </li>
                <li class="menu__sub-item">
                    <NavLink to="/catalog" class="menu__sub-link">Уникальные анализы</NavLink>
                </li>
            </ul>
        </li>
    );
}

export default MenuItem;