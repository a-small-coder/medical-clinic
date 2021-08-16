import { Field } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import TextError from './TextError';

function CheckBoxGroup(props) {
    const {label, name, options, checkboxValue, isError, ...rest} = props

    const inputRef = useRef(null)
    const [checked, setChecked] = useState(checkboxValue)

    const CheckBoxClickHandler = (e) =>{
        props.standartOnChange(e)
        setChecked(!checked)
    }

    const [labelClass, setLabelClass] = useState("checkbox__label ")

    useEffect(() => {
        if (isError){
            setLabelClass("checkbox__label _error ")
        }
        else{
            setLabelClass("checkbox__label ")
        }
    }, [isError])
    
    return (
        <div  className="form-control checkbox-block">
            {label != null ? <label htmlFor={name}>{label}</label>: null}
            <Field name={name}>
                {
                    ({field}) => {
                        return options.map(option =>{
                            return (
                                <React.Fragment key={option.key}>
                                    <input 
                                        className="checkbox__input"
                                        type="checkbox"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={checkboxValue.box}
                                        ref={inputRef}
                                    />

                                    <label
                                        id={option.value + " label"}
                                        className={props.labelClassName != null ? labelClass + props.labelClassName : labelClass}
                                        htmlFor={option.value}
                                        onClick={CheckBoxClickHandler}
                                    >
                                        {option.key}
                                    </label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            {isError ? <TextError>{isError}</TextError> : null}
        </div>
    );
}

export default CheckBoxGroup;