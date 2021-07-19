import React from 'react';
import ProductMain from './MainBlock/ProductMain';
import ProductInfo from './ProductInfo/ProductInfo';
import { connect } from 'react-redux';
import {switchProductActiveContentAC } from '../../redux/product-reducer';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const ProductPage = (props) => {
    
    // let history = useHistory();
    // React.useEffect(() => {
    //     console.log(history.location.pathname)
    // }, [history]);
    let productNameL = props.history.location.pathname.split("/");
    let productName = productNameL[productNameL.length - 1]
    let isfalseProduct = !(productName == props.product.id)
    // console.log(props);
    // console.log(productName);
    // console.log(product);
    return isfalseProduct ? (
        <Redirect to={"/page-in-work"}/>
    ) : (
        
        <section className="page__product analyze-product">
            <div className="analyze-product__container _container">
                <div className="analyze-product__body">
                    <h1 className="analyze-product__title _title"><span>{props.product.title}</span></h1>
                    <div className="analyze-product__content">
                        <div className="analyze-product__main product-main">

                            <ProductMain switchProductActiveContent={props.switchProductActiveContent} product={props.product}/>

                        </div>
                        <ProductInfo product={props.product}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

let mapStateToProps = (state)=>{
    return {
        product: state.productPage.product
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        switchProductActiveContent: (activeContentSlug) =>{
            dispatch(switchProductActiveContentAC(activeContentSlug))
        }

    }
}
const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;