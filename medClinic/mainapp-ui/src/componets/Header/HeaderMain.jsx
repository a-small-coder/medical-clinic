import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
const HeaderMain = (props) => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [isInit, setIsinit] = useState(false);
    const spoilerClassName = "menu__list";
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
        <div className="header__main">
            <Link to="/" className="header__logo">TedMed.</Link>
            <div className="header__menu menu">
                <nav className="menu__body">
                    <ul data-spollers="768, max" className={isInit ? spoilerClassName + " _init" : spoilerClassName}>
                        <MenuItem isInit={isInit}/>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeaderMain;