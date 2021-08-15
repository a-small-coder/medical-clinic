import React from 'react';
import {Field, Form, Formik, useField} from 'formik';
import {Card, CardContent, Checkbox, FormControlLabel, MenuItem, TextField, Typography} from '@material-ui/core';

function FormikTestForms(props) {
    const initialValues = {
        fullName: '',
        initialInvestment: undefined,
        investmentRisk: [],
        commentAboutInvestmentRisk: '',
        dependents: -1,
        acceptedTermsAndConditions: false
    };
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">New Account</Typography>
            
                <Formik initialValues={initialValues} onSubmit={() =>{}}>
                {
                    ({values}) => (
                        <Form>
                            <Field name="fullname" as={TextField} lavel="Full Name"/>
                            <Field 
                                name="initialInvestment" 
                                type="number" 
                                as={TextField} 
                                lavel="InitialInvestment "
                            />

                            <MyCheckbox name="investmentRisk" value="Higth" label="High - Very Risky"/>
                            <MyCheckbox name="investmentRisk" value="Medium" label="Medium - Risky"/>
                            <MyCheckbox name="investmentRisk" value="Low" label="Low - Safe"/>

                            <Field name="commentAboutInvestmentRisk" as={TextField} multiline rows={5}/>

                            <Field name="dependents" as={TextField} select>
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Field>

                            <MyCheckbox name="acceptedTermsAndConditions" label="Accepted terms and conditions"/>

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
        value: props.value
    })
    return <FormControlLabel control={<Checkbox {...props} {...field} />} label={props.label} />
}