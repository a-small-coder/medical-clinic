import React from 'react';
import TopBlockTitle from '../SupportsComponents/TopBlockTitle';
import ProfileNavigation from './ProfileNavigation';
import '../../styles/ProfilePage/ProfilePage.scss'
import ProfileContent from './ProfileContent';

function UserProfile(props) {
    const TitleWrapperClass = "user-profile-page__top-block"
    const page_title = "Личный кабинет"

    const navigation_categories = [
        {id: 1, title: 'Общая информация', slug: 'base_information'},
        {id: 2, title: 'История заказов', slug: 'orders'},
        {id: 3, title: 'Смемнить пароль', slug: 'change_password'},
    ]

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
                            <ProfileContent/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default UserProfile;