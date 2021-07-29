import { connect } from 'react-redux';
import React from 'react';
import { postApiRequest } from '../api_requests';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../redux/auth-reducer';
import LoginForm from './Forms/LoginForm';
import { Redirect } from 'react-router-dom';

const ContentBody = (props) =>{

    const onSubmitLoginForm = (formData) =>{
        console.log("Form data", formData)
        const loginUrl = "http://127.0.0.1:8000/auth/"
        const userData = JSON.stringify(formData)
        const goodResponseHandler = (response)=>{
            console.log(response)
            if (response.status === 200){
                props.setIsAuth(true)
                props.setIsLoading(false)
                props.setIsNeedRedirect(true)
                props.setUserData({
                    userId: null,
                    token: response.data.token,
                    username: ""
                })
            }           
        }
        console.log(userData)
        postApiRequest(loginUrl, userData, goodResponseHandler)
        props.setIsLoading(true)
    }
    if (props.auth.isNeedRedirect) {
        return (
        <Redirect to={'/'}/>
        )
    }
    if (props.auth.isLoading){
        return (
            <main className="page">
            <section className="page__notFound notFound">
                <div className="notFound__container _container">
                    <div className="notFound__content">
                     Loading...
                    </div>
                </div>
            </section>
        </main>
        )
    }
    return (
        <main className="page">
            <section className="page__notFound notFound">
                <div className="notFound__container _container">
                    <div className="notFound__content">
                     <LoginForm handlerSubmit={onSubmitLoginForm}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

let mapStateToProps = (state)=>{
    return {
        auth: state.auth,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setIsAuth: (isAuth) => {
            dispatch(setIsAuthAC(isAuth));
        },
        setIsLoading: (isLoading) =>{
            dispatch(setIsLoadingAC(isLoading));
        },
        setIsNeedRedirect: (isNeedRedirect) =>{
            dispatch(setIsNeedRedirectAC(isNeedRedirect))
        },
        setUserData: (userData) => {
            dispatch(setUserDataAC(userData))
        }
    }
}
const ContentBodyContainer = connect(mapStateToProps, mapDispatchToProps)(ContentBody);

export default ContentBodyContainer;

