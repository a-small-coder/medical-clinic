import React, { useEffect, useState } from 'react';
import ProductMain from './MainBlock/ProductMain';
import ProductInfo from './ProductInfo/ProductInfo';
import { connect } from 'react-redux';
import {setProductAC, switchProductActiveContentAC } from '../../redux/product-reducer';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import IncludeProducts from './InculeProducts';
import * as axios from 'axios'

const ProductPage = (props) => {

    
    
    // let history = useHistory();
    // React.useEffect(() => {
    //     console.log(history.location.pathname)
    // }, [history]);
    //console.log(props)
    //console.log("hey!, i'm render!")
    let productNameL = props.history.location.pathname.split("/");
    let productName = Number(productNameL[productNameL.length - 1])
    let productLink = props.history.location.pathname.slice(1, props.history.location.pathname.length)
    let isfalseProduct = productName !== props.product.id
    const [Badresponse, setNeedRender] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])
    if (isfalseProduct && !Badresponse){
        axios.get(`http://127.0.0.1:8000/api/${productLink}`).then(response => {
            let product = response.data
            let isAcomplex = product.complex_type != null
            if (!isAcomplex){
                for (let i=0; i < product.content.length; i++){
                    if (i === 0){
                        product.content[i].active_block = true
                    }
                    else{
                        product.content[i].active_block = false
                    }
                }
            }
            else{
                product.content = []
            }
            //console.log(product)
            props.setProduct(product, isAcomplex)
        }).catch(err => { 
            setNeedRender(true)
            console.log(err)
            if (err.response) { 
              // client received an error response (5xx, 4xx)
            } else if (err.request) { 
              // client never received a response, or request never left 
            } else { 
              // anything else 
            } 
          })
    }
    return Badresponse ? (
        <Redirect to={"/page-in-work"}/>
    ) : props.product.content != null ?(
        
            <section className="page__product analyze-product">
                <div className="analyze-product__container _container">
                    <div className="analyze-product__body">
                        <h1 className="analyze-product__title _title"><span>{props.product.title}</span></h1>
                        <div className="analyze-product__content">
                            <div className="analyze-product__main product-main">
                                
                                <ProductMain switchProductActiveContent={props.switchProductActiveContent} product={props.product} />
                                {props.product.isAcomplex ? <IncludeProducts products={props.product.included_analyzes}/> : ""}
                            </div>
                            <ProductInfo product={props.product} />
                        </div>
                    </div>
                </div>
            </section>
    ) : (
        <section className="page__product analyze-product">
                <div className="analyze-product__container _container">
                    <div className="analyze-product__body">
                        <h1 className="analyze-product__title _title"><span>{props.product.title}</span></h1>
                        <div className="analyze-product__content">
                            Looading...
                        </div>
                    </div>
                </div>
            </section>
    )
    ;
}

let mapStateToProps = (state)=>{
    return {
        product: state.productPage.product,
        productCategoryPath: state.catalog.products.category
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        switchProductActiveContent: (activeContentSlug) =>{
            dispatch(switchProductActiveContentAC(activeContentSlug))
        },
        setProduct: (product, isAcomplex) =>{
            dispatch(setProductAC(product, isAcomplex))
        }

    }
}
const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;