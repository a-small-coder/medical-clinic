import React from 'react';
import PopupItem from './PopupItem';
import { connect } from 'react-redux';
import { activateCheckBoxAC, disactiveteCheckBoxAC, showHiddenPopupAC } from '../../../redux/catalog-reducer';
import CatalogFilterForm from '../../Forms/CatalogFilterForm';

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
        ctgry => (
            {key:  ctgry.text, value:  ctgry.slug, link: null}
        )
    );
    
    return (
        <CatalogFilterForm 
            title={category.title} 
            wrapperClassName={popupClassName} 
            showHiddenPopup={props.showHiddenPopup}
            checkboxesData={popupElements}
        />
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