import React from 'react';
import Group from './Group';
import { connect } from 'react-redux';
import { showHiddenPopupAC } from '../../../redux/catalog-reducer';
import CatalogSearchForm from '../../Forms/CatalogSearchForm';

const FormItems = (props) => {
    let groupElements = props.filter.categories.map(
        a => <Group key={a.slug} title={a.title} active_count={a.active_count} showHiddenPopup={props.showHiddenPopup} curCategory={a.slug}/>
    );
    

    return (
        <div className="filter-form__items">
            <CatalogSearchForm/>

            {groupElements}

            <div className="filter-form__item">
                <div className="filter-form__radio radio-double">
                    <label className="radio-double__btn">
                        <input type="radio" value="" name="gender" />
                        <span className="radio-double__btn-label">для мужчин</span>
                    </label>
                    <label className="radio-double__btn">
                        <input type="radio" value="" name="gender" />
                        <span className="radio-double__btn-label">для женщин</span>
                    </label>
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
        showHiddenPopup: (current_category) => {
            dispatch(showHiddenPopupAC(current_category));
        },

    }
}
const FormItemsContainer = connect(mapStateToProps, mapDispatchToProps)(FormItems);

export default FormItemsContainer;