import React, {useEffect} from 'react';
import { getBadCategory, setCurrentPageAC, setProductsCategoryAC } from '../../redux/catalog-reducer';
import CatalogFilter from './Filter/CatalogFilter';
import { connect } from 'react-redux';
import ProductsContainer from './ProductCard/ProductsContainer';
const Catalog = (props) => {

    const category = props.history.location.pathname.slice(1, props.history.location.pathname.length)
    useEffect(() =>{
        props.setCurrentPage(1)
        if (props.category !== category && props.category !== getBadCategory()){
        }
    }, [category, props.category])
    

    return (
        <section className="page__catalog catalog">
            <div className="catalog__container _container">
                <div className="catalog__body">
                    <h1 className="catalog__title _title"><span>Catalog</span></h1>
                    <div className="catalog__content">
                        <CatalogFilter setCurrentPage={props.setCurrentPage}/>
                        <ProductsContainer history={props.history} category={category}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

let mapStateToProps = (state)=>{
    return {
        category: state.catalog.products.category
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProductsCategory: (category) => {
            dispatch(setProductsCategoryAC(category));
        },
        setCurrentPage: (totalPage) =>{
            dispatch(setCurrentPageAC(totalPage));
        },
    }
}
const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;