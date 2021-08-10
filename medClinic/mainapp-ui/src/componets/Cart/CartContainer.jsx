import { connect } from 'react-redux';
import React from 'react';
import { postApiRequest } from '../../api_requests';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const Cart = (props) =>{

    if (props.cart == null) {
        return (
        <Redirect to={'/'}/>
        )
    }
    if (props.cart.total_products === 0){
        return (
            <main className="page">
            <section className="page__notFound notFound">
                <div className="notFound__container _container">
                    <div className="notFound__content">
                     Loading...
                    </div>
                </div>
            </section>
        </main>
        )
    }
    return (
        <main className="page">
            <section className="page__notFound notFound">
                <div className="notFound__container _container">
                    <div className="notFound__content">
                    </div>
                </div>
            </section>
        </main>
    )
}

let mapStateToProps = (state)=>{
    return {
        cart: state.header.cart,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setIsAuth: (isAuth) => {
            dispatch(setIsAuthAC(isAuth));
        },
        setIsLoading: (isLoading) =>{
            dispatch(setIsLoadingAC(isLoading));
        },
        setIsNeedRedirect: (isNeedRedirect) =>{
            dispatch(setIsNeedRedirectAC(isNeedRedirect))
        },
        setUserData: (userData) => {
            dispatch(setUserDataAC(userData))
        }
    }
}
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
