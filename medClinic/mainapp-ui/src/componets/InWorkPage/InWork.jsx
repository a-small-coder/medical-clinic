import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/InWorkPage/InWork.scss';
const InWork = () => {
    return (
        <main className="page">
            <section className="page__base base-block">
                <div className="base-block__container _container">
                    <div className="base-block__content notFound">
                        <div className="notFound__icon-warning"></div>
                        <h2 className="notFound__title _title">Что-то пошло не так и мы не можем загрузить страницу по этой ссылке...</h2>
                        <div className="notFound__text">Наш сайт находится в разработке и, возможно, в скором времени на этой странице появится контент. В любом случае проверьте ссылку на правильнность и вернитесь через некоторое время</div>
                        <Link to="/" className="notFound__more btn">На Главную</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default InWork;