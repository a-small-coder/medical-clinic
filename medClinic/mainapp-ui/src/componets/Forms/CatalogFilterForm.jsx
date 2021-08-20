import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';


function CatalogFilterForm(props) {

    const initialValues = {
        categories: [],
    }

    const validation = Yup.object({})

    const onSubmit = values =>{
        console.log("Form data", values);
        props.onSubmitForm(values);
    }

    const closePopup = () =>{
        props.onSubmitForm();
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                
                ({values, errors, resetForm, handleChange}) => {
                    const clearForm = () => {
                        props.onSubmitForm(values);
                        resetForm()
                    }
                    return (
                        <Form className="filter-form__item" autoComplete="off">
                            <div className={props.wrapperClassName}>
                                <div className="popup__content">
                                    <div className="popup__body popup-filter">
                                        <div className="popup-filter__header">
                                            <div className="popup__close _icon-close" onClick={closePopup}></div>
                                            <div className="popup-filter__title">{props.title}</div>
                                        </div>
                                            <FormikControl
                                                control="checkbox"
                                                name="categories"
                                                options={props.checkboxesData}
                                                checkboxValue={values.categories}
                                                standartOnChange={handleChange}
                                                isError={errors.categories}
                                                itemClassName={"popup-filter__item"}
                                                wrapperClassName={"popup-filter__items"} 
                                            />
                                        <div className="popup-filter__footer">
                                            <button className="popup-filter__send btn" type="submit">Показать</button>
                                            <button className="popup-filter__clear btn btn_white" type="button" onClick={clearForm}>Очистить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default CatalogFilterForm;