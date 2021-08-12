import React from 'react';
import { Field, ErrorMessage  } from 'formik';
import TextError from './TextError';

const Input = (props) =>{
    const {label, name, type, placeholder, ...rest} = props

    return (
        <div className="form-control input__block">
            <label className={"input__label "+ props.labelClassName } htmlFor={name}>{label}</label>
            <Field className={"input__field " + props.fieldClassName } id={name} name={name} type={type} placeholder={placeholder} autoComplete="off" />
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Input