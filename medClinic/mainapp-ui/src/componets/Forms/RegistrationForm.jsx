import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import ButtonsBlock from '../Autorization/ButtonsBlock';
function RegistrationForm(){

    // const selectOptions = [
    //     {key: 'Select an option', value: ''},
    //     {key: 'option 1', value: 'sOption1'},
    //     {key: 'option 2', value: 'sOption2'},
    //     {key: 'option 3', value: 'sOption3'},
    //     {key: 'option 4', value: 'sOption4'},
    // ]

    // const radioOptions = [
    //     {key: 'radio 1', value: 'rOption1'},
    //     {key: 'radio 2', value: 'rOption2'},
    // ]

    const checkBoxOptions = [
        {key: 'Я даю согласие на обработку персональных данных', value: 'confirmUserData'},
    ]

    const initialValues = {
        // username: '',
        email: '',
        password: '',
        confirm_password: '' ,
        // radioOptions: '',
        // selectOptions: '',
        checkBoxOptions: '',
        // birthDate: null,
    }

    const validation = Yup.object({
        // username: Yup.string().required('Поле "Логин" обязательно для заполнения.'),
        email: Yup.string().email('Неверный формат почтового адреса').required('Поле "Email" обязательно для заполнения.'),
        password: Yup.string().required('Поле "Пароль" обязательно для заполнения.'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'Пароли не совпадают.').required('Подтвердите пароль.'),
        // radioOptions: Yup.string().required("rec!"),
        // selectOptions: Yup.string().required("rec!"),
        checkBoxOptions: Yup.array().required("Необходимо подтвердить согласие на обработку персональных данных"),
        // birthDate: Yup.date().required("rec!").nullable()
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
                            {/* <FormikControl control='input' type="text" label='username' name='username' 
                            fieldClassName="auth_input" placeholder="Логин"
                            /> */}
                            <FormikControl control='input' type="password" label='password' name='password' 
                            fieldClassName="auth_input" placeholder="Пароль"
                            />
                            <FormikControl control='input' type="password" label='confirm password' name='confirm_password' 
                            fieldClassName="auth_input" placeholder="Подтверждение пароля"
                            />

                            {/* <FormikControl
                                control="select"
                                label="select label"
                                name="selectOptions"
                                options={selectOptions}
                            />
                            <FormikControl
                                control="radio"
                                label="radio label"
                                name="radioOptions"
                                options={radioOptions}
                            /> */}

                            {/* <FormikControl
                                control="checkbox"
                                name="checkBoxOptions"
                                options={checkBoxOptions}
                            /> */}

                            {/* <FormikControl
                                control="date"
                                label="Pick a date"
                                name="birthData"
                            /> */}

                            </div>
                            <ButtonsBlock isFormValid={formik.isValid} wrapperClass={"authForm__button-block"} formType={"registration"}/>
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default RegistrationForm