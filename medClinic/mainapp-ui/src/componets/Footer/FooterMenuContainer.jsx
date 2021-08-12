import React, { useEffect, useState } from 'react';
import MenuColumn from './MenuColumn';
import { connect } from 'react-redux';
import {disactiveteSpoilerAC, activateSpoilerAC, switchSpoilerModAC} from '../../redux/footer-reducer'
const FooterMenu = (props) => {

    const [windowWidth, setWindowWidth] = useState(0);
    const spoilerClassName = "footer__menu menu-footer";
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

    const menuColumElements = props.nav.categories.map(c => 
    <MenuColumn key={c.id} category={c} disactivateSpoiler={props.disactivateSpoiler} activateSpoiler={props.activateSpoiler} isSpoilerInit={props.nav.initSpoiler}/>
    )

    return (
        <div data-spollers="768, max" className={props.nav.initSpoiler ? spoilerClassName + " _init" : spoilerClassName} >
            {menuColumElements}
        </div>
    );
}

let mapStateToProps = (state)=>{
    return {
        nav: state.footer.nav,
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
const FooterMenuContainer = connect(mapStateToProps, mapDispatchToProps)(FooterMenu);

export default FooterMenuContainer;