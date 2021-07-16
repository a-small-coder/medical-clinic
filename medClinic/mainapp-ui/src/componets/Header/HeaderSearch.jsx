import React from 'react';
const HeaderSearch = () => {


    const iconSearchRef = React.useRef();
    const searchFormRef = React.useRef();

    const iconSearchClick = () => {
        if (iconSearchRef.current != null){
            console.log("click!");
            
            if (!iconSearchRef.current.closest('.search-form') && document.querySelectorAll('.search-form._active').length > 0){
                const activeForms = document.querySelectorAll('.search-form._active');
                for (var i = 0; i < activeForms.length; i++) {
                    activeForms[i].classList.remove('_active');
                }
            }
            searchFormRef.current.classList.toggle('_active');
            
        }
    };

    return(
        <div class="header__search">
            <div class="search-form" ref={searchFormRef}>
                <button data-spoller type="button" class="search-form__icon _icon-search" ref={iconSearchRef} onClick={iconSearchClick}></button>
                <form action="#" class="search-form__item">
                    <button data-spoller type="button" class="search-form__btn _icon-search"></button>
                    <input autoComplete="off" type="text" name="form[]" data-value="Поиск по сайту" class="search-form__input" />
                </form>
            </div>
        </div>
    )
}

export default HeaderSearch;