import React from 'react';
import BaseInformationForm from '../../Forms/ProfilePage/BaseInformationForm';

function BaseInformation(props) {
    return (
        <div className="main-profile">
            <div className="main-profile__title">
                Общая информация:
            </div>

            <div className="main-profile__content user-info">
                <div className="user-info__row">
                    <div className="user-info__row_item"><span>Email: </span> {props.init.email}</div>
                    {/* <div className="user-info__row_item"><span>Датарегистрации: </span> 01.09.2021</div> */}
                </div>
                <BaseInformationForm init={props.init} onSubmit={() => { }} />
            </div>
        </div>
    );
}

export default BaseInformation;