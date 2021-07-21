import React, { useEffect, useState } from 'react';
import Achivments from './Achivments/Achivments';
import AnalyzeComplexes from './AnalyzeComplexes/AnalyzeComplexes';
import UnicProducts from './UnicProducts/UnicProducts';
import TopService from './TopService/TopService';
import Stocks from './Stocks/Stocks';
import AboutUs from './AboutUs/AboutUs';
import { connect } from 'react-redux';
import { setCurrentPageAC, setProductsAC } from '../../redux/catalog-reducer';
import * as axios from 'axios'
import { setAboutUsAC, setAchivmentsSmallAC, setAnalyzesComplexesAC, setCurrentPageUnicProductsAC, setStocksAC, setTopServisesAC, setTopServisesSlidesAC } from '../../redux/mainPage-reducer';

const MainPage = (props) => {


    const [Badresponse, setNeedRedirect] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])

    useEffect(() => {
        if ((props.mainPage.products.items.length === 0) && !Badresponse){
            console.log(`Send response: http://127.0.0.1:8000/api/catalog/unic-analyzes?page=${props.pageNumber}&count=${props.pageSize}`)
            axios.get(`http://127.0.0.1:8000/api/catalog/unic-analyzes?page=${props.pageNumber}&count=${props.pageSize}`).then(response => {
                console.log(response.data)
                //debugger
                props.setProducts(response.data.items, response.data.total_count, response.data.page_size)
        }).catch(err => {
            if (err.response.status === 404 && props.pageNumber > 1){
                props.setCurrentPageAC(1) // try to get a first page
            }else{
                setNeedRedirect(true)
                console.log(err)
            }
            
        })
        }

        if ((props.mainPage.topSevices.slides.length === 0) && !Badresponse){
            console.log(`Send response: http://127.0.0.1:8000/api/catalog/complex-analyzes`)
            axios.get(`http://127.0.0.1:8000/api/catalog/complex-analyzes`).then(response => {
                console.log(response.data)
                //debugger
                props.setTopServisesSlides(response.data.items)
                props.setAnalyzesComplexes(response.data.items)
        }).catch(err => {
            if (err.response.status === 604 && props.pageNumber > 1){
                props.setCurrentPageAC(1) // try to get a first page
            }else{
                setNeedRedirect(true)
                console.log(err)
            }
            
        })
        }
        
    }, [])

    return (
        <main className="page">
             <TopService serviceData={props.mainPage.topSevices}/>
            <Achivments achivments={props.mainPage.achivmentsSmall}/>
            <UnicProducts products={props.mainPage.products}/>
            <AnalyzeComplexes analyzes={props.mainPage.analiyzesComplex}/>
            <Stocks stocks={props.mainPage.stocks}/>
            <AboutUs aboutUs={props.mainPage.aboutUs}/>
        </main>
    );
}

let mapStateToProps = (state)=>{
    //debugger;
    return {
        mainPage: state.mainPage,
        pageNumber: state.mainPage.products.current_page,
        pageSize: state.mainPage.products.pageSize
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProducts: (items, totalCount, currentPage, pageSize) => {
            dispatch(setProductsAC(items, totalCount, currentPage, pageSize));
        },
        setTopServises: (content, slides) =>{
            dispatch(setTopServisesAC(content, slides));
        },
        setTopServisesSlides: (slides) =>{
            dispatch(setTopServisesSlidesAC(slides))
        },
        setAchivmentsSmall: (achivments) => {
            dispatch(setAchivmentsSmallAC(achivments))
        },
        setStocks: (stocks) => {
            dispatch(setStocksAC(stocks))
        },
        setAboutUs: (aboutUs) => {
            dispatch(setAboutUsAC(aboutUs))
        },
        setAnalyzesComplexes: (analiyzesComplex) => {
            dispatch(setAnalyzesComplexesAC(analiyzesComplex))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageUnicProductsAC(pageNumber))
        }
        
    }
}
const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;