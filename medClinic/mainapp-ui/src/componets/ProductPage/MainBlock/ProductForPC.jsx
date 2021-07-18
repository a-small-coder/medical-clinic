import React from 'react';
import NavItem from './NavItem';

const ProductForPC = () => {


    return (
        <nav className="menu-product__body">
            <ul data-spollers="992, max" className="menu-product__list">
                <NavItem/>
                <NavItem/>
                <NavItem/>
                <NavItem/>

            </ul>
        </nav>
    );
}

export default ProductForPC;