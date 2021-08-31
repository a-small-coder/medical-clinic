import React, { useCallback, useRef, useEffect, useState} from 'react';
import { getUserCart } from '../../support_functions/api_requests';
import HeaderActionsContainer from './ActionsBlocks/HeaderActionsContainer';
import HeaderSearchContainer from './ActionsBlocks/HeaderSearchContainer';
import HeaderMainContainer from './Navigation/HeaderMainContainer'

const Header = (props) => {
    
    useEffect(() => {
        if (props.user && props.user.token){
            getUserCart(props.user.token, props.setCart, ()=>{})
        }
    }, [props.user, props.setCart])

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
    };


    // header scroll 
    const headerRef = useRef();
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <HeaderActionsContainer />
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