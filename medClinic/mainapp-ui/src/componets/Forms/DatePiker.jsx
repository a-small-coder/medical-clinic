import { Field } from 'formik';
import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePiker(props) {
    const {label, name, ...rest} = props
    return (
        <div className="form-control datepicker-block">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form
                        const {value} = field
                        return (
                            <DateView wrapperClassName={"auth__input"}
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />
                        )
                    }
                }
            </Field>
        </div>
    );
}

export default DatePiker;