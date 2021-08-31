import React from 'react';
import OrderConformationForm from '../Forms/CartPage/OrderConformationForm';

function ProfileContent(props) {
    return (
        <div className="main-profile">
            <div className="main-profile__title _title-standart">
                Base information 
            </div>

            <div className="main-profile__content">
                <OrderConformationForm init={{}} onSubmit={()=>{}}/>
            </div>
        </div>
    );
}

export default ProfileContent;