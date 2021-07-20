import React from 'react';
import CatalogFilter from './Filter/CatalogFilter';
import ProductsContainer from './ProductsContainer';
const Catalog = (props) => {



    return (
        <section className="page__catalog catalog">
            <div className="catalog__container _container">
                <div className="catalog__body">
                    <h1 className="catalog__title _title"><span>Catalog</span></h1>
                    <div className="catalog__content">
                        <CatalogFilter/>
                        <ProductsContainer history={props.history}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;