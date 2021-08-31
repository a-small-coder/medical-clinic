import React from 'react';
import TopBlockTitle from '../SupportsComponents/TopBlockTitle';

function UserProfile(props) {
    const TitleWrapperClass = "user-profile-page__top-block"
    const page_title = "Личный кабинет"

    return (
        <main className="page">
            <section className="page__base user-profile-page">
                <div className="user-profile-page__container _container">
                    <TopBlockTitle
                        title={page_title}
                        wrapperClass={TitleWrapperClass}
                    />
                    <div className="user-profile-page__content">
                        hello!
                    </div>
                </div>
            </section>
        </main>
    );
}

export default UserProfile;