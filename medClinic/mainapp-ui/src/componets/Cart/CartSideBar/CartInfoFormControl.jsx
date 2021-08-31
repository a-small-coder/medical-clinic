import React from 'react';
import { connect } from 'react-redux';
import { setCustomerAC } from '../../../redux/order-reducer';
import OrderConformationForm from '../../Forms/CartPage/OrderConformationForm';
import OfficeVisitOption from './OfficeVisitOption';

function CartInfoFormControl(props) {
    const {control, ...rest} = props

    let user = {...props.userData}
    
    const home_visit_form_init = getCustomerData(user)

    const formSubmitHandler = (formData) => {
        const customer_data = {
            fullName: formData.fullName,
            address: formData.adress,
            phone: formData.phoneNumber,
            email: formData.email
        }
        props.setCustomer(customer_data)
        props.history.push('/cart/order-conformation');
    }
    const confirmClickHandler= () => {
        props.setCustomer(getCustomerData(user))
        props.history.push("/cart/order-conformation")
    }
    
    switch (control){
        case 'home':
            return <OrderConformationForm {...rest} init={home_visit_form_init} onSubmit={formSubmitHandler}/>
        case 'in office':
            return <OfficeVisitOption {...rest} type_office={control} onButtonClick={confirmClickHandler}/>
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

export function getCustomerData(user) {
    const customer = {}
    if (user && !user.is_anon){
        if (user.username){
            customer.fullName = `${user.username} ${user.last_name}`
        }
        else{
            customer.fullName = null
        }
        customer.address = user.customer.address
        customer.phone = user.customer.phone
        customer.email = user.email
    }
    return customer
}