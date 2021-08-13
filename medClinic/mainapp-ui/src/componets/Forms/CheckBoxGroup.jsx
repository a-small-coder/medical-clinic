import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function CheckBoxGroup(props) {
    const {label, name, options, ...rest} = props
    return (
        <div  className="form-control checkbox-block">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({field}) => {
                        return options.map(option =>{
                            return (
                                <React.Fragment key={option.key}>
                                    <input 
                                    className="checkbox__after"
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
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