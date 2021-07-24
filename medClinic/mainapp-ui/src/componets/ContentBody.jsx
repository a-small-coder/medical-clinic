import React from 'react';
import LoginForm from './Forms/LoginForm';
// import '../InWork/InWork.scss'

const ContentBody = (props) =>{

    return (
        <main className="page">
            <section className="page__notFound notFound">
                <div className="notFound__container _container">
                    <div className="notFound__content" style={{"background-color": "blue"}}>
                       <LoginForm/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContentBody