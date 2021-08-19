import React, { useCallback, useRef, useEffect, useState} from 'react';
import HeaderMainContainer from './HeaderMainContainer';
import HeaderActions from './HeaderActions';
import HeaderSearchContainer from './HeaderSearchContainer';
const Header = (props) => {
    

    // icon-menu
    const [isIconMenuActive, setIsIconMenuActive] = useState(false)

    let headerBodyClassName = "header__body"
    let iconMenuClassName = "icon-menu"
    if (isIconMenuActive){
        iconMenuClassName += " _active"
        headerBodyClassName += " _active"
    }
    const iconMenuClickHandler = () => {
        setIsIconMenuActive(!isIconMenuActive)
        props.setSpoilerMode(!props.initSpoiler)
        console.log(!props.initSpoiler)
    };


    // header scroll 
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
                <div className={headerBodyClassName}>
                    <HeaderMainContainer/>
                    <HeaderSearchContainer />
                    <HeaderActions />
                    <button className={iconMenuClassName} onClick={iconMenuClickHandler}>
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