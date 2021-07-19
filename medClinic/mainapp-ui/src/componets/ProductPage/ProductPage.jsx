import React, { useEffect, useState } from 'react';
import ProductMain from './MainBlock/ProductMain';
import ProductInfo from './ProductInfo/ProductInfo';
import { connect } from 'react-redux';
import {setProductAC, switchProductActiveContentAC } from '../../redux/product-reducer';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import * as axios from 'axios'

const ProductPage = (props) => {

    
    
    // let history = useHistory();
    // React.useEffect(() => {
    //     console.log(history.location.pathname)
    // }, [history]);
    let productNameL = props.history.location.pathname.split("/");
    let productName = Number(productNameL[productNameL.length - 1])
    let isfalseProduct = !(productName === props.product.id)
    const [Badresponse, setNeedRender] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])
    if (isfalseProduct && !Badresponse){
        axios.get(`http://127.0.0.1:8000/api/analyze/${productName}/`).then(response => {
            let product = response.data
            for (let i=0; i < product.content.length; i++){
                if (i === 0){
                    product.content[i].active_block = true
                }
                else{
                    product.content[i].active_block = false
                }
            }
            console.log(product)
            props.setProduct(product)
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
    ) : (
        
            <section className="page__product analyze-product">
                <div className="analyze-product__container _container">
                    <div className="analyze-product__body">
                        <h1 className="analyze-product__title _title"><span>{props.product.title}</span></h1>
                        <div className="analyze-product__content">
                            <div className="analyze-product__main product-main">
                                {props.product.content != null ? <ProductMain switchProductActiveContent={props.switchProductActiveContent} product={props.product} /> : ""}

                            </div>
                            <ProductInfo product={props.product} />
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
        },
        setProduct: (product) =>{
            dispatch(setProductAC(product))
        }

    }
}
const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;