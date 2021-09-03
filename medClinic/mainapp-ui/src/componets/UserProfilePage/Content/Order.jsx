import React, { useEffect } from 'react';
import LoadingSheme from '../../SupportsComponents/LoadingSheme';

function Order(props) {

    if ( props.l != null){
        const orderData = props.l
        console.log(orderData)
        return (
            <div>
                <div className="user-info__row">
                    <div className="user-info__row_item">
                        Контактная информация:
                    </div>
                    <div className="user-info__row_item">
                        Email: {orderData.email}
                    </div>
                </div>
                <div className="user-info__row">
                    <div className="user-info__row_item">
                        Номер заказа:
                    </div>
                    <div className="user-info__row_item">
                        {orderData.id}
                    </div>
                </div>
                <div className="user-info__row">
                    <div className="user-info__row_item">
                        Статус заказа:
                    </div>
                    <div className="user-info__row_item">
                        {orderData.status}
                    </div>
                </div>
                <div className="user-info__row">
                    <div className="user-info__row_item">
                        Сумма оплаты:
                    </div>
                    <div className="user-info__row_item">
                        {orderData.cart.total_price} p
                    </div>
                </div>
                <div className="user-info__row">
                    <div className="user-info__row_item">
                        Дата заказа:
                    </div>
                    <div className="user-info__row_item">
                        {orderData.date_create.slice(0,10)}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <LoadingSheme block={true}/>
    )
    
}

export default Order;