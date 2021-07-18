import React, {useCallback, useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import {slideUp, slideDown} from '../Spoiler';
const MenuColumn = (props) => {

    
    const [spoilerActive, setSpoilerActive] = useState(true);
    const buttonClassName = "menu-footer__title _footer-title";
    const contentClassName = "menu-footer__list";
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
        
    }, [_slideDown, _slideUp, spoilerActive]);


    return (
        <div className="menu-footer__column">
            <button type="button"
                className={spoilerActive ? buttonClassName + " _active" : buttonClassName}
                onClick={() => setSpoilerActive(!spoilerActive)}>Menu</button>
            <ul className={spoilerActive ? contentClassName + " _slide-up" : contentClassName + " _slide-down"} ref={contentRef}>
                <li><Link to="" className="menu-footer__link">Products</Link></li>
                <li><Link to="" className="menu-footer__link" >Rooms</Link></li>
                <li><Link to="" className="menu-footer__link" >Inspirations</Link></li>
                <li><Link to="" className="menu-footer__link" >About us</Link></li>
                <li><Link to="" className="menu-footer__link" >Terms {"&"} Policy</Link></li>
            </ul>
        </div>
    );
}

export default MenuColumn;