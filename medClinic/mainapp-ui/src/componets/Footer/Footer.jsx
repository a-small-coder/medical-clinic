import React from 'react';
import FooterSubscribe from './FooterSubscribe';
import FooterMenu from './FooterMenu';
import FooterMain from './FooterMain';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__body">
                    <FooterMain/>
                    <FooterMenu/>
                    <FooterSubscribe/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;