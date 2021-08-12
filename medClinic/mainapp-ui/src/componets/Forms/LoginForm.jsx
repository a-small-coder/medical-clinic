import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import { Link } from 'react-router-dom';
function LoginForm(props){
    const initialValues = {
        username: '',
        password: '',
    }

    const validation = Yup.object({
        username: Yup.string().required('Поле "Логин" обязательно для заполнения.'),
        password: Yup.string().required('Поле "Пароль" обязательно для заполнения.')
    })

    const onSubmit = values =>{
        props.handlerSubmit(values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form className="loginForm">
                            <div className="loginForm__form">
                                <FormikControl control='input' type="text" label='Логин' name='username'
                                    fieldClassName="auth_input" labelClassName="" placeholder="Логин"
                                />
                                <FormikControl control='input' type="password" label='Пароль' name='password'
                                    fieldClassName="auth_input" labelClassName="" placeholder="Пароль"
                                />
                                <Link className="loginForm__password-link  _text-link _icon-search">
                                    <span>Забыли пароль?</span>
                                </Link>
                                
                                <Link className="loginForm__user-manual  _text-link">
                                    <span>Руководство пользователя</span>
                                </Link>
                            </div>
                            <div className="loginForm__button-block button-block">
                            <button className="button-block__button btn _filled-btn _green" type='submit' disabled={!formik.isValid}>Войти</button>
                            <div className="button-block__link-wrapper link-wrapper">
                                <span className="link-wrapper__line"></span>
                                <div className="link-wrapper__text">Ещё не зарегистрированы?</div>
                            </div>
                            <button className="button-block__button btn _filled-btn _blue">Зарегистрироваться</button>
                        </div>
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default LoginForm