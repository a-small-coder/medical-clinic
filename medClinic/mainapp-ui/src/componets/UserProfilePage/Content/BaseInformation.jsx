import React from 'react';
import BaseInformationForm from '../../Forms/ProfilePage/BaseInformationForm';

function BaseInformation(props) {
    return (
        <div className="main-profile">
            <div className="main-profile__title _title-standart">
                Общая информация
            </div>

            <div className="main-profile__content user-info">
                <BaseInformationForm init={{}} onSubmit={() => { }} />
            </div>
        </div>
    );
}

export default BaseInformation;