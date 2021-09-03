import React from 'react';
const FooterSubscribe = () => {
    return (
        <div className="footer__subscribe subscribe">
            <div className="subscribe__title _footer-title">Stay Updated</div>
            {/* need change to form */}
            <div data-message="subscribe" data-test action="#" className="subscribe__form">
                <input autoComplete="off" type="text" name="form[]" data-error="Error" data-value="Enter your email" className="subscribe__input _req _email" />
                <button className="subscribe__button _icon-send"></button>
            </div>
        </div>
    );
}

export default FooterSubscribe;