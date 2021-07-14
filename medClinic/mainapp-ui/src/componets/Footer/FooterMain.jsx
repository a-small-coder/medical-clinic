import React from 'react';
import { NavLink } from 'react-router-dom';
const FooterMain = () => {
    return (
        <div class="footer__main">
            <NavLink to="/home" class="footer__logo _footer-title">TedMed.</NavLink>
            <div class="footer__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                saepe ratione dolores quasi unde eligendi veritatis consequuntur at commodi libero
                excepturi corporis cumque nulla aliquid ad dolore ducimus laboriosam adipisci!
            </div>
            <div class="footer__contacts contacts-footer">
                <NavLink to="" class="contacts-footer__item _icon-location">Red Square Moscow, Russia </NavLink>
                <NavLink to="tel:+88888888888" class="contacts-footer__item _icon-phone">+8(888) 888 88 88</NavLink>
                <NavLink to="/home" target="_blank" class="contacts-footer__item" >www.tedmed.com</NavLink>
            </div>
        </div>
    );
}

export default FooterMain;