import React from 'react';
import NavItem from './NavItem';

const ProductForPC = (props) => {

    let navItemsElements = props.content.map(c => 
        <NavItem key={c.slug} slug={c.slug} title={c.title} active_block={c.active_block} switchProductActiveContent={props.switchProductActiveContent}/>
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