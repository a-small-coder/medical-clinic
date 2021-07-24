import React, { useEffect, useState } from 'react';
import Paggination from '../Paggination/Paggination';
import Product from './Product';
import { connect } from 'react-redux';
import { setCurrentPageAC, setProductsAC } from '../../redux/catalog-reducer';
import {Redirect} from "react-router-dom";
import urlStart, { getApiResponse } from '../../api_requests';

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

    let productsElements
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    if (props.products.items != null){
        productsElements = props.products.items.map(
            a => <Product key={a.id} title={a.title} time={a.time} number={a.number}
                slug={a.id} price={a.price} mainSlug={props.history.location.pathname} />);
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
        pageNumber: state.catalog.products.currentPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProducts: (items, totalCount, category, pageSize) => {
            dispatch(setProductsAC(items, totalCount, category, pageSize));
        },
        setCurrentPage: (totalPage) =>{
            dispatch(setCurrentPageAC(totalPage));
        }
    }
}
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;