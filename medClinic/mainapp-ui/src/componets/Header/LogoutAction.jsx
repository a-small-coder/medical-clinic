import React from 'react';

function LogoutAction(props) {

    const onButtonClick = () =>{
        props.clikHandler()
    }

    return (
        <button onClick={onButtonClick} 
        className="actions-header__item actions-header__item_user _icon-exit">

        </button>
    );
}

export default LogoutAction;