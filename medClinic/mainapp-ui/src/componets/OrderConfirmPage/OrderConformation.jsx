import React from 'react';
import { connect } from 'react-redux';
import '../../styles/OrderConfirmPage/OrderConfirmPage.scss';
import PriceInfoBlock from '../Cart/CartSideBar/PriceInfoBlock';
import ButtonsBlock from '../SupportsComponents/ButtonsBlock';
import TopBlockTitle from '../SupportsComponents/TopBlockTitle';

function OrderConformation(props) {

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
                        {a.analyze.title}
                    </span>
                    <span className="propduct-price-item__price _title-standart">
                        {Number(a.final_price)} p
                    </span>
                </div>
            )
            });
    }

    const confirmClickHandler = (e) =>{
        props.history.push("/user/profile/orders")
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
                        <div className="order-conformation-page__confirm-block confirm-block-order">
                            <div className="confirm-block-order__confirm confirm-order">
                                <button
                                    className="confirm-order__confirm-btn btn _circle-btn _filled-btn _green"
                                    disabled={!props.isAuth}
                                    onClick={confirmClickHandler}
                                >
                                    ОФОРМИТЬ ЗАКАЗ
                                </button>

                                {
                                    !props.isAuth ?
                                        <div className="confirm-order__error-message message-block _orange">
                                            Необходио авторизоваться
                                        </div>
                                        : null
                                }

                            </div>
                            {

                                !props.isAuth ?
                                    <div className="confirm-block-order__autorization autorization-order">
                                        <h5 className="autorization-order__title _title-standart">
                                            Авторизация
                                        </h5>
                                        <ButtonsBlock
                                            redirectToAuthPage={true}
                                            wrapperClass={"autorization-order__button-block"}
                                        />
                                    </div>
                                    : null
                            }
                        </div>
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
        order: state.order,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {}
}
const OrderConformationContainer = connect(mapStateToProps, mapDispatchToProps)(OrderConformation);

export default OrderConformationContainer; 