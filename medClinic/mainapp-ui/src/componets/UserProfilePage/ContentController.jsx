import React from 'react';
import LoadingSheme from '../SupportsComponents/LoadingSheme';
import BaseInformation from './Content/BaseInformation';
import ChangePassword from './Content/ChangePassword';
import Order from './Content/Order';
import UserOrders from './Content/UserOrders';

function ContentController(props) {
    const {control, user_info, ...rest} = props

    if (control.slice(0,6) === 'order-'){
        let order
        props.orders.forEach(o => {
            if (o.id == control.slice(6)){
                order = o
            }
        })
        return<Order {...rest} l={order}/>
    }
    switch (control){
        case "base_information":{
            return <BaseInformation {...rest} init={user_info} onSubmit={props.onInfoSubmit}/>
        }
        case "orders":{
            return <UserOrders {...rest}/>
        }
        case "change_password":{
            return <ChangePassword {...rest} onSubmit={props.onPasswordSubmit}/>
        }
        default:
            return (
                <div className="main-profile">
                    <LoadingSheme block={true}/>
                </div>
            );
    }

}

export default ContentController;