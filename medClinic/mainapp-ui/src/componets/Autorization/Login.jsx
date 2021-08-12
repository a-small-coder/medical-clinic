import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Forms/LoginForm';

const Login =(props) =>{


    return (
        <div className="autorization-page__content">
            <div className="autorization-page__top-block">
                <h3 className="autorization-page__title _title">Вход в личный кабинет</h3>
                <Link to="order-results" className="autorization-page__order-rezults _text-link">
                    Посмотреть результаты по номеру заказа
                </Link>
            </div>
            <LoginForm handlerSubmit={props.handlerSubmit} />
        </div>
    );
}


export default Login;