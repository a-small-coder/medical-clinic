import React, { useState } from 'react';
import ProductMain from './MainBlock/ProductMain';
import ProductInfo from './ProductSidebar/ProductInfo';
import { connect } from 'react-redux';
import {setProductAC, switchProductActiveContentAC } from '../../redux/product-reducer';
import IncludeProducts from './MainBlock/InculeProducts';
import urlStart, {getApiResponse, putApiRequest } from '../../support_functions/api_requests';
import { IN_WORK_PAGE_NAME, redirectByPageType } from '../../App';
import LoadingSheme from '../SupportsComponents/LoadingSheme';
import { setCartAC } from '../../redux/header-reducer';
import { isProductInCart } from '../Catalog/ProductCard/ProductsContainer';

const ProductPage = (props) => {
    const [currentLink, setCurrentLink] = useState(null)
    let productLink = props.history.location.pathname.slice(1, props.history.location.pathname.length)
    const [Badresponse, setNeedRender] = useState(false);

    if (currentLink !== productLink){
        getProductData(productLink, props.setProduct, setNeedRender)
        setCurrentLink(productLink)
    }

    const isInCart = isProductInCart(props.product.id, props.cart_products)

    const buttonBuyClickHandler = () => {
        const goodResponseHandler = () =>{
            const cartUrl = `${urlStart}cart/current_customer_cart/`
            const setCartFromResponse = (responseData) => {
                props.setCart(responseData)
            }
            getApiResponse(cartUrl, props.userToken, setCartFromResponse)
        }
        if (isInCart) {
            props.history.push('/cart');
        }
        else {
            const addProductApiUrl = `${urlStart}cart/current_customer_cart/add_to_cart/${props.product.id}/`
            putApiRequest(addProductApiUrl, props.userToken, goodResponseHandler)
        }
    }


    if (Badresponse) {
        return redirectByPageType(IN_WORK_PAGE_NAME)
    }
    if (props.product.content != null) {
        return (

            <section className="page__product analyze-product">
                <div className="analyze-product__container _container">
                    <div className="analyze-product__body">
                        <h1 className="analyze-product__title _title"><span>{props.product.title}</span></h1>
                        <div className="analyze-product__content">
                            <div className="analyze-product__main product-main">

                                <ProductMain switchActiveContentCategory={props.switchProductActiveContent} product={props.product} />
                                {props.product.isAcomplex ? <IncludeProducts products={props.product.included_analyzes} buyClick={buttonBuyClickHandler}/> : null}
                            </div>
                            <ProductInfo product={props.product} BuyClick={buttonBuyClickHandler} inCart={isInCart}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <LoadingSheme page={true} />
    )
}

let mapStateToProps = (state)=>{
    return {
        cart_products: state.header.cart.products,
        product: state.productPage.product,
        productCategoryPath: state.catalog.products.category,
        userToken: state.auth.user.token,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        switchProductActiveContent: (activeContentId) =>{
            dispatch(switchProductActiveContentAC(activeContentId))
        },
        setProduct: (product, isAcomplex) =>{
            dispatch(setProductAC(product, isAcomplex))
        },
        setCart: (cart) =>{
            dispatch(setCartAC(cart))
        },

    }
}
const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;

function getProductData(productLink, setProduct, setNeedRender) {
    const url = `${urlStart}${productLink}`
    const goodResponseHandler = (response) =>{
        // debugger
        let product = response
        let isAcomplex = product.complex_type != null
        if (!isAcomplex){
            if (product.content.length > 0){
                product.active_content_category = product.content[0].analyze_content_category
            }
            else{
                product.active_content_category = "DESCRIPTION"
            }
        }
        else{
            product.content = []
        }
        setProduct(product, isAcomplex)
    }
    const badResponseHandler = (err) =>{
        setNeedRender(true)
        console.log(err)
    }
    getApiResponse(url, false, goodResponseHandler, badResponseHandler)
}