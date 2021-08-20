import React from 'react';
import FooterMain from './MainBlock/FooterMain'
import FooterMenuContainer from './Menu/FooterMenuContainer'
import FooterSubscribe from './Menu/FooterSubscribe';
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