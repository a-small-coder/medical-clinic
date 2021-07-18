import React from 'react';
import { Link } from 'react-router-dom';
const FooterMain = () => {
    return (
        <div className="footer__main">
            <Link to="/" className="footer__logo _footer-title" >TedMed.</Link>
            <div className="footer__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                saepe ratione dolores quasi unde eligendi veritatis consequuntur at commodi libero
                excepturi corporis cumque nulla aliquid ad dolore ducimus laboriosam adipisci!
            </div>
            <div className="footer__contacts contacts-footer">
                <Link to="" className="contacts-footer__item _icon-location" >Red Square Moscow, Russia </Link>
                <Link to="tel:+88888888888" className="contacts-footer__item _icon-phone" >+8(888) 888 88 88</Link>
                <Link to="/" target="_blank" className="contacts-footer__item" >www.tedmed.com</Link>
            </div>
        </div>
    );
}

export default FooterMain;