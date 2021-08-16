import React, {useEffect, useState } from 'react';
import { Field, ErrorMessage  } from 'formik';
import TextError from './TextError';

const Input = (props) =>{
    const {label, name, type, placeholder, standartOnBlur, isError, ...rest} = props

    const [labelClass, setLabelClass] = useState("input__label ")
    const [inputClass, setInputClass] = useState("input__field ")
    const [inputPlaceholder, setInputPlaceholder] = useState(placeholder)

    useEffect(() => {
        if (isError){
            setInputClass("input__field _error ")
        }
        else{
            setInputClass("input__field ")
        }
    }, [isError])

    const focusHandler = (e) =>{
        setInputPlaceholder("");
        setLabelClass("input__label _active ")
    }
    const blurHandler = (e) =>{
        props.standartOnBlur(e)
        setInputPlaceholder(placeholder)
        setLabelClass("input__label ")
    }
    return (
        <div className="form-control input__block">
            <label 
                className={props.labelClassName != null ? labelClass + props.labelClassName : labelClass} 
                htmlFor={name}
            >
                {label}
            </label>
            <Field 
                className={props.fieldClassName !== null ? inputClass + props.fieldClassName : inputClass}
                id={name} 
                name={name} 
                type={type}
                placeholder={inputPlaceholder}
                onFocus={focusHandler}
                onBlur={blurHandler}
            />
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Input