import React from 'react';
import { Field, ErrorMessage  } from 'formik';
import TextError from './TextError';

const Input = (props) =>{
    const {label, name, ...rest} = props

    return (
        <div className="form-control input__block">
            <label className="input__label" htmlFor={name}>{label}</label>
            <Field className="input__field" id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Input