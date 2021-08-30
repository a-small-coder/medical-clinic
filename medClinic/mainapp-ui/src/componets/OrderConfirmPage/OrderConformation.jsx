import React from 'react';
import { connect } from 'react-redux';
import { setCookie } from 'react-use-cookie';
import { setCartAC } from '../../redux/header-reducer';
import '../../styles/OrderConfirmPage/OrderConfirmPage.scss';
import { createOrder } from '../../support_functions/api_requests';
import PriceInfoBlock from '../Cart/CartSideBar/PriceInfoBlock';
import TopBlockTitle from '../SupportsComponents/TopBlockTitle';
import CreateOrder from './CreateOrder';

function OrderConformation(props) {

    const saveCart = (cart_id, place) => {
        setCookie('cart_id', cart_id);
        setCookie('place_type', place);
        setCookie('make_order', true);
    };

    const TitleWrapperClass = "order-conformation-page__top-block"
    const page_title = "Подтверждение Заказа"
    const link_under_page_title = {
        ref: "/cart",
        text: "Вернуться в корзину",
    }

    let productsElements
    let result_price = 0
    let products = props.cart.products
    if (products != null){
        productsElements = products.map(
            a => {
                result_price += Number(a.final_price)
            return (
                <div key={a.id} className="info-block__propduct-price-item propduct-price-item">
                    <span className="propduct-price-item__title">
                        {a.product.title}
                    </span>
                    <span className="propduct-price-item__price _title-standart">
                        {Number(a.final_price)} p
                    </span>
                </div>
            )
            });
    }

    const confirmClickHandler = (e) =>{
        setCookie('make_order', false);
        const data = {
            cart_id: props.cart.id,
        }
        let place
        if (props.order.type_office === 'office'){
            place = 0
        }else {
            place = 1
        }
        data.place_type = place
        debugger
        createOrder(props.userToken, data, props.setCart)
        props.history.push("/user/profile/orders")
    }
    const btnActions = {
        auth: (path) => {
            let place
            debugger
            if (props.order.type_office === 'in office'){
                place = 0
            }else {
                place = 1
            }

            saveCart(props.cart.id, place)
            props.history.push(path)
        },
    }

    return (
        <main className="page">
            <section className="page__base order-conformation-page">
                <div className="order-conformation-page__container _container">
                    <TopBlockTitle
                        title={page_title}
                        link={link_under_page_title}
                        wrapperClass={TitleWrapperClass}
                    />
                    <div className="order-conformation-page__content">
                        <div className="order-conformation-page__main-block main-block-order">
                            <h5 className="main-block-order__title _title-standart">
                                Состав заказа:
                            </h5>
                            <PriceInfoBlock
                                productsElements={productsElements}
                                result_price={result_price}
                            />
                        </div>
                        <CreateOrder confirmClickHandler={confirmClickHandler} needAuth={props.is_anon} btnActions={btnActions}/>
                    </div>
                </div>
            </section>
        </main>
    );
}

let mapStateToProps = (state)=>{
    return {
        cart: state.header.cart,
        userToken: state.auth.user.token,
        isAuth: state.auth.isAuth,
        is_anon: state.auth.user.is_anon,
        order: state.order,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        setCart: (cart) =>{
            dispatch(setCartAC(cart));
        },
    }
}
const OrderConformationContainer = connect(mapStateToProps, mapDispatchToProps)(OrderConformation);

export default OrderConformationContainer; 