import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
function LoginForm(){
    const initialValues = {
        email: '',
        password: '',
    }

    const validation = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values =>{
        console.log("Form data", values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl control='input' type="text" label='username' name='login' />
                            <FormikControl control='input' type="password" label='password' name='password' />
                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default LoginForm