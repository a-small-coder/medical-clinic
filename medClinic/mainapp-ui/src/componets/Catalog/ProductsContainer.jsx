import React, { useEffect, useState } from 'react';
import Paggination from '../Paggination/Paggination';
import Product from './Product';
import { connect } from 'react-redux';
import { setCurrentPageAC, setProductsAC } from '../../redux/catalog-reducer';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import * as axios from 'axios'

const Products = (props) => {


    // let products = {}
    //         products.items = response.data.items
    //         products.category = catagoryName
    //         products.totalCount = response.data.total_count
    //         products.pageSize = response.data.page_size
    //         products.currentPage = response.data.current_page
    let catagoryNameL = props.history.location.pathname.split("/");
    let catagoryName = props.history.location.pathname.slice(1, props.history.location.pathname.length)
    const [Badresponse, setNeedRedirect] = useState(false);
    console.log(catagoryNameL)
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])

    const onPageChenged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        console.log(`Send response: http://127.0.0.1:8000/api/${catagoryName}?page=${pageNumber}&count=${props.pageSize}`)
            axios.get(`http://127.0.0.1:8000/api/${catagoryName}?page=${pageNumber}&count=${props.pageSize}`).then(response => {
                //debugger
                
            props.setProducts(response.data.items, response.data.total_count, catagoryName, response.data.page_size)

            //debugger;
        }).catch(err => {
            console.log(err)
            if (err.status === 404 && props.pageNumber > 1){
                props.setProducts([], 1, catagoryName, props.products.page_size)
            }else{
                setNeedRedirect(true)
                
            }
        })
    }

    useEffect(() => {
        if ((props.products.items.length === 0 || props.products.category !== catagoryName) && !Badresponse){
            console.log(`Send response: http://127.0.0.1:8000/api/${catagoryName}?page=${props.pageNumber}&count=${props.pageSize}`)
            axios.get(`http://127.0.0.1:8000/api/${catagoryName}?page=${props.pageNumber}&count=${props.pageSize}`).then(response => {
                console.log(response.data)
                //debugger
                props.setProducts(response.data.items, response.data.total_count, catagoryName, response.data.page_size)
        }).catch(err => {
            if (err.response.status === 404 && props.pageNumber > 1){
                props.setCurrentPage(1) // try to get a first page
            }else{
                setNeedRedirect(true)
                console.log(err)
            }
            
        })
        }
        
    })
    let productsElements
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    if (props.products.items != null){
        productsElements = props.products.items.map(
            a => <Product key={a.id} title={a.title} time={a.time} number={a.number}
                slug={a.id} price={a.price} mainSlug={props.products.category} />);
    }
    
    
    //console.log(productsElements)
    //debugger;
    return Badresponse ? (
        <Redirect to={"/page-in-work"} />
    ) : props.products != null ? (
        <div className="analyze-section">
            <h2 className="analyze-section__title _title">{props.products.title}</h2>
            <div className="analyze-section__items">
                {console.log(props.products)}
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