import React, { useCallback, useRef, useEffect } from 'react';
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



    const headerRef = useRef();

    useEffect(() => {
        console.log("add scroll");
        document.addEventListener("scroll", handleScroll);
    }, []);

    const isBottom = (el) =>{
        return el.getBoundingClientRect().bottom <= window.innerHeight;
        
      }

      const isTop = (el) =>{
        return el.getBoundingClientRect().top === 0;
      }
    

    const handleScroll = useCallback(() => {   
        
        if (isBottom(headerRef.current)) {
            if (!headerRef.current.classList.contains("_scroll")){
                headerRef.current.classList.add('_scroll');
            }
        } 
        if (isTop(headerRef.current)) {
            if (headerRef.current.classList.contains("_scroll")){
                headerRef.current.classList.remove('_scroll');
            }
        }

      }, []);
    

    
    return(
        <header class="header" ref={headerRef}>
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