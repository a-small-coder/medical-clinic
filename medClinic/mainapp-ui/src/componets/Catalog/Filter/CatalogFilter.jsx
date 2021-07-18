import React from 'react';
import FormItems from './FormItems';
import FilterPopup from './FilterPopup';

const CatalogFilter = (props) => {

    const groupItems = props.groups.items;
    const activeCategoryItems = groupItems[props.groups.active_category_index];
    return (
        <aside className="catalog__sidebar filter">
            <form data-message="filter" data-test action="#" className="filter__form filter-form">
                <FormItems groupItems={groupItems}/>
                <FilterPopup items={activeCategoryItems}/>

            </form>
        </aside>
    );
}

export default CatalogFilter;