import { ErrorMessage, Field } from 'formik';
import React, { useRef, useState } from 'react';
import TextError from './TextError';

function CheckBoxGroup(props) {
    const {label, name, options, checkboxValue, isError, ...rest} = props

    const inputRef = useRef(null)
    const [checked, setChecked] = useState(checkboxValue)

    const CheckBoxClickHandler = (e) =>{
        props.setFieldValue(name, !checked)
        setChecked(!checked)
    }
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
                                    className="checkbox__label"
                                    htmlFor={option.value}
                                    onClick={CheckBoxClickHandler}
                                    >
                                        {option.key}
                                        <span>{checked ? 'true' : 'false'}</span>
                                    </label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default CheckBoxGroup;