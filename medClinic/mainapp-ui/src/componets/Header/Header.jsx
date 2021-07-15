import React, { useCallback, useRef } from 'react';
import HeaderMain from './HeaderMain';
import HeaderActions from './HeaderActions';
import HeaderSearch from './HeaderSearch';
const Header = () => {

    const iconMenu = useRef();
    const iconMenuContainer = useRef();
    const setIconMenuActive = useCallback(() => {
        console.log("hey!");
        iconMenuContainer.current.classList.toggle("_active");
    }, []);
    const iconMenuClick = () => {
        if (iconMenu.current != null) {
            iconMenu.current.addEventListener("click", setIconMenuActive);
        };
    };
    

    
    return(
        <header class="header">
            <div class="header__wrapper">
                <div class="header__container _container">
                    <div class="header__body" ref={iconMenuContainer}>
                        <HeaderMain/>
                        <HeaderSearch/>
                        <HeaderActions/>
                        <button class="icon-menu" ref={iconMenu} onClick={iconMenuClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;