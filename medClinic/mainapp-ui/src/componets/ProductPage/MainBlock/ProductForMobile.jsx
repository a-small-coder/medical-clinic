import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import {slideUp, slideDown} from '../../Spoiler';

const ProductForMobile = () => {

    const [spoilerActive, setSpoilerActive] = useState(true);

    const buttonClassName = "menu-product__arrow _icon-arrow-down";
    const contentClassName = "menu-product__wrapper";

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
        <nav className="menu-product__body">
            <ul className="menu-product__list _init" >
                <li className="menu-product__item">
                    <Link to="#" className="menu-product__link menu-product__link _selected">Интерпритация результатов</Link>
                    <button data-spoller type="button" 
                    class={spoilerActive ? buttonClassName + " _active" : buttonClassName}
                    onClick={() => setSpoilerActive(!spoilerActive)}></button>
                    <div class={spoilerActive ? contentClassName + " _slide-up" : contentClassName + " _slide-down"} ref={contentRef}>
                        <Description/>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default ProductForMobile;