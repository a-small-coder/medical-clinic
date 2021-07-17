import React from 'react';
import { Link } from 'react-router-dom';
import './InWork.scss'
const InWork = () => {
    return (
        <main className="page">
            <section className="page__notFound notFound">
                <div className="notFound__container _container">
                    <div className="notFound__content">
                        <div className="notFound__icon-warning"></div>
                        <h2 className="notFound__title _title">Ссылка ведет на несуществующую страницую...</h2>
                        <div className="notFound__text">Наш сайт находится в разработке и, возможно, в скором времени на этой странице появится контент. В любом случае проверьте ссылку на правильнность</div>
                        <Link to="/" className="notFound__more btn">На Главную</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default InWork;