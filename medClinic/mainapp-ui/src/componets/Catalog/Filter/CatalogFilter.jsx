import React from 'react';
import FormItems from './FormItems';
import FilterPopup from './FilterPopupContainer';

const CatalogFilter = () => {

    return (
        <aside className="catalog__sidebar filter">
            <form data-message="filter" data-test action="#" className="filter__form filter-form">
                <FormItems/>
                <FilterPopup/>

            </form>
        </aside>
    );
}

export default CatalogFilter;