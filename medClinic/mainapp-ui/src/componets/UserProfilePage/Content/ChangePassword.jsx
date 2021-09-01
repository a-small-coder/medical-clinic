import React from 'react';
import ChangePasswordForm from '../../Forms/ProfilePage/ChangePasswordForm';

function ChangePassword(props) {
    return (
        <div className="main-profile_conteiner">
            <div className="main-profile__title _title-standart">
                Смена пароля:
            </div>

            <div className="main-profile__content">
                <ChangePasswordForm onSubmit={() => { }}/>
            </div>
        </div>
    );
}

export default ChangePassword;