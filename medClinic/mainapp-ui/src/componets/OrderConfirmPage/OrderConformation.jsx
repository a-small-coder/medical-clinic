import React from 'react';
import { connect } from 'react-redux';
import TopBlockTitle from '../Autorization/TopBlockTitle';
import PriceInfoBlock from '../Cart/PriceInfoBlock';
import LoadingSheme from '../Other/LoadingSheme';

function OrderConformation(props) {

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

    return (
        <main class="page">
            <section class="page__base order-conformation-page">
                <div class="order-conformation-page__container _container">
                    <div class="order-conformation-page__content">
                        <TopBlockTitle title={page_title} link={link_under_page_title}/>
                        <PriceInfoBlock productsElements={productsElements} result_price={result_price}/>
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