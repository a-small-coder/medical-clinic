import React from 'react';
import LoadingSheme from '../SupportsComponents/LoadingSheme';
import BaseInformation from './Content/BaseInformation';
import ChangePassword from './Content/ChangePassword';
import Order from './Content/Order';
import UserOrders from './Content/UserOrders';

function ContentController(props) {
    const {control, user_info, ...rest} = props

    if (control.slice(0,6) === 'order-'){
        return<Order {...rest} l={control.slice(0,6)}/>
    }
    switch (control){
        case "base_information":{
            return <BaseInformation {...rest} init={user_info}/>
        }
        case "orders":{
            return <UserOrders {...rest}/>
        }
        case "change_password":{
            return <ChangePassword {...rest}/>
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