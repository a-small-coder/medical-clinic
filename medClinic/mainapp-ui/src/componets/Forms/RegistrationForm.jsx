import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
function RegistrationForm(){
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm_password: '' 
    }

    const validation = Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Required')
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
                            <FormikControl control='input' type="text" label='username' name='username' />
                            <FormikControl control='input' type="email" label='email' name='email' />
                            <FormikControl control='input' type="password" label='password' name='password' />
                            <FormikControl control='input' type="password" label='confirm password' name='confirm_password' />
                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default RegistrationForm