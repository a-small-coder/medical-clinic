import { connect } from 'react-redux';
import React from 'react';
import { postApiRequest } from '../../api_requests';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import './CartPage.scss';

const Cart = (props) =>{

    if (props.cart == null) {
        return (
        <Redirect to={'/'}/>
        )
    }
    if (props.cart.total_products === 0){
        return (
            <main className="page">
                <section className="page__base base-block">
                    <div className="base-block__container _container">
                        <div className="base-block__content empty-cart">
                            <div className="empty-cart__left-part left-part">
                                <h3 className="left-part__title _title">Ваша корзина пуста</h3>
                                <div className="left-part__text">
                                    <p>
                                    Вы еще не добавили ни одного продукта. Раздел «Анализы» поможет вам найти необходимое исследование.
                                    </p>
                                </div>
                                <button className="left-part__button btn _icon-arrow-link">ПЕРЕЙТИ В КАТАЛОГ</button>
                            </div>
                            <div className="empty-cart__right-part right-part">
                                <button className="right-part__cart-icon _icon-cart"></button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
    return (
        <main className="page">
            <section className="page__base notFound">
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
