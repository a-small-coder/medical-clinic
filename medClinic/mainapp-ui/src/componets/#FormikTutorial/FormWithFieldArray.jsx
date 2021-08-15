import React from 'react';
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

const emptyDonation = { institution: '', persantage: '' }

function FormWithFieldArray(props) {
    const classes = useStyles();
    const initialValues = {
        firstName: '',
        donationAmount: 0,
        termsAndConditions: true,
        donations: [emptyDonation],
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required().min(2).max(50),
        donationAmount: Yup.number().required().min(10),
        termsAndConditions: Yup.boolean().oneOf([true]),
        donations: Yup.array(Yup.object({
            institution: Yup.string()
                .required("Institution is needed")
                .min(3, "Institution needs to be at least 3")
                .max(10, "Institution needs to be at bigger 10"),
            persantage: Yup.number()
                .required("Persantage is needed")
                .min(1, "Persantege needs to be at least 1")
                .max(100, "Persantege needs to be at bigger 100"),
        })
        )
        .min(1)
        .max(5)
        .test((donations) => {
            const sum = donations.reduce((acc, curr) => acc + curr.persantage, 0);
            if (sum !== 100) {
                return new Yup.ValidationError(
                    `Percentage shuld 100%, but you have ${sum}%`,
                    undefined,
                    'donations'
                )
            }
            return true
        })

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
                                        // error={errors.firstName}
                                        fullWidth
                                        name="firstName"
                                        as={TextField}
                                        label="First Name"
                                    />
                                    <ErrorMessage name="firstName" component={TextError} />
                                </Grid>
                                <Grid item>
                                    <Field
                                        fullWidth
                                        // error={errors.donationAmount}
                                        name="donationAmount"
                                        as={TextField}
                                        type="number"
                                        label="Donation Amount"
                                    />
                                    <ErrorMessage name="donationAmount" component={TextError} />
                                </Grid>

                                <FieldArray name="donations">
                                    {({ push, remove, }) => (
                                        <React.Fragment>
                                            <Grid item>
                                                <Typography variant="body2">All your donations</Typography>
                                            </Grid>

                                            {values.donations.map((_, index) => (
                                                <Grid container item key={index}>
                                                    <Grid item xs={12} sm="auto">
                                                        <Field 
                                                            fullWidth
                                                            name={`donations[${index}].institution`}
                                                            as={TextField} 
                                                            label="Institution"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm="auto">
                                                        <Field 
                                                            fullWidth
                                                            name={`donations[${index}].persantage`}
                                                            as={TextField} 
                                                            type="number" 
                                                            label="Persantage"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm="auto">
                                                        <Button 
                                                            disabled={isSubmitting}
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => remove(index)}
                                                        >
                                                            detete
                                                        </Button>
                                                    </Grid>
                                                </Grid>

                                            ))}
                                            <Grid item>
                                                {typeof errors.donations === 'string' ? (
                                                <Typography color="error">
                                                    {errors.donations}
                                                </Typography>
                                                ) : null}
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    disabled={isSubmitting}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => push(emptyDonation)}
                                                >
                                                    Add Donation
                                                </Button>
                                            </Grid>
                                        </React.Fragment>
                                    )}
                                </FieldArray>

                                <Grid item>
                                    <Field
                                        name="termsAndConditions"
                                        type="checkbox"
                                        component={CheckboxWithLabel}
                                        Label={{
                                            label: "I accept terms and conditions",
                                            className: errors.termsAndConditions ? classes.errorColor : undefined
                                        }}
                                    />
                                    <ErrorMessage name="termsAndConditions" component={TextError} />
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
                                <pre>{JSON.stringify({ values, errors }, null, 3)}</pre>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>

    )
}
export default FormWithFieldArray;