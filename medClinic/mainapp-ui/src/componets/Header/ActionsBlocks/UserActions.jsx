import React from 'react';
import { Link } from 'react-router-dom';
import LogoutAction from './LogoutAction';

function UserActions(props) {

    if (props.is_auth){
        return (
            <React.Fragment>
                <Link 
                    to="/user/profile/" 
                    className="actions-header__item actions-header__item_user _icon-user">

                </Link>
                <LogoutAction clikHandler={props.onLogoutClick}/> 
            </React.Fragment>
        )
    }
    return (
        <Link 
            to="/auth/login" 
            className="actions-header__item actions-header__item_user _icon-user">
        </Link>
    );
}

export default UserActions;