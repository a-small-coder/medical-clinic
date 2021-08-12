import React from 'react';
import PopupItem from './PopupItem';
import { connect } from 'react-redux';
import { activateCheckBoxAC, disactiveteCheckBoxAC, showHiddenPopupAC } from '../../../redux/catalog-reducer';

const FilterPopup = (props) => {

    let popupClassName = props.filter.is_show ? "popup popup_filter _full _active" : "popup popup_filter _full";
    let category; 

    props.filter.categories.forEach(c => {
        if (c.slug === props.filter.current_category){
            category = c;
        }
    });
    if (category == null){
        category = {items: []};
    }
    let popupElements = category.items.map(
        a => <PopupItem key={a.slug} text={a.text} is_active={a.is_active } categorySlug={category.slug} itemSlug={a.slug}
        activateCheckBoxHandler={props.activateCheckBoxHandler} disactivateCheckBoxHandler={props.disactivateCheckBoxHandler}/>
    );

    const closePopupHandler = () => {
        props.showHiddenPopup("");
    }
    
    return (
        <div className={popupClassName}>
            <div className="popup__content">
                <div className="popup__body popup-filter">
                    <div className="popup-filter__header">
                        <div className="popup__close _icon-close"onClick={closePopupHandler}></div>
                        <div className="popup-filter__title">{category.title}</div>
                    </div>
                    <div className="popup-filter__items">
                    {popupElements}
                    </div>
                    <div className="popup-filter__footer">
                        <button className="popup-filter__send btn" onClick={closePopupHandler}>Показать</button>
                        <button className="popup-filter__clear btn btn_white" onClick={closePopupHandler}>Очистить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state)=>{
    return {
        filter: state.catalog.filter,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        showHiddenPopup: () => {
            dispatch(showHiddenPopupAC());
        },
        disactivateCheckBoxHandler: (categorySlug, itemSlug) =>{
            dispatch(disactiveteCheckBoxAC(categorySlug, itemSlug));
        },
        activateCheckBoxHandler: (categorySlug, itemSlug) =>{
            dispatch(activateCheckBoxAC(categorySlug, itemSlug));
        }

    }
}
const FilterPopupContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPopup);

export default FilterPopupContainer;