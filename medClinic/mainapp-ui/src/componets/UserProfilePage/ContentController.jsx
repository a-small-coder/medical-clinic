import React from 'react';
import LoadingSheme from '../SupportsComponents/LoadingSheme';
import BaseInformation from './Content/BaseInformation';
import ChangePassword from './Content/ChangePassword';
import UserOrders from './Content/UserOrders';

function ContentController(props) {
    const {control, ...rest} = props
    switch (control){
        case "base_information":{
            return <BaseInformation {...rest}/>
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