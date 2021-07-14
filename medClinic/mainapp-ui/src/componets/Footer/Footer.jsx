import React from 'react';
import FooterSubscribe from './FooterSubscribe';
import FooterMenu from './FooterMenu';
import FooterMain from './FooterMain';
const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__container _container">
                <div class="footer__body">
                    <FooterMain/>
                    <FooterMenu/>
                    <FooterSubscribe/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;