import React from 'react';
import urlStart, { postApiRequest } from '../api_requests';
import LoginForm from './Forms/LoginForm';
import RegistrationForm from './Forms/RegistrationForm';
// import '../InWork/InWork.scss'

const ContentBody = (props) =>{

    const onSubmitLoginForm = (formData) =>{
        console.log("Form data", formData)
        const loginUrl = "http://127.0.0.1:8000/api/auth/login/"
        const userData = JSON.stringify(formData)
        const goodResponseHandler = (response)=>{
            console.log(response)
        }
        console.log(userData)
        postApiRequest(loginUrl, userData, goodResponseHandler)
    }

    return (
        <main className="page">
            <section className="page__notFound notFound">
                <div className="notFound__container _container">
                    <div className="notFound__content">
                     {/* <RegistrationForm/> */}
                     <LoginForm handlerSubmit={onSubmitLoginForm}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContentBody