import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from '../BaseComponents/FormikControl';

function ChangePasswordForm(props) {
    const initialValues = {
        password: '',
        confirm_password: '',
    }   

    const validation = Yup.object({
        password: Yup.string()
            .required('Поле "Пароль" обязательно для заполнения.')
            .min(6, "Пароль должен содержать 6 или более символов")
            .max(25, "Пароль не может содержать более 24 символов"),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'Пароли не совпадают.').required('Подтвердите пароль.'),
     })

    const onSubmit = (values, helpers) =>{
        console.log("Form data", values)
        props.onSubmit(values)
    }
    return (
        <Formik enableReinitialize initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ errors, touched, isValid, handleBlur}) => {
                    return (
                        <Form className="change-password-form" autoComplete="off">
                            <div className="change-password__form">
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
                                    <FormikControl 
                                        control='input' 
                                        type="password" 
                                        label='Подтверждение пароля' 
                                        name='confirm_password' 
                                        fieldClassName="auth_input" 
                                        placeholder="Подтверждение пароля"
                                        standartOnBlur={handleBlur}
                                        isError={errors.confirm_password && touched.confirm_password}
                                    />

                                    <button
                                        className="change-password__confirm btn btn_white _green"
                                        type='submit'
                                        disabled={!isValid}
                                    >
                                        Сменить пароль
                                    </button>

                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default ChangePasswordForm;