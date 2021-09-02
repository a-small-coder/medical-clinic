import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from '../BaseComponents/FormikControl';


function CatalogFilterForm(props) {
    const initialValues = {
        categories: getInitValuesFromCheckboxData(props.checkboxesData),
    }

    const validation = Yup.object({})

    const onSubmit = (values) =>{
        console.log("Form data", values);
        props.onSubmitForm(values);
    }
    

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                
                ({values, errors, resetForm, handleChange, setValues}) => {
                    const clearForm = () => {
                        let data = {}
                        data.categories = removeCheckboxesDataByCategory(values.categories, props.category)
                        debugger
                        setValues(data)
                        props.onSubmitForm(data);
                    }
                    return (
                        <Form className="filter-form__item" autoComplete="off">
                            <div className={props.wrapperClassName}>
                                <div className="popup__content">
                                    <div className="popup__body popup-filter">
                                        <div className="popup-filter__header">
                                            <button className="popup__close _icon-close" type="submit"></button>
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

export function getInitValuesFromCheckboxData (checkboxesDataArray){
    let categoriesInit = []
    checkboxesDataArray.forEach(element => {
        if (element.chebox_value){
            categoriesInit.push(element.value)
        }
    });
    return categoriesInit
}

export function removeCheckboxesDataByCategory (checkboxesDataArray, category){
    let categoriesInit = []
    if (category){
        checkboxesDataArray.forEach((element, i) => {
            if (!(element.indexOf(category)+1)){
                categoriesInit.push(element)
            }
        });
        return categoriesInit
    }
    else{
        return checkboxesDataArray
    }
}