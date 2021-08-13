import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import { Link } from 'react-router-dom';
import ButtonsBlock from '../Autorization/ButtonsBlock';
function LoginForm(props){

    const initialValues = {
        username: '',
        password: ''
    }

    const validation = Yup.object({
        username: Yup.string().required('Поле "Логин" обязательно для заполнения.'),
        password: Yup.string().required('Поле "Пароль" обязательно для заполнения.'),
    })

    const onSubmit = values =>{
        props.handlerSubmit(values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form className="authForm loginForm">
                            <div className="authForm__form">
                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Логин' 
                                    name='username'
                                    fieldClassName="auth_input" 
                                    placeholder="Логин"
                                />
                                <FormikControl 
                                    control='input' 
                                    type="password" 
                                    label='Пароль' 
                                    name='password' 
                                    fieldClassName="auth_input" 
                                    placeholder="Пароль"
                                />
                                <Link 
                                    to="/restore-password" 
                                    className="authForm__password-link  _text-link _icon-search"
                                >
                                    <span>Забыли пароль?</span>
                                </Link>

                                <Link 
                                    to="/user-manual" 
                                    className="authForm__user-manual  _text-link"
                                >
                                    <span>Руководство пользователя</span>
                                </Link>
                            </div>
                            <ButtonsBlock 
                                isFormValid={formik.isValid} 
                                wrapperClass={"authForm__button-block"} 
                                formType={"login"}
                            />
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default LoginForm