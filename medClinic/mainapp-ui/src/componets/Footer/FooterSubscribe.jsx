import React from 'react';
const FooterSubscribe = () => {
    return (
        <div class="footer__subscribe subscribe">
            <div class="subscribe__title _footer-title">Stay Updated</div>
            <form data-message="subscribe" data-test action="#" class="subscribe__form">
                <input autocomplete="off" type="text" name="form[]" data-error="Error" data-value="Enter your email" class="subscribe__input _req _email" />
                <button class="subscribe__button _icon-send"></button>
            </form>
        </div>
    );
}

export default FooterSubscribe;