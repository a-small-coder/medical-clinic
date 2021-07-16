import React from 'react';
import FormItems from './FormItems';
import FilterPopup from './FilterPopup';

const CatalogFilter = () => {


    return (
        <aside class="catalog__sidebar filter">
            <form data-message="filter" data-test action="#" class="filter__form filter-form">
                <FormItems/>
                <FilterPopup/>

            </form>
        </aside>
    );
}

export default CatalogFilter;