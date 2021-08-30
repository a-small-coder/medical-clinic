import React from 'react';
import ButtonsBlock from '../SupportsComponents/ButtonsBlock';

function CreateOrder(props) {

    if (props.needAuth){
        return (
            <div className="order-conformation-page__confirm-block confirm-block-order">
                <div className="confirm-block-order__confirm confirm-order">
                    <button
                        className="confirm-order__confirm-btn btn _circle-btn _filled-btn _green"
                        disabled={props.needAuth}
                        onClick={props.confirmClickHandler}
                    >
                        ОФОРМИТЬ ЗАКАЗ
                    </button>
                    <div className="confirm-order__error-message message-block _orange">
                        Необходио авторизоваться
                    </div>

                </div>
                <div className="confirm-block-order__autorization autorization-order">
                    <h5 className="autorization-order__title _title-standart">
                        Авторизация
                    </h5>
                    <ButtonsBlock
                        redirectToAuthPage={true}
                        wrapperClass={"autorization-order__button-block"}
                    />
                </div>
            </div>
        )
        
    }

    return (
        <div className="order-conformation-page__confirm-block confirm-block-order">
            <div className="confirm-block-order__confirm confirm-order">
                <button
                    className="confirm-order__confirm-btn btn _circle-btn _filled-btn _green"
                    disabled={props.needAuth}
                    onClick={props.confirmClickHandler}
                >
                    ОФОРМИТЬ ЗАКАЗ
                </button>
            </div>
        </div>
    );
}

export default CreateOrder;