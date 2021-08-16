import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../Forms/RegistrationForm';

const Registration =(props) =>{
    return (
        <div className="autorization-page__content">
            <div className="autorization-page__top-block">
                <h3 className="autorization-page__title _title">Зарегистрироваться</h3>
                <Link to="/order-results" className="autorization-page__order-rezults _text-link">
                    Посмотреть результаты по номеру заказа
                </Link>
            </div>
            {/* <LoginForm handlerSubmit={onSubmitLoginForm} /> */}
            <RegistrationForm />
        </div>
    );
}


export default Registration;