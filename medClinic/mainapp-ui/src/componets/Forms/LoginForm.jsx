import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import './Forms.scss';
function LoginForm(props){
    const initialValues = {
        username: '',
        password: '',
    }

    const validation = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required')
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
                            <h1 className="loginForm__title _title">Login</h1>
                            <FormikControl control='input' type="text" label='username' name='username' />
                            <FormikControl control='input' type="password" label='password' name='password' />
                            <button className="loginForm__button btn" type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default LoginForm