import {disactiveteSpoilerAC, activateSpoilerAC, switchSpoilerModAC} from '../../redux/header-reducer'
import {connect} from 'react-redux';
import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
const HeaderMain = (props) => {

    // props:
    // nav
    // disactivateSpoiler()
    // activateSpoiler()
    // switchSpoilerMod()

    const [windowWidth, setWindowWidth] = useState(0);
    const spoilerClassName = "menu__list";
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [])

    useEffect(()=>{
        if (windowWidth <= 768){
            props.switchSpoilerMod(true);
        }
        else {
            props.switchSpoilerMod(false);
        }
    }, [windowWidth]);

    const menuItemElements = props.nav.categories.map(c => 
        <MenuItem key={c.id} category={c} disactivateSpoiler={props.disactivateSpoiler} activateSpoiler={props.activateSpoiler} isSpoilerInit={props.nav.initSpoiler}/>
    )

    return (
        <div className="header__main">
            <Link to={"/"} className="header__logo">TedMed.</Link>
            <div className="header__menu menu">
                <nav className="menu__body">
                    <ul data-spollers="768, max" className={props.nav.initSpoiler ? spoilerClassName + " _init" : spoilerClassName}>
                        {menuItemElements}
                    </ul>
                </nav>
            </div>
        </div>
    );
}


let mapStateToProps = (state)=>{
    return {
        nav: state.header.nav,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        disactivateSpoiler: (id) => {
            dispatch(disactiveteSpoilerAC(id));
        },
        activateSpoiler: (id) => {
            dispatch(activateSpoilerAC(id));
        },
        switchSpoilerMod: (mode) =>{
            dispatch(switchSpoilerModAC(mode));
        }

    }
}

const HeaderMainContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderMain);

export default HeaderMainContainer;