import { connect } from 'react-redux';
import React from 'react';
import { postApiRequest } from '../../api_requests';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../../redux/auth-reducer';
import './Autorization.scss';
import '../Forms/Forms.scss';
import AuthFormControl from './AuthFormControl';
import { BAD_LINK, MAIN_PAGE_NAME, redirectByPageType } from '../../App';
import LoadingSheme from '../Other/LoadingSheme';

const AuthPageBody = (props) =>{

    const onSubmitLoginForm = (formData, errorMessageSetter, errorFieldName) =>{
        console.log("Form data", formData)
        const loginUrl = "http://127.0.0.1:8000/auth/"
        const userData = JSON.stringify(formData)
        const goodResponseHandler = (response)=>{
            if (response.status === 200){
                props.setIsAuth(true)
                props.setIsNeedRedirect(true)
                props.setUserData({
                    userId: null,
                    token: response.data.token,
                    username: ""
                })
            }           
        }
        const badResponseHandler = (err) => {
            if (err.response.status === 400){
                errorMessageSetter(errorFieldName, "Неверный логин или пароль")
            }
            
        }
        postApiRequest(loginUrl, userData, goodResponseHandler, badResponseHandler)
    }
    if (props.auth.isNeedRedirect || props.auth.isAuth) {
        return (
        redirectByPageType(MAIN_PAGE_NAME)
        )
    }
    if (props.auth.isLoading){
        return (
            <LoadingSheme page/>
        )
    }
    const authType = props.history.location.pathname.split('/')[2]
    return (
        <main className="page">
            <section className="page__base autorization-page">
                <div className="autorization-page__container _container">
                    <AuthFormControl 
                        control={authType}
                        submitLoginFormHandler={onSubmitLoginForm}
                        errorHandler={redirectByPageType(BAD_LINK)}
                    />
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
const AuthPageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthPageBody);

export default AuthPageContainer;

