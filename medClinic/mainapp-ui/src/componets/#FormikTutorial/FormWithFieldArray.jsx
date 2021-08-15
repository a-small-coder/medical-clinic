import React, { useState } from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { Box, Button, Card, CardContent, CircularProgress, Grid, makeStyles, TextField, Typography, } from '@material-ui/core';
import * as Yup from 'yup';
import { CheckboxWithLabel } from 'formik-material-ui';
import TextError from '../Forms/TextError';

const useStyles = makeStyles(theme => ({
    errorColor: {
        color: theme.palette.error.main,
    },
}))

function FormWithFieldArray(props) {
    const classes = useStyles();
    const initialValues = {
        firstName: '',
        donationAmount: 0,
        termsAndConditions: false,
        donations: [{ institution: '', persantage: '' }],
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required().min(2).max(50),
        donationAmount: Yup.number().required().min(10),
        termsAndConditions: Yup.boolean().oneOf([true]),
        
    })
    const sumbmitHandler = (values, formikHelpers) => {
        return new Promise(res => {
            setTimeout(() => {
                console.log(values);
                console.log(formikHelpers);
                console.log('---');
                formikHelpers.resetForm()
                res();
            }, 3000);
        })
    }
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">Field Array</Typography>

                <Formik
                    initialValues={initialValues}
                    onSubmit={sumbmitHandler}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, isSubmitting }) => (
                        <Form autoComplete="off">

                            <Grid container direction="column" spacing={2}>
                                <Grid item >
                                    <Field
                                    error={errors.firstName }
                                    fullWidth
                                        name="firstName"
                                        component={TextField}
                                        label="First Name" 
                                    />
                                        <ErrorMessage name="firstName" component={TextError}/>
                                </Grid>
                                <Grid item>
                                    <Field
                                    fullWidth
                                    error={errors.donationAmount }
                                        name="donationAmount"
                                        component={TextField}
                                        type="number"
                                        label="Donation Amount" 
                                    />
                                        <ErrorMessage name="donationAmount" component={TextError}/>
                                </Grid>

                                <FieldArray name="donations">
                                    {({ push, remove, }) => (
                                        <React.Fragment>
                                            <Grid item>
                                                <Typography variant="body2">All your donations</Typography> 
                                            </Grid>

                                            {values.donations.map((_, index) => (
                                                <Grid container item>
                                                    <Grid item>
                                                        <Field name={`donations[${index}].institution`}
                                                        component={TextField} label="Institution"
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Field name={`donations[${index}].persantage`}
                                                        component={TextField} type="number" label="Persantage"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            ))}

                                        </React.Fragment>
                                    )}
                                </FieldArray>

                                <Grid item>
                                    <Field
                                        name="termsAndConditions"
                                        type="checkbox"
                                        component={CheckboxWithLabel}
                                        Label={{ label: "I accept terms and conditions" ,
                                    className: errors.termsAndConditions? classes.errorColor: undefined}}
                                    />
                                    <ErrorMessage name="termsAndConditions" component={TextError}/>
                                </Grid>
                                <Grid item>
                                    <Button
                                        disabled={isSubmitting}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                    >
                                        {isSubmitting ? "Отправление" : "Отправить"}
                                    </Button>
                                </Grid>
                            </Grid>
                            

                            <Box marginBottom={4}>
                                <pre>{JSON.stringify({values, errors}, null, 3)}</pre>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>

    )
}
export default FormWithFieldArray;