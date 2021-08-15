import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Card, CardContent, Typography} from '@material-ui/core';

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
                            <Field name="fullname"/>
                            <Field name="initialInvestment" type="number"/>

                            <Field name="investmentRisk" value="Higth" type="checkbox"/>
                            <Field name="investmentRisk" value="Medium" type="checkbox"/>
                            <Field name="investmentRisk" value="Low" type="checkbox"/>

                            <Field name="commentAboutInvestmentRisk" as="textarea"/>

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