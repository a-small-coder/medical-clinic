import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import urlStart,{ getApiResponse } from '../../api_requests';
import { setCartAC } from '../../redux/header-reducer';
const HeaderActions = (props) => {

    // useEffect(()=>{
    //     const cartApiUrl = `${urlStart}cart/current_customer_cart/`
    //     const badResponseHandler =()=>{
    //         console.log('we are in shit')
    //     }
    //     getApiResponse(cartApiUrl, props.setCart, badResponseHandler )
    // }, [props.countProductsInCart])

    return(
        <div className="header__actions actions-header">
            <Link to="" 
            className="actions-header__item actions-header__item_feed-back _icon-feed-back"></Link>
            <div className="actions-header__item cart-header">
                <Link to="" className="cart-header__icon _icon-cart" >
                    {props.countProductsInCart > 0 ? <span>{props.countProductsInCart}</span>: ""}
                    </Link>
                <div className="cart-header__body">
                    <ul className="cart-header__list cart-list"></ul>
                </div>
            </div>
            <Link to="" 
            className="actions-header__item actions-header__item_user _icon-user"></Link>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return {
        countProductsInCart: state.header.cart.total_products
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setCart: (cart) =>{
            dispatch(setCartAC(cart))
        }
    }
}
const HeaderActionsContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderActions);

export default HeaderActionsContainer;