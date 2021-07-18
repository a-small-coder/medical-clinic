import React from 'react';
import {updateNewSearchTextAC} from '../../redux/header-reducer'
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
        let action = updateNewSearchTextAC(text)
        props.dispatch(action);
    }
    const onSearchClick = () =>{
        
        let text = inputSearchRef.current.value;
        console.log(inputSearchRef.current);
        console.log(props.search.defaultSearchText === text);
        if (props.search.defaultSearchText === text){
            let action = updateNewSearchTextAC("")
            props.dispatch(action);
        }
        
    }

    // React.useEffect(() =>{
    //     inputSearchRef.current.value = props.search.defaultSearchText;
    // }, []);

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