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
            {key:  ctgry.text, value:  ctgry.slug, link: null, chebox_value: ctgry.is_active}
        )
    );

    const submitPopupFormHandler = (formData) =>{
        let newCategoryItems
        let active_count = 0
        if (formData != null ){
            newCategoryItems = category.items.map(
                item => {
                    for (const category in formData.categories){
                        if (formData.categories[category] === item.slug){
                            active_count += 1
                            return {...item, is_active: true}
                        }
                    }
                    return item
                }
            )
            props.activateCheckBoxHandler(category.slug, newCategoryItems, active_count)
        }
        else {
            newCategoryItems = category.items.map(
                item => {
                    return {...item, is_active: false}
                }
            )
        }
        props.activateCheckBoxHandler(category.slug, newCategoryItems, active_count)
        props.showHiddenPopup("")
    }
    return (
        <CatalogFilterForm 
            title={category.title} 
            wrapperClassName={popupClassName} 
            onSubmitForm={submitPopupFormHandler}
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
        activateCheckBoxHandler: (categorySlug, itemSlug, active_count) =>{
            dispatch(activateCheckBoxAC(categorySlug, itemSlug, active_count));
        }

    }
}
const FilterPopupContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPopup);

export default FilterPopupContainer;