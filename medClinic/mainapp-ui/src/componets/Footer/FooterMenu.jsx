import React, { useEffect, useState } from 'react';
import MenuColumn from './MenuColumn';
const FooterMenu = () => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [isInit, setIsinit] = useState(false);
    const spoilerClassName = "footer__menu menu-footer";
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [])

    useEffect(()=>{
        if (windowWidth <= 768){
            setIsinit(true);
        }
        else {
            setIsinit(false);
        }
    }, [windowWidth]);


    return (
        <div data-spollers="768, max" className={isInit ? spoilerClassName + " _init" : spoilerClassName} >
            <MenuColumn/>
        </div>
    );
}

export default FooterMenu;