import React from 'react';
import { connect } from 'react-redux';
import { setCustomerAC } from '../../../redux/order-reducer';
import OrderConformationForm from '../../Forms/CartPage/OrderConformationForm';
import OfficeVisitOption from './OfficeVisitOption';

function CartInfoFormControl(props) {
    const {control, ...rest} = props

    let user = {...props.userData}
    
    const home_visit_form_init = {}
    if (user && !user.is_anon){
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

    const formSubmitHandler = (formData) => {
        const customer_data = {
            full_name: formData.fullName,
            address: formData.adress,
            phone: formData.phoneNumber,
            notification_email: formData.email
        }
        props.setCustomer(customer_data)
    }
    
    switch (control){
        case 'home':
            return <OrderConformationForm {...rest} init={home_visit_form_init} onSubmit={formSubmitHandler}/>
        case 'in office':
            return <OfficeVisitOption {...rest} type_office={control}/>
        default:
            return (
                <button
                    className="cart-info__confirm btn _circle-btn _filled-btn _green"
                    type='submit'
                    disabled={true}
                >
                    ОФОРМИТЬ ЗАКАЗ
                </button>
            )
    }
}

let mapStateToProps = (state) =>{
    return {
        userData: state.auth.user,
        customer: state.order.customer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setCustomer: (customer) => {
            dispatch(setCustomerAC(customer))
        }
    }
}
const CartInfoFormControlContainer = connect(mapStateToProps, mapDispatchToProps)(CartInfoFormControl);

export default CartInfoFormControlContainer;