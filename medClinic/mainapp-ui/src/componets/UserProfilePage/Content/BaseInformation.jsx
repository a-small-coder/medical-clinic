import React from 'react';
import OrderConformationForm from '../../Forms/CartPage/OrderConformationForm';

function BaseInformation(props) {
    return (
        <div className="main-profile">
            <div className="main-profile__title _title-standart">
                Общая информация
            </div>

            <div className="main-profile__content">
                <OrderConformationForm init={{}} onSubmit={() => { }} />
            </div>
        </div>
    );
}

export default BaseInformation;