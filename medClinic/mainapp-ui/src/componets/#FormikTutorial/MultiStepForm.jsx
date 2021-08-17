import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import { Box, Button, Card, CardContent, Checkbox, CircularProgress, FormControlLabel, FormGroup, TextField, Typography, } from '@material-ui/core';
import * as Yup from 'yup';
import { CheckboxWithLabel } from 'formik-material-ui';
import TextError from '../Forms/TextError';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

function MultiStepForm(props) {
    const initialValues = {
        firstName: '',
        lastName: '',
        millionaire: false,
        money: 0,
        description: '',
    };

    const validationSchemaFirstStep = Yup.object({
        firstName: Yup.string().required().min(2).max(50),
        lastName: Yup.string().required().min(2).max(50),
    })
    const validationSchemaSecondStep = Yup.object({
        money: Yup.mixed().when('millionaire', {
            is: true,
            then: Yup.number().required().min(1_000_000),
            otherwise: Yup.number().required()
        }),
    })
    const validationSchemaThirdStep = Yup.object({
    })
    const sumbmitHandler = (values, formikHelpers) => {
        return new Promise(res => {
            setTimeout(() => {
                console.log(values);
                console.log(formikHelpers);
                console.log('---');
                formikHelpers.resetForm()
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
                    <FormikStep validationSchema={validationSchemaFirstStep}>
                        <Box marginBottom={10}>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="firstName" as={TextField} label="Full Name" />
                                    <ErrorMessage name="firstName" component={TextError} />
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="lastName" as={TextField} label="Last Name" />
                                    <ErrorMessage name="lastName" component={TextError} />
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
                                    <ErrorMessage name="millionaire" component={TextError} />
                                </FormGroup>
                            </Box>
                        </Box>
                    </FormikStep>
                    <FormikStep validationSchema={validationSchemaSecondStep}>
                        <Box marginBottom={10}>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="money" as={TextField} label="How much you have?" />
                                    <ErrorMessage name="money" component={TextError} />
                                </FormGroup>
                            </Box>
                        </Box>
                    </FormikStep>
                    <FormikStep validationSchema={validationSchemaThirdStep}>
                        <Box marginBottom={10}>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="description" as={TextField} label="description" />
                                    <ErrorMessage name="description" component={TextError} />
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

export function FormikStep(props) {
    return <>{props.children}</>
}

export function FormikStepper(props) {
    const childrenArray = React.Children.toArray(props.children)
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step]

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setStep(0)
                }
                else {
                    setStep(s => s + 1);
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    {currentChild}

                    {step > 0 ?
                        <Button
                            disabled={isSubmitting}
                            variant="contained"
                            color="primary"
                            onClick={() => setStep(s => s - 1)}
                        >
                            Назад
                        </Button> :
                        null
                    }
                    <Button
                        disabled={isSubmitting}
                        variant="contained"
                        color="primary"
                        type="submit"
                        startIcon={isSubmitting ? <CircularProgress size="1rem"/>: null}
                    >
                        {isSubmitting ? "Отправление" : isLastStep() ? "Отправить" : "Далее"}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}