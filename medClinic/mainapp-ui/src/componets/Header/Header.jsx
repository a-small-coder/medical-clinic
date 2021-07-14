import React from 'react';
import HeaderMain from './HeaderMain';
import HeaderActions from './HeaderActions';
import HeaderSearch from './HeaderSearch';
const Header = () => {
    return(
        <header class="header">
            <div class="header__wrapper">
                <div class="header__container _container">
                    <div class="header__body">
                        <HeaderMain/>
                        <HeaderSearch/>
                        <HeaderActions/>
                        <button class="icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;