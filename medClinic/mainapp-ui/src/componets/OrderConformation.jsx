import React from 'react';
import { connect } from 'react-redux';
import LoadingSheme from './Other/LoadingSheme';

function OrderConformation(props) {
    return (
        <LoadingSheme page={true}/>
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
