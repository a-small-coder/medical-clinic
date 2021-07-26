import React, { useEffect, useState } from 'react';
import Paggination from '../Paggination/Paggination';
import Product from './Product';
import { connect } from 'react-redux';
import { setCurrentPageAC, setProductsAC } from '../../redux/catalog-reducer';
import {Redirect} from "react-router-dom";
import urlStart, { getApiResponse, putApiRequest } from '../../api_requests';
import { setCartAC, setProductsCountInCartAC } from '../../redux/header-reducer';

const Products = (props) => {

    let catagoryName = props.history.location.pathname
    let apiLink = catagoryName.slice(1, props.history.location.pathname.length)
    const [Badresponse, setNeedRedirect] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])

    const sendRequestForGetProducts = ()=>{
        const productsApiUrl = `${urlStart}${apiLink}?page=${props.pageNumber}&count=${props.pageSize}`
        const mapProductsDataResponse = (data) =>{
            props.setProducts(data.items, data.total_count, catagoryName, data.page_size)
        }
        const badResponseHandler =()=>{
            if (props.pageNumber > 1){
                props.setCurrentPage(1)
            }
            else{
                setNeedRedirect(true)
            }
        }
        getApiResponse(productsApiUrl, mapProductsDataResponse, badResponseHandler)
    }
    const onPageChenged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        sendRequestForGetProducts()
    }
    useEffect(() => {
        if ((props.products.items.length === 0 || props.products.category !== catagoryName) && !Badresponse){
            sendRequestForGetProducts()
        }
    })

    const buttonButClickHandler = (productId) =>{
        const addProductApiUrl = `${urlStart}cart/current_customer_cart/add_to_cart/${productId}/`
       const status =  putApiRequest(addProductApiUrl, props.userToken)
       if (status === 200){
        props.setProductsCountInCart(props.countProductsInCart + 1)
       }
    }
    let productsElements
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    if (props.products.items != null){
        productsElements = props.products.items.map(
            a => <Product key={a.id} id={a.id} title={a.title} time={a.time} number={a.number}
                slug={a.id} price={a.price} mainSlug={props.history.location.pathname} 
                buttonButClickHandler={buttonButClickHandler}
                />);
    }
    
    
    ////console.log(productsElements)
    //debugger;
    let titleKey = props.products.category.substring(1) + '/'
    
    return Badresponse ? (
        <Redirect to={"/page-in-work"} />
    ) : props.products != null ? (
        <div className="analyze-section">
            <h2 className="analyze-section__title _title">{props.products.title[titleKey]}</h2>
            <div className="analyze-section__items">
                {productsElements}
            </div>
            <Paggination pagesCount={pagesCount} totalPage={props.products.currentPage} PageChenge={onPageChenged} />
        </div>
    ) : (
        <div className="analyze-section">
            Loading...
        </div>
    );
}

let mapStateToProps = (state)=>{
  //debugger;
    return {
        products: state.catalog.products,
        pageSize: state.catalog.products.pageSize,
        totalCount: state.catalog.products.totalCount,
        pageNumber: state.catalog.products.currentPage,
        countProductsInCart: state.header.cart.total_products,
        cart: state.header.cart,
        userToken: state.auth.user.token
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProducts: (items, totalCount, category, pageSize) => {
            dispatch(setProductsAC(items, totalCount, category, pageSize));
        },
        setCurrentPage: (totalPage) =>{
            dispatch(setCurrentPageAC(totalPage));
        },
        setProductsCountInCart: (total_products) => {
            dispatch(setProductsCountInCartAC(total_products));
        },
        setCart: (cart) =>{
            dispatch(setCartAC(cart))
        }
    }
}
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;