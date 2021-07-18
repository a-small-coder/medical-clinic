import React, { useCallback, useRef, useEffect} from 'react';
import HeaderMainContainer from './HeaderMainContainer';
import HeaderActions from './HeaderActions';
import HeaderSearchContainer from './HeaderSearchContainer';
const Header = (props) => {

    const iconMenu = useRef();
    const iconMenuContainer = useRef();
    const setIconMenuActive = useCallback(() => {
        
            iconMenuContainer.current.classList.toggle("_active");
        
    }, []);
    const iconMenuClick = () => {
        console.log("click");
        console.log(iconMenuContainer.current.classList);
        if (iconMenu.current != null) {
            iconMenu.current.addEventListener("click", setIconMenuActive);
        };
    };
    useEffect(()=>{
        iconMenu.current.addEventListener("click", setIconMenuActive);
    }, []);
    const headerRef = useRef();
    useEffect(() => {
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
    

    
    return (<header className="header" ref={headerRef}>
        <div className="header__wrapper">
            <div className="header__container _container">
                <div className="header__body" ref={iconMenuContainer}>
                    <HeaderMainContainer/>
                    <HeaderSearchContainer />
                    <HeaderActions />
                    <button className="icon-menu" ref={iconMenu} onClick={iconMenuClick}>
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