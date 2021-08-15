import React, { useState } from 'react';
import {ErrorMessage, Field, Form, Formik, useField} from 'formik';
import {Box, Button, Card, CardContent, Checkbox, FormControlLabel, FormGroup, TextField, Typography, } from '@material-ui/core';
import * as Yup from 'yup';
import {CheckboxWithLabel} from 'formik-material-ui';
function MultiStepForm(props) {
    const initialValues = {
        firstName: '',
        lastName: '',
        millionaire: false,
        money: 0,
        description: '',
    };

    const validationSchemaFirstStep = Yup.object({
        money: Yup.mixed().when('millionaire', {
            is: true,
            then: Yup.number().required().min(1_000_000),
            otherwise: Yup.number().required()
        }),
    })
    const validationSchemaSecondStep = Yup.object({
        firstName: Yup.string().required().min(2).max(50),
        lastName: Yup.string().required().min(2).max(50),
        money: Yup.mixed().when('millionaire', {
            is: true,
            then: Yup.number().required().min(1_000_000),
            otherwise: Yup.number().required()
        }),
    })
    const validationSchemaThirdStep = Yup.object({
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
            
                <FormikStepper
                initialValues={initialValues}
                onSubmit={sumbmitHandler}
                >
                    <FormikStep >
                        <Box marginBottom={10}>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="firstName" as={TextField} label="Full Name" />
                                    <ErrorMessage name="firstName" />
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="lastName" as={TextField} label="Last Name" />
                                    <ErrorMessage name="lastName" />
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field
                                        name="millionaire"
                                        type="checkbox"
                                        component={CheckboxWithLabel}
                                        Label={{ label: "I'm a millionaire" }}
                                    />
                                    <ErrorMessage name="millionaire" />
                                </FormGroup>
                            </Box>
                        </Box>
                    </FormikStep>
                    <FormikStep validationSchema={validationSchemaFirstStep}>
                        <Box marginBottom={10}>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="money" as={TextField} label="How much you have?" />
                                    <ErrorMessage name="money" />
                                </FormGroup>
                            </Box>
                        </Box>
                    </FormikStep>
                    <FormikStep>
                        <Box marginBottom={10}>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="description" as={TextField} label="description" />
                                    <ErrorMessage name="description" />
                                </FormGroup>
                            </Box>
                        </Box>
                    </FormikStep>
            </FormikStepper>
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

export function FormikStep(props){
    return <>{props.children}</>
}

export function FormikStepper(props) {
    const childrenArray = React.Children.toArray(props.children)
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step]

    function isLastStep(){
        return step === childrenArray.length -1;
    }

    return (
        <Formik {...props} 
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async (values, helpers) => {
            if (isLastStep()){
                await props.onSubmit(values, helpers);
            }
            else{
                setStep(s=> s+1);
            }
        }}
        >
            <Form autoComplete="off">
            {currentChild}

                {step > 0 ?
                    <Button onClick={() => setStep(s => s - 1)}>Назад</Button> :
                    null
                }
                <Button type="submit">{isLastStep() ? "Отправить" : "Далее"}</Button>
            </Form>
        </Formik>
    );
}