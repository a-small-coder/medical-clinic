import React from 'react';
import TopBlockTitle from '../SupportsComponents/TopBlockTitle';
import ProfileNavigation from './ProfileNavigation';
import '../../styles/ProfilePage/ProfilePage.scss'
import ContentController from './ContentController';
import { Redirect } from 'react-router-dom';
import { AUTHENTIFICATION, redirectByPageType } from '../../App';
import { connect } from 'react-redux';

function UserProfile(props) {
    const TitleWrapperClass = "user-profile-page__top-block"
    const page_title = "Личный кабинет"

    const navigation_categories = [
        {id: 1, title: 'Общая информация', slug: 'base_information'},
        {id: 2, title: 'История заказов', slug: 'orders'},
        {id: 3, title: 'Сменить пароль', slug: 'change_password'},
    ]

    const userOrders = [
        {
            id: 7,
            customer: {
                phone: null,
                address: null
            },
            cart: {
                id: 15,
                products: [
                    {
                        id: 25,
                        product: {
                            id: 15,
                            completion_time: "1 рабочий день",
                            vendor_code: "9",
                            title: "Креатинин (в крови) (Creatinine)",
                            title_min: "Креатинин в крови",
                            price: "270.00",
                            preview_description: "Описание появится позже",
                            slug: "creatinine"
                        },
                        qty: 1,
                        final_price: "270.00"
                    },
                    {
                        id: 26,
                        product: {
                            id: 14,
                            completion_time: "1 рабочий день",
                            vendor_code: "8",
                            title: "Холестерин общий (холестерин, Cholesterol total)",
                            title_min: "Холестерин общий",
                            price: "320.00",
                            preview_description: "Описание появится позже",
                            slug: "cholesterol_total"
                        },
                        qty: 1,
                        final_price: "320.00"
                    },
                    {
                        id: 27,
                        product: {
                            id: 19,
                            completion_time: "3 рабочих дня",
                            vendor_code: "13u",
                            title: "Диагностика ОРВИ",
                            title_min: "Диагностика ОРВИ",
                            price: "1490.00",
                            preview_description: "Описание появится позже",
                            slug: "unic_orvi"
                        },
                        qty: 1,
                        final_price: "1490.00"
                    },
                ],
                qty: 3,
                total_price: "2400.00",
                for_anonymous_user: false,
                owner: {
                    id: 11,
                    user: "Вася Васильевич",
                    phone: null,
                    address: null
                },
                in_order: true
            },
            place_type: "OFFICE",
            place: null,
            status: "IN_PROCESSING",
            date_create: "2021-09-01T06:20:50.191455Z",
            date_done: null
        },
    ]

    // user has not authentificate
    if (props.auth.user.is_anon){
        redirectByPageType(AUTHENTIFICATION)
    }

    // get subcomponent's control from url
    let currentPage = props.history.location.pathname.split('/')[3]
    if (currentPage === ''){
        return <Redirect to="/user/profile/base_information"/>
    }

    
    let user_info = {}
    if (props.auth.user.first_name && !props.auth.user.is_anon){
        let user = props.auth.user
        user_info = {
            firstName: user.first_name,
            secondName: user.username.split(' ')[1],
            fatherName: user.last_name,
            adress: user.customer.adress,
            phone: user.customer.phone,
            email: user.email,
        }
    }

    return (
        <main className="page">
            <section className="page__base user-profile-page">
                <div className="user-profile-page__container _container">
                    <TopBlockTitle
                        title={page_title}
                        wrapperClass={TitleWrapperClass}
                    />
                    <div className="user-profile-page__content">
                        <div className="user-profile-page__navigation navigation-profile">
                            <ProfileNavigation categories={navigation_categories}/>
                        </div>

                        <div className="user-profile-page__main-block">
                            <ContentController control={currentPage} user_info={user_info} orders={userOrders}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
let mapStateToProps = (state)=>{
    return {
        auth: state.auth,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
    }
}
const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default UserProfileContainer;