import { connect } from 'react-redux';
import React from 'react';
import { postApiRequest } from '../../api_requests';
import { setIsAuthAC, setIsLoadingAC, setIsNeedRedirectAC, setUserDataAC } from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import './Autorization.scss';
import '../Forms/Forms.scss';
import Login from './Login';
import Registration from './Registration';
import FormikTestForms from '../#FormikTutorial/FormikTestForms';

const AuthPageBody = (props) =>{

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
        const badResponseHandler = (err) => {
            props.setIsLoading(false)
        }
        console.log(userData)
        postApiRequest(loginUrl, userData, goodResponseHandler, badResponseHandler)
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

    let isLogin = false
    let isRegistration = false
    let isOtherForm = false
    const authType = props.history.location.pathname.split('/')[2]
    console.log(authType)
    switch (authType){
        case 'login':
            isLogin = true;
            break
        case 'registration':
            isRegistration = true;
            break
        case 'learning-formik':
            isOtherForm = true;
            break
        default:
    }
    return (
        <main className="page">
            <section className="page__base autorization-page">
                <div className="autorization-page__container _container">
                    {isLogin ? 
                    <Login handlerSubmit={onSubmitLoginForm}/>:
                    isRegistration ? 
                    <Registration/> :
                    isOtherForm ?
                    <FormikTestForms/> :
                    <Redirect to={'/bad-link'}/>
                    }
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

