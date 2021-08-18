import React from 'react';
import OrderConformationForm from '../Forms/OrderConformationForm';
import OfficeVisitOption from './OfficeVisitOption';

function CartInfoFormControl(props) {
    const {control, ...rest} = props

    const confirmClickHandler = (e) =>{
        props.history.push("cart/order-conformation")
    }

    switch (control){
        case 'home':
            return <OrderConformationForm {...rest}/>
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

export default CartInfoFormControl;