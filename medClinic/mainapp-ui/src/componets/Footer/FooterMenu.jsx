import React from 'react';
import MenuColumn from './MenuColumn';
const FooterMenu = () => {
    return (
        <div data-spollers="768, max" class="footer__menu menu-footer">
            <MenuColumn />
            <MenuColumn />
            <MenuColumn />
        </div>
    );
}

export default FooterMenu;