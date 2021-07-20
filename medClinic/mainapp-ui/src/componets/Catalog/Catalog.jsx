import React, {useEffect} from 'react';
import { getBadCategory, setProductsCategoryAC } from '../../redux/catalog-reducer';
import CatalogFilter from './Filter/CatalogFilter';
import ProductsContainer from './ProductsContainer';
import { connect } from 'react-redux';
const Catalog = (props) => {


    useEffect(() =>{
        const category = props.history.location.pathname.slice(1, props.history.location.pathname.length)
        if (props.category !== category && props.category !== getBadCategory()){
            props.setProductsCategory(props.category)
        }
    }, [props])

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

let mapStateToProps = (state)=>{
    //debugger;
    return {
        category: state.catalog.products.category
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProductsCategory: (category) => {
            dispatch(setProductsCategoryAC(category));
        },
    }
}
const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;