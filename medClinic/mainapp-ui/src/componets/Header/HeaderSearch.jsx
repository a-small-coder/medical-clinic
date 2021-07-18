import React from 'react';
const HeaderSearch = (props) => {


    
    const inputSearchRef = React.useRef();
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

    const onSearchChange = () =>{
        let text = inputSearchRef.current.value;
        props.updateNewSearchText(text);
    }
    const onSearchClick = () =>{
        let text = inputSearchRef.current.value;
        if (props.search.defaultSearchText === text){
            props.updateNewSearchText("");
        }
        
    }
    return(
        <div className="header__search">
            <div className="search-form" ref={searchFormRef}>
                <button data-spoller type="button" className="search-form__icon _icon-search" ref={iconSearchRef} onClick={iconSearchClick}></button>
                <form action="#" className="search-form__item">
                    <button data-spoller type="button" className="search-form__btn _icon-search"></button>
                    <input autoComplete="off" type="text" name="form[]" className="search-form__input" 
                    value={props.search.newSearchText} onChange={onSearchChange} onClick={onSearchClick} ref={inputSearchRef}/>
                </form>
            </div>
        </div>
    )
}

export default HeaderSearch;