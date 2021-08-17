import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import { Link } from 'react-router-dom';
import ButtonsBlock from '../Autorization/ButtonsBlock';
function LoginForm(props){

    const initialValues = {
        username: '',
        password: '',
        rememberMe: false,
    }

    const checkBoxOptions = [
        {key: 'Запомнить меня', value: 'rememberMe'},
    ]

    const validation = Yup.object({
        username: Yup.string().required('Поле "Логин" обязательно для заполнения.'),
        password: Yup.string().required('Поле "Пароль" обязательно для заполнения.')
    })

    const onSubmit = (values, helpers) =>{
        props.handlerSubmit(values, helpers.setFieldError, 'password')
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ values, errors, touched, isValid, handleBlur, handleChange}) => {
                    
                    return (
                        <Form className="authForm loginForm" autoComplete="off" >
                            <div className="authForm__form">
                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Логин' 
                                    name='username'
                                    fieldClassName="auth_input"
                                    placeholder="Логин"
                                    standartOnBlur={handleBlur}
                                    isError={errors.username && touched.username}
                                />
                                <FormikControl 
                                    control='input' 
                                    type="password" 
                                    label='Пароль' 
                                    name='password' 
                                    fieldClassName="auth_input"
                                    placeholder="Пароль"
                                    standartOnBlur={handleBlur}
                                    isError={errors.password && touched.password}
                                />
                                
                                <Link 
                                    to="/restore-password" 
                                    className="authForm__password-link  _text-link _icon-search"
                                >
                                    <span>Забыли пароль?</span>
                                </Link>

                                <FormikControl
                                    control="checkbox"
                                    name="rememberMe"
                                    options={checkBoxOptions}
                                    checkboxValue={values.rememberMe}
                                    standartOnChange={handleChange}
                                    isError={errors.rememberMe}
                                />

                                <Link 
                                    to="/user-manual" 
                                    className="authForm__user-manual  _text-link"
                                >
                                    <span>Руководство пользователя</span>
                                </Link>
                            </div>
                            <ButtonsBlock 
                                isFormValid={isValid} 
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