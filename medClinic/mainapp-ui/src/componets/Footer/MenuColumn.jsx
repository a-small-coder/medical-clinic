import React, {useCallback, useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import {slideUp, slideDown} from '../Spoiler';
const MenuColumn = () => {

    const [spoilerActive, setSpoilerActive] = useState(false);
    const buttonClassName = "menu-footer__title _footer-title";
    const contentClassName = "menu-footer__list";

    const contentRef = useRef(null);    
const _slideDown = useCallback(slideDown, []);
const _slideUp = useCallback(slideUp, []);

useEffect(() => {
    if (spoilerActive){
        _slideDown(contentRef);
    }
    else{
        _slideUp(contentRef);
    }
}, [spoilerActive]);

    return (
        <div class="menu-footer__column _init">
            <button type="button" 
            className={spoilerActive ? buttonClassName + " _active" : buttonClassName} 
            onClick={() => setSpoilerActive(!spoilerActive)}>Menu</button>
            <ul className={spoilerActive ? contentClassName + " _slide-up" : contentClassName + " _slide-down"} ref={contentRef}>
                <li><Link to="" class="menu-footer__link">Products</Link></li>
                {/* <li><Link to="" class="menu-footer__link" activeClassName="">Rooms</Link></li>
                <li><Link to="" class="menu-footer__link" activeClassName="">Inspirations</Link></li>
                <li><Link to="" class="menu-footer__link" activeClassName="">About us</Link></li>
                <li><Link to="" class="menu-footer__link" activeClassName="">Terms {"&"} Policy</Link></li> */}
            </ul>
        </div>
    );
}

export default MenuColumn;