import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsAuthAC, setIsNeedRedirectAC, setUserDataAC } from '../../../redux/auth-reducer';
import { setCartAC } from '../../../redux/header-reducer';
import UserActions from './UserActions';
const HeaderActions = (props) => {

    const logoutClickHandler = () => {
        props.setIsAuth(false)
        props.setIsNeedRedirect(false)
        props.setUserData({
            userId: null,
            token: null,
            username: ""
        })
        props.setCart({
            id: 1,
            total_products: 0,
            products: [],
        })
    }
    debugger
    return(
        <div className="header__actions actions-header">
            <Link to="/comming-soon" 
            className="actions-header__item actions-header__item_feed-back _icon-feed-back"></Link>
            <div className="actions-header__item cart-header">
                <Link to="/cart" className="cart-header__icon _icon-cart" >
                    {props.countProductsInCart > 0 ? <span>{props.countProductsInCart}</span>: ""}
                    </Link>
                <div className="cart-header__body">
                    <ul className="cart-header__list cart-list"></ul>
                </div>
            </div>
            <UserActions is_auth={!props.auth.user.is_anon} onLogoutClick={logoutClickHandler}/>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        countProductsInCart: state.header.cart.total_products,
        auth: state.auth
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setCart: (cart) =>{
            dispatch(setCartAC(cart))
        },
        setIsAuth: (isAuth) => {
            dispatch(setIsAuthAC(isAuth));
        },
        setUserData: (userData) => {
            dispatch(setUserDataAC(userData))
        },
        setIsNeedRedirect: (isNeedRedirect) =>{
            dispatch(setIsNeedRedirectAC(isNeedRedirect))
        },
    }
}
const HeaderActionsContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderActions);

export default HeaderActionsContainer;