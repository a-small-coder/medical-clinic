import React from 'react';
import { Link } from 'react-router-dom';
const FooterMain = () => {
    return (
        <div class="footer__main">
            <Link to="/" class="footer__logo _footer-title" activeClassName="footer__logo _footer-title">TedMed.</Link>
            <div class="footer__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                saepe ratione dolores quasi unde eligendi veritatis consequuntur at commodi libero
                excepturi corporis cumque nulla aliquid ad dolore ducimus laboriosam adipisci!
            </div>
            <div class="footer__contacts contacts-footer">
                <Link to="" class="contacts-footer__item _icon-location" activeClassName="contacts-footer__item _icon-location">Red Square Moscow, Russia </Link>
                <Link to="tel:+88888888888" class="contacts-footer__item _icon-phone" activeClassName="contacts-footer__item _icon-phone">+8(888) 888 88 88</Link>
                <Link to="/" target="_blank" class="contacts-footer__item" activeClassName="contacts-footer__item">www.tedmed.com</Link>
            </div>
        </div>
    );
}

export default FooterMain;