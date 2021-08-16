import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import ButtonsBlock from '../Autorization/ButtonsBlock';
function RegistrationForm(){
    const checkBoxOptions = [
        {key: 'Я даю согласие на обработку персональных данных', value: 'confirmUserData'},
    ]

    const initialValues = {
        email: '',
        password: '',
        confirm_password: '' ,
        checkBoxOptions: '',
    }

    const validation = Yup.object({
        email: Yup.string().email('Неверный формат почтового адреса').required('Поле "Email" обязательно для заполнения.'),
        password: Yup.string().required('Поле "Пароль" обязательно для заполнения.'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'Пароли не совпадают.').required('Подтвердите пароль.'),
        checkBoxOptions: Yup.array().required("Необходимо подтвердить согласие на обработку персональных данных"),
    })

    const onSubmit = values =>{
        console.log("Form data", values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form className="authForm registerForm">
                            <div className="authForm__form">
                            <FormikControl control='input' type="email" label='email' name='email' 
                            fieldClassName="auth_input" placeholder="Email"
                            />
                            <FormikControl control='input' type="password" label='password' name='password' 
                            fieldClassName="auth_input" placeholder="Пароль"
                            />
                            <FormikControl control='input' type="password" label='confirm password' name='confirm_password' 
                            fieldClassName="auth_input" placeholder="Подтверждение пароля"
                            />

                            </div>
                            <ButtonsBlock isFormValid={formik.isValid} wrapperClass={"authForm__button-block"} formType={"registration"}/>
                        </Form>
                        // <pre>{JSON.stringify({ values, errors, isValid, touched}, null, 3)}</pre>
                    )
                }
            }
        </Formik>
    )

}

export default RegistrationForm