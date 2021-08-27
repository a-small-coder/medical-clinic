import React from 'react';
import NavItem from './NavItem';

const ProductForPC = (props) => {
    let active_category = props.active_category
    let navItemsElements = props.categoriesElements.map(c => 
        <NavItem key={c.id}
            title={c.title} 
            category={c.category}
            active_block={active_category === c.category} 
            switchActiveCategory={props.switchActiveContentCategory}
        />
    )

    return (
        <nav className="menu-product__body">
            <ul data-spollers="992, max" className="menu-product__list">
                {navItemsElements}

            </ul>
        </nav>
    );
}

export default ProductForPC;