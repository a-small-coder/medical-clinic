import React from 'react';
const HeaderSearch = () => {
    return(
        <div class="header__search">
            <div class="search-form">
                <button data-spoller type="button" class="search-form__icon _icon-search"></button>
                <form action="#" class="search-form__item">
                    <button data-spoller type="button" class="search-form__btn _icon-search"></button>
                    <input autocomplete="off" type="text" name="form[]" data-value="Поиск по сайту" class="search-form__input" />
                </form>
            </div>
        </div>
    )
}

export default HeaderSearch;