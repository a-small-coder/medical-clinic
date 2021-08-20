import React from 'react';
import FormItems from './FilterGroupsContainer';
import FilterPopup from './FilterPopupContainer';

const CatalogFilter = () => {

    return (
        <aside className="catalog__sidebar filter">
            <div className="filter__form filter-form">
                <FormItems/>
                <FilterPopup/>

            </div>
        </aside>
    );
}

export default CatalogFilter;