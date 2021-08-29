import React from 'react';
import { connect } from 'react-redux';
import OrderConformationForm from '../../Forms/CartPage/OrderConformationForm';
import OfficeVisitOption from './OfficeVisitOption';

function CartInfoFormControl(props) {
    const {control, ...rest} = props

    const confirmClickHandler = (e) =>{
        props.history.push("cart/order-conformation")
    }
    let user = {...props.userData}
    
    const home_visit_form_init = {}
    if (props.userData){
        if (user.username){
            home_visit_form_init.fullName = `${user.username} ${user.last_name}`
        }
        else{
            home_visit_form_init.fullName = null
        }
        home_visit_form_init.address = user.customer.address
        home_visit_form_init.phone = user.customer.phone
        home_visit_form_init.email = user.email
    }
    
    switch (control){
        case 'home':
            return <OrderConformationForm {...rest} init={home_visit_form_init}/>
        case 'in office':
            return <OfficeVisitOption {...rest} type_office={control}/>
        default:
            return (
                <button
                    className="cart-info__confirm btn _circle-btn _filled-btn _green"
                    type='submit'
                    disabled={true}
                    onClick={confirmClickHandler}
                >
                    ОФОРМИТЬ ЗАКАЗ
                </button>
            )
    }
}

let mapStateToProps = (state) =>{
    return {
        userData: state.auth.user
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
const CartInfoFormControlContainer = connect(mapStateToProps, mapDispatchToProps)(CartInfoFormControl);

export default CartInfoFormControlContainer;