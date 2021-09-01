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
        {id: 3, title: 'Смемнить пароль', slug: 'change_password'},
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
                            <ContentController control={currentPage} user_info={user_info}/>
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