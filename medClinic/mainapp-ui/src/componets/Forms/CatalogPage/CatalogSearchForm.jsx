import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from '../BaseComponents/FormikControl';

function CatalogSearchForm(props) {

    const initialValues = {
        searchText: '',
    }

    const validation = Yup.object({})

    const onSubmit = values =>{
        console.log("Form data", values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({errors, touched, isValid, handleBlur}) => {
                    return (
                        <Form className="filter-form__item" autoComplete="off">
                            <div className="filter-form__search search-form-filter">
                                <FormikControl 
                                    control='input' 
                                    type="text"
                                    name='searchText' 
                                    fieldClassName="filter-form__input" 
                                    placeholder="Поиск по анализам"
                                    standartOnBlur={handleBlur}
                                    isError={errors.fullName && touched.fullName}
                                    wrapperClassName={""}
                                />
                                <button
                                    className="filter-form__btn _icon-search"
                                    type='submit'
                                    disabled={!isValid}
                                > 
                                </button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default CatalogSearchForm;