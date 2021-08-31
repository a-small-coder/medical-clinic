import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import { getInitValuesFromCheckboxData } from '../CatalogPage/CatalogFilterForm';
import FormikControl from '../BaseComponents/FormikControl';

function BaseInformationForm(props) {

    const checkBoxOptions = [
        {key: 'Подписаться на рассылку', value: 'confirmSending', chebox_value: true,},
    ]
    const initialValues = {
        firstName: props.init.firstName != null? props.init.firstName : '',
        secondName: props.init.secondName != null? props.init.secondName : '',
        fatherName: props.init.fatherName != null? props.init.fatherName : '',
        adress: props.init.adress != null? props.init.adress : '',
        phoneNumber: props.init.phone != null? props.init.phone : '',
        confirmSending: getInitValuesFromCheckboxData(checkBoxOptions),
    }

    const validation = Yup.object({ })

    const onSubmit = (values, helpers) =>{
        values.confirmSending = values.confirmSending.length > 0
        console.log("Form data", values)
        props.onSubmit(values)
        values.confirmSending=getInitValuesFromCheckboxData(checkBoxOptions)
        helpers.resetForm()
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ values, errors, touched, isValid, handleBlur, handleChange, fo}) => {
                    return (
                        <Form className="user-info-form" autoComplete="off">
                            <div className="user-info__form">
                                <div className="user-info__row">
                                    <FormikControl 
                                        control='input' 
                                        type="text" 
                                        label='Фамилия'
                                        alwaysShowLabel={true} 
                                        name='firstName' 
                                        fieldClassName="auth_input" 
                                        placeholder=""
                                        standartOnBlur={handleBlur}
                                        isError={errors.firstName && touched.firstName}
                                    />
                                    <FormikControl 
                                        control='input' 
                                        type="text" 
                                        label='Имя'
                                        alwaysShowLabel={true} 
                                        name='secondName' 
                                        fieldClassName="auth_input" 
                                        placeholder=""
                                        standartOnBlur={handleBlur}
                                        isError={errors.secondName && touched.secondName}
                                    />
                                </div>
                                
                                <div className="user-info__row _one-el">
                                    <FormikControl 
                                        control='input' 
                                        type="text" 
                                        label='Отчество'
                                        alwaysShowLabel={true} 
                                        name='fatherName' 
                                        fieldClassName="auth_input" 
                                        placeholder=""
                                        standartOnBlur={handleBlur}
                                        isError={errors.fatherName && touched.fatherName}
                                    />

                                </div>
                                
                                <div className="user-info__row">
                                    <FormikControl
                                        control='input'
                                        type="text"
                                        label='Адрес'
                                        alwaysShowLabel={true}
                                        name='adress'
                                        fieldClassName="auth_input"
                                        placeholder=""
                                        standartOnBlur={handleBlur}
                                        isError={errors.adress && touched.adress}
                                    />

                                    <FormikControl
                                        control='input' 
                                        type="text" 
                                        label='Номер телефона'
                                        alwaysShowLabel={true} 
                                        name='phoneNumber' 
                                        fieldClassName="auth_input" 
                                        placeholder=""
                                        standartOnBlur={handleBlur}
                                        isError={errors.phoneNumber && touched.phoneNumber}
                                    />
                                </div>

                                <div className="user-info__row">
                                    <FormikControl
                                        control="checkbox"
                                        name="confirmSending"
                                        options={checkBoxOptions}
                                        checkboxValue={values.confirmSending}
                                        standartOnChange={handleChange}
                                        isError={errors.confirmSending}
                                        wrapperClassName={"form-control checkbox-block"}
                                    />

                                    <button
                                        className="user-info__confirm btn btn_white _green"
                                        type='submit'
                                        disabled={!isValid}
                                    >
                                        Изменить
                                    </button>
                                </div>

                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default BaseInformationForm;