import React from 'react';
import {ErrorMessage, Field, Form, Formik, useField} from 'formik';
import {Box, Card, CardContent, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from '@material-ui/core';
import * as Yup from 'yup';
function MultiStepForm(props) {
    const initialValues = {
        firstName: '',
        lastName: '',
        millionaire: false,
        money: 0,
        description: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required().min(2).max(50),
        lastName: Yup.string().required().min(2).max(50),
    })
    const sumbmitHandler = (values, formikHelpers) =>{
        return new Promise(res => {
            setTimeout(() => {
                console.log(values);
                console.log(formikHelpers);
                console.log('---');
                res();
            }, 5000);
        })
    }
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">New Account</Typography>
            
                <Formik 
                validationSchema={validationSchema}
                initialValues={initialValues} onSubmit={sumbmitHandler}>
                {
                    ({values, errors, isSubmitting, isValidating}) => (
                        <Form>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="firstName" as={TextField} label="Full Name" />
                                    <ErrorMessage name="firstName" />
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="lastName" as={TextField} label="Second Name" />
                                    <ErrorMessage name="lastName" />
                                </FormGroup>
                            </Box>
                            <button
                                className="button-block__button btn _filled-btn _green"
                                type='submit'
                                disabled={isSubmitting || isValidating}
                            >
                                ОТПРАВИТЬ
                            </button>
                            <Box marginBottom={2}>
                                <pre>{JSON.stringify(errors, null, 4)}</pre>
                                <pre>{JSON.stringify(values, null, 4)}</pre>
                            </Box>
                            
                        </Form>
                    )
                }
            </Formik>
            </CardContent>
        </Card>

    )
}
export default MultiStepForm;

export function MyCheckbox(props) {
    const [field] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value,
    })
    return <FormControlLabel control={<Checkbox {...props} {...field} />} label={props.label} />
}