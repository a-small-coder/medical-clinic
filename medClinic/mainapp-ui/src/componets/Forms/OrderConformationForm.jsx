import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';

function OrderConformationForm(props) {

    const acceptTermsCBOptions = [
        {
            key: 'Я даю согласие на ', 
            value: 'acceptTermAndConditions',
            link: {
                text: "обработку персональных данных", 
                ref: "/personal-conversations"
            }
        },
    ]

    const acceptMailingCBOptions = [
        {
            key: 'Подписаться на рассылку по e-mail ', 
            value: 'acceptMailing',
            link: null
        },
    ]

    const initialValues = {
        fullName: '',
        adress: '',
        phoneNumber: '',
        email: '',
        acceptTermAndConditions: false,
        acceptMailing: false,
    }

    const validation = Yup.object({
        fullName: Yup.string().required('Поле "Имя" обязательно для заполнения.'),
        adress: Yup.string().required('Поле "Фамилия" обязательно для заполнения.'),
        phoneNumber: Yup.string().required('Поле "Номер телефона" обязательно для заполнения.'),
        email: Yup.string()
            .email('Неверный формат почтового адреса')
            .required('Поле "Email" обязательно для заполнения.'),
        acceptTermAndConditions: Yup.boolean().isTrue("Необходимо подтвердить согласие на обработку персональных данных"),
    })

    const onSubmit = values =>{
        console.log("Form data", values)
        props.history.push('/cart/order-conformation');
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ values, errors, touched, isValid, handleBlur, handleChange}) => {
                    return (
                        <Form className="order-form" autoComplete="off">
                            <div className="order-form__form">
                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='ФИО' 
                                    name='fullName' 
                                    fieldClassName="auth_input" 
                                    placeholder="Иванов Иван Иванович"
                                    standartOnBlur={handleBlur}
                                    isError={errors.fullName && touched.fullName}
                                />

                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Адрес' 
                                    name='adress' 
                                    fieldClassName="auth_input" 
                                    placeholder="Москва, ул. Пушкина, д. 66, кв. 6"
                                    standartOnBlur={handleBlur}
                                    isError={errors.adress && touched.adress}
                                />

                                <FormikControl
                                    control='input' 
                                    type="text" 
                                    label='Номер телефона' 
                                    name='phoneNumber' 
                                    fieldClassName="auth_input" 
                                    placeholder="+7(000)-000-00-00"
                                    standartOnBlur={handleBlur}
                                    isError={errors.phoneNumber && touched.phoneNumber}
                                />

                                <FormikControl 
                                    control='input' 
                                    type="email" 
                                    label='Email' 
                                    name='email' 
                                    fieldClassName="auth_input" 
                                    placeholder="yourEmail@mail.ru"
                                    standartOnBlur={handleBlur}
                                    isError={errors.email && touched.email}
                                />

                                <FormikControl
                                    control="checkbox"
                                    name="acceptTermAndConditions"
                                    options={acceptTermsCBOptions}
                                    checkboxValue={values.acceptTermAndConditions}
                                    standartOnChange={handleChange}
                                    isError={errors.acceptTermAndConditions}
                                />

                                <FormikControl
                                    control="checkbox"
                                    name="acceptMailing"
                                    options={acceptMailingCBOptions}
                                    checkboxValue={values.acceptMailing}
                                    standartOnChange={handleChange}
                                    isError={errors.acceptMailing}
                                />

                                <button
                                    className="cart-info__confirm btn _circle-btn _filled-btn _green"
                                    type='submit'
                                    disabled={!isValid}
                                >
                                    ОФОРМИТЬ ЗАКАЗ
                                </button>

                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default OrderConformationForm;