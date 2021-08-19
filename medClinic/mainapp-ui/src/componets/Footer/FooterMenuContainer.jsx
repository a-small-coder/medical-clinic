import React from 'react';
import MenuColumn from './MenuColumn';
import { connect } from 'react-redux';
const FooterMenu = (props) => {

    const spoilerClassName = "footer__menu menu-footer _init";


    const menuColumElements = props.nav.categories.map(c => 
    <MenuColumn key={c.id} category={c}/>
    )

    return (
        <div className={spoilerClassName} >
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

    }
}
const FooterMenuContainer = connect(mapStateToProps, mapDispatchToProps)(FooterMenu);

export default FooterMenuContainer;