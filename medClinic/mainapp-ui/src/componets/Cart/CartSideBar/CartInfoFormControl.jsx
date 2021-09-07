import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCookie } from 'react-use-cookie';
import { setCustomerAC } from '../../../redux/order-reducer';
import OrderConformationForm from '../../Forms/CartPage/OrderConformationForm';
import OfficeVisitOption from './OfficeVisitOption';

function CartInfoFormControl(props) {
    const {control, ...rest} = props

    const [office_addres, setOfficeAddres] = useState('Палата №6 (ул. Лечебная)')

    let user = {...props.userData}
    
    const home_visit_form_init = getCustomerData(user)

    const setCustomerData = (customer, place_type=0) => {
        setCookie('customer', customer);
        setCookie('place', customer.address);
        setCookie('place_type', place_type) // 1 - in user home, 0 - in office
        props.setCustomer(customer)
    }

    const formSubmitHandler = (formData) => {
        const customer_data = {
            fullName: formData.fullName,
            address: formData.adress,
            phone: formData.phoneNumber,
            email: formData.email
        }
        setCustomerData(customer_data, 1)
        props.history.push('/cart/order-conformation');
    }
    const confirmClickHandler= () => {
        const customer_data = getCustomerData(user)
        customer_data.address = office_addres
        setCustomerData(customer_data, 0)
        props.history.push("/cart/order-conformation")
    }
    
    switch (control){
        case 'home':
            return <OrderConformationForm {...rest} init={home_visit_form_init} onSubmit={formSubmitHandler}/>
        case 'in office':
            return <OfficeVisitOption {...rest} type_office={control} onButtonClick={confirmClickHandler} office_address={office_addres}/>
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
        if (user.first_name){
            customer.fullName = `${user.last_name} ${user.first_name} ${user.father_name}`
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