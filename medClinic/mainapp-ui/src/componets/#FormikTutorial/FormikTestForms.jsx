import React from 'react';
import {ErrorMessage, Field, Form, Formik, useField} from 'formik';
import {Box, Card, CardContent, Checkbox, FormControlLabel, FormGroup, InputLabel, MenuItem, TextField, Typography} from '@material-ui/core';
import * as Yup from 'yup';
function FormikTestForms(props) {
    const initialValues = {
        fullName: '',
        initialInvestment: 0,
        investmentRisk: [],
        commentAboutInvestmentRisk: '',
        dependents: -1,
        acceptedTermsAndConditions: false
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required().min(2).max(50),
        initialInvestment: Yup.number().required().min(20),
        dependents: Yup.number().required().min(0).max(5),
        acceptedTermsAndConditions: Yup.boolean().oneOf([true]),
        investmentRisk: Yup.array(Yup.string().oneOf(['High', 'Medium', 'Low'])).min(1),
        commentAboutInvestmentRisk: Yup.mixed().when('investmentRisk', {
            is: (investmentRisk) => investmentRisk.find(ir => ir=== 'High'),
            then: Yup.string().required().min(20).max(100),
            otherwise: Yup.string().min(20).max(100)
        })
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
                    ({values, errors, touched, isSubmitting, isValidating}) => (
                        <Form>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="fullName" as={TextField} label="Full Name" />
                                    <ErrorMessage name="fullName"/>
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field
                                        name="initialInvestment"
                                        type="number"
                                        as={TextField}
                                        label="Initial Investment"
                                    />
                                    <ErrorMessage name="initialInvestment"/>
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup >
                                    <InputLabel>Select the risk you want to take:</InputLabel>
                                    <MyCheckbox name="investmentRisk" value="High" label="High - Very Risky" />
                                    <MyCheckbox name="investmentRisk" value="Medium" label="Medium - Risky" />
                                    <MyCheckbox name="investmentRisk" value="Low" label="Low - Safe" />
                                </FormGroup>
                                <ErrorMessage name="investmentRisk"/>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="commentAboutInvestmentRisk" as={TextField} multiline rows={5} label="Comment About Investment Risk"/>
                                </FormGroup>
                                <ErrorMessage name="commentAboutInvestmentRisk"/>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="dependents" as={TextField} select label="dependents">
                                        <MenuItem value={-1}>Select</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Field>
                                    <ErrorMessage name="dependents"/>
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <MyCheckbox name="acceptedTermsAndConditions" label="Accepted terms and conditions" />
                                </FormGroup>
                                <ErrorMessage name="acceptedTermsAndConditions"/>
                            </Box>
                            <button className="button-block__button btn _filled-btn _green" type='submit' disabled={isSubmitting || !isValidating}>ОТПРАВИТЬ</button>
                            <pre>{JSON.stringify(errors, null, 4)}</pre>
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </Form>
                    )
                }
            </Formik>
            </CardContent>
        </Card>
    );
}

export default FormikTestForms;

export function MyCheckbox(props) {
    const [field] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value,
    })
    return <FormControlLabel control={<Checkbox {...props} {...field} />} label={props.label} />
}