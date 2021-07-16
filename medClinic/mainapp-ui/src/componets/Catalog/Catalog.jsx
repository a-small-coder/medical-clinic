import React from 'react';
import CatalogFilter from './Filter/CatalogFilter';
import Product from './Products';

const Catalog = () => {


    return (
        <section class="page__catalog catalog">
            <div class="catalog__container _container">
                <div class="catalog__body">
                    <h1 class="catalog__title _title"><span>Catalog</span></h1>
                    <div class="catalog__content">
                        <CatalogFilter />
                        <Product />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;