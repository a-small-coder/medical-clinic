import React from 'react';
import LoginForm from '../Forms/LoginForm';
import TopBlockTitle from './TopBlockTitle';

const Login =(props) =>{

    
    const page_title = "Вход в личный кабинет"
    const link_under_page_title = {
        ref: "/order-results",
        text: "Посмотреть результаты по номеру заказа",
    }

    return (
        <div className="autorization-page__content">
            <TopBlockTitle title={page_title} link={link_under_page_title}/>
            <LoginForm handlerSubmit={props.submitLoginFormHandler} errorMessage={props.errorMessage}/>
        </div>
    );
}


export default Login;