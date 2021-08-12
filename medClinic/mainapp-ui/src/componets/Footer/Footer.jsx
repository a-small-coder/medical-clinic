import React from 'react';
import FooterSubscribe from './FooterSubscribe';
import FooterMain from './FooterMain';
import FooterMenuContainer from './FooterMenuContainer';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__body">
                    <FooterMain/>
                    <FooterMenuContainer/>
                    <FooterSubscribe/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;