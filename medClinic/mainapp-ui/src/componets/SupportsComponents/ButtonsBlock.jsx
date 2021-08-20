import React from 'react';
import { Link } from 'react-router-dom';

const ButtonsBlock = (props) =>{
    // porps:
    // formType: <string>
    // isFormValid: <bool>
    // wrapperClass: <string>
    // redirectToAuthPage : <bool>

    if (props.redirectToAuthPage){
        return (
            <div className={props.wrapperClass + " button-block"}>

                <Link to="/auth/login" className="button-block__button btn _filled-btn _green">Войти</Link>

                <Link to="/auth/registration" className="_title-standart">
                    Ещё не зарегистрированы?
                </Link>
            </div>
        )
    }
    
    const isLoginForm = props.formType === 'login'
    
    return (
        <div className={props.wrapperClass + " button-block"}>
            {
                isLoginForm ?
                    <button className="button-block__button btn _filled-btn _green" type='submit' disabled={!props.isFormValid}>Войти</button> :
                    <button className="button-block__button btn _filled-btn _blue" type='submit' disabled={!props.isFormValid}>Зарегистрироваться</button>
            }
            <div className="button-block__link-wrapper link-wrapper">
                <span className="link-wrapper__line"></span>
                <div className="link-wrapper__text">
                    {isLoginForm ? "Ещё не зарегистрированы?" : "Уже зарегистрированы?"}
                </div>
            </div>
            {
                isLoginForm ?
                    <Link to="registration"  className="button-block__button btn _filled-btn _blue">Зарегистрироваться</Link> :
                    <Link to="login"  className="button-block__button btn _filled-btn _green">Войти</Link>
            }
        </div>
    )
}

export default ButtonsBlock