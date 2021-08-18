import React from 'react';
import RegistrationForm from '../Forms/RegistrationForm';
import TopBlockTitle from './TopBlockTitle';

const Registration =(props) =>{

    const page_title = "Зарегистрироваться"
    const link_under_page_title = {
        ref: "/order-results",
        text: "Посмотреть результаты по номеру заказа",
    }

    return (
        <div className="autorization-page__content">
            <TopBlockTitle title={page_title} link={link_under_page_title}/>
            <RegistrationForm />
        </div>
    );
}


export default Registration;