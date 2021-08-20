import React, { useEffect, useState } from 'react';
import Achivments from './Achivments/Achivments';
import AnalyzeComplexes from './AnalyzeComplexes/AnalyzeComplexes';
import UnicProducts from './UnicProducts/UnicProducts';
import TopService from './TopService/TopService';
import Stocks from './Stocks/Stocks';
import AboutUs from './AboutUs/AboutUs';
import { connect } from 'react-redux';
import { setProductsAC, setAboutUsAC, setAchivmentsSmallAC, setAnalyzesComplexesAC, setCurrentPageUnicProductsAC, setStocksAC, setTopServisesAC, setTopServisesSlidesAC } from '../../redux/mainPage-reducer';
import urlStart, { getApiResponse } from '../../support_functions/api_requests';
import LoadingSheme from '../SupportsComponents/LoadingSheme';

const MainPage = (props) => {

    const [Badresponse, setNeedRedirect] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])

    useEffect(() => {
        const bestProductsUrl = `${urlStart}best-products/`
        const bestComplexesUrl = `${urlStart}best-complex-analyzes/`
        const aboutUsUrl = `${urlStart}about-us/`
        const achievementsUrl = `${urlStart}achievements/`
        const uniqueAnalyzesUrl = `${urlStart}catalog/unic-analyzes?page=${props.pageNumber}&count=${props.pageSize}`
        // for unique analyzes
        const mapGoodResponseDataForProducts = (data) =>{
            props.setProducts(data.items, data.total_count, data.page_size)
        }
        const badResponseHandler =()=>{
            setNeedRedirect(true)
        }
        getApiResponse(bestProductsUrl, false, props.setTopServisesSlides, badResponseHandler)
        getApiResponse(bestComplexesUrl, false, props.setAnalyzesComplexes, badResponseHandler)
        getApiResponse(aboutUsUrl, false, props.setAboutUs, badResponseHandler)
        getApiResponse(achievementsUrl, false, props.setAchivmentsSmall, badResponseHandler)
        if (props.mainPage.products.items.length === 0){
            getApiResponse(uniqueAnalyzesUrl, false, mapGoodResponseDataForProducts, badResponseHandler)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [buttonIsHiden, setButtonIsHidden] = useState(false)
    const showMoreClickHandler = () => {
        
        let maxPageNumber = Math.ceil(props.mainPage.products.totalCount / props.pageSize)
        if (maxPageNumber === (props.pageNumber + 1)){
            setButtonIsHidden(true)
        }

        const mapGoodResponseDataForProducts = (data) =>{
            props.setProducts(data.items, data.total_count, data.page_size)
        }
        const badResponseHandler =()=>{
            setNeedRedirect(true)
        }
        const uniqueAnalyzesUrl = `${urlStart}catalog/unic-analyzes?page=${props.pageNumber + 1}&count=${props.pageSize}`
        getApiResponse(uniqueAnalyzesUrl, false, mapGoodResponseDataForProducts, badResponseHandler)
        props.setCurrentPage(props.pageNumber + 1)
    }

    
    return (
        <main className="page">
            {props.topSevices.slides.length !== 0 ? 
             <TopService serviceData={props.topSevices}/>:
             <LoadingSheme block={true}/>} 

            {props.mainPage.achivmentsSmall.length !== 0 ?
            <Achivments achivments={props.mainPage.achivmentsSmall}/> : 
            <LoadingSheme block={true}/>} 
            
            {props.mainPage.products.items.length !== 0 ?
            <UnicProducts products={props.mainPage.products.items} 
            onShowMoreClick={showMoreClickHandler} isButtonHidden={buttonIsHiden}/> :
            <LoadingSheme block={true}/>} 
            
           {props.analiyzesComplex.length !== 0 ?
            <AnalyzeComplexes analyzes={props.analiyzesComplex}/>: 
            <LoadingSheme block={true}/>} 

            {props.mainPage.stocks.length !== 0 ?
            <Stocks stocks={props.mainPage.stocks}/> : 
            <LoadingSheme block={true}/>}  
            
            {props.aboutUs.length !== 0 ?
            <AboutUs aboutUs={props.aboutUs}/>: 
            <LoadingSheme block={true}/>} 
            
        </main>
    );
}

let mapStateToProps = (state)=>{
    return {
        aboutUs: state.mainPage.aboutUs,
        topSevices: state.mainPage.topSevices,
        analiyzesComplex: state.mainPage.analiyzesComplex,
        mainPage: state.mainPage,
        pageNumber: state.mainPage.products.current_page,
        pageSize: state.mainPage.products.pageSize
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProducts: (items, totalCount, pageSize) => {
            dispatch(setProductsAC(items, totalCount, pageSize));
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