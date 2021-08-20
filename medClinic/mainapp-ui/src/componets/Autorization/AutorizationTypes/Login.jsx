import React from 'react';
import LoginForm from '../../Forms/AuthPage/LoginForm';
import TopBlockTitle from '../../SupportsComponents/TopBlockTitle';

const Login =(props) =>{

    const TitleWrapperClass = "autorization-page__top-block"
    const page_title = "Вход в личный кабинет"
    const link_under_page_title = {
        ref: "/order-results",
        text: "Посмотреть результаты по номеру заказа",
    }

    return (
        <div className="autorization-page__content">
             <TopBlockTitle title={page_title} link={link_under_page_title} wrapperClass={TitleWrapperClass}/>
            <LoginForm handlerSubmit={props.submitLoginFormHandler} errorMessage={props.errorMessage}/>
        </div>
    );
}


export default Login;