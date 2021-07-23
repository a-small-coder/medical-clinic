import React, { useEffect, useState } from 'react';
import Achivments from './Achivments/Achivments';
import AnalyzeComplexes from './AnalyzeComplexes/AnalyzeComplexes';
import UnicProducts from './UnicProducts/UnicProducts';
import TopService from './TopService/TopService';
import Stocks from './Stocks/Stocks';
import AboutUs from './AboutUs/AboutUs';
import imgA from '../../img/achivments-small/01.svg';
import imgS from '../../img/stocks/slide2.jpg';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setProductsAC, setAboutUsAC, setAchivmentsSmallAC, setAnalyzesComplexesAC, setCurrentPageUnicProductsAC, setStocksAC, setTopServisesAC, setTopServisesSlidesAC } from '../../redux/mainPage-reducer';
import urlStart, { getApiResponse } from '../../api_requests';

const MainPage = (props) => {


     
    let  achivmentsSmall = [
        {id: 1, title: "Качественные специалисты", text: "ведущие врачи с мировым именем", img: imgA},
        {id: 2, title: "Сертифицированная клиника", text: "Подтвержденный стандарт качества ISO", img: imgA},
        {id: 3, title: "Бесплатный выезд", text: "после заполнения анкеты", img: imgA},
        {id: 4, title: "Поддержка 24/7", text: "Всегда на связи", img: imgA},
    ]

    let stocks = [
        {id: 1, slogan: "Путешествуй уверенно с TedMed", text: "Анализы ПЕРЕД и ПОСЛЕ вакцинации от COVID-19 Вакцинация против COVID-19", img: imgS, link: ""},
        {id: 2, slogan: "Онкодиагностика на любом этапе", text: "Возрастная скидка и бонусная программа", img: imgS, link: ""},
        {id: 3, slogan: "Диагностика COVID-19 для организаций", text: "", img: imgS, link: ""},
        {id: 4, slogan: "Обязательные анализы для детской медкарты 026/У", text: "", img: imgS, link: ""},
        {id: 5, slogan: "Проверь уровень витамина D", text: "По выгодной цене Бесплатный выез на дом", img: imgS, link: ""},
    ]

    let aboutUs = [
        {id: 1, title: "О компании", text: "TedMed - крупнейшая частная медицинская компания в России, специализирующаяся на высокоточной лабораторной диагностике и оказании медицинских услуг. Международный уровень качества, исключительный сервис и высокотехнологичные инновационные решения – главные приоритеты нашей работы. Внедрение передовых международных практик и стандартов позволило ИНВИТРО достичь уровня лучших европейских лабораторий, доказав, что российская лаборатория может и должна соответствовать международным стандартам.", link: ""},
        {id: 2, title: "История компании", text: "Компания была основана врачом-онкологом Павлом Крвцовым в 2003 году, а в 2005 году открылся первый медицинский офис «». В тот период спектр доступных исследований составлял всего 30 тестов. Сегодня сеть «TedMed» охватывает более 580 городов не только в России, но также в Украине, Казахстане, Беларуси, Армении и Киргизии. Восемь центральных лабораторий выполняют более 2 000 видов исследований.", link: ""},
        {id: 3, title: "Социальная ответственность", link: "" , text: "«TedMed» придерживается принципов "+
        "доказательной медицины, а также этичного и ответственного ведения бизнеса. Мы выстраиваем" +
        "эффективное сотрудничество с профессиональными медицинскими сообществами и общественными " +
        "организациями. Благодаря образовательным мероприятиям для врачей и программам поддержки молодых "+
        "ученых и студентов, компания вносит вклад в формирование высочайших стандартов отрасли. «» выступает "+
        "партнером благотворительных организаций, а также многих региональных спортивных и культурных мероприятий."},
    ]


    const [Badresponse, setNeedRedirect] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])

    useEffect(() => {
        const bestProductsUrl = `${urlStart}best-products/`
        const uniqueAnalyzesUrl = `${urlStart}catalog/unic-analyzes?page=${props.pageNumber}&count=${props.pageSize}`
        const bestComplexesUrl = `${urlStart}best-complex-analyzes/`
        // for best seervices
        const goodResponceHandlerMainSlider =(data) =>{
            props.setTopServisesSlides(data)
        }
        // for unique analyzes
        const mapGoodResponseDataForProducts = (data) =>{
            props.setProducts(data.items, data.total_count, data.page_size)
        }
        // for complexes
        const goodResponceHandlerComplexes =(data) =>{
            props.setAnalyzesComplexes(data)
        }
        const badResponseHandler =()=>{
            setNeedRedirect(true)
        }

        getApiResponse(bestProductsUrl, goodResponceHandlerMainSlider, badResponseHandler)
        getApiResponse(uniqueAnalyzesUrl, mapGoodResponseDataForProducts, badResponseHandler)
        getApiResponse(bestComplexesUrl, goodResponceHandlerComplexes, badResponseHandler)
        
    }, [])

    return (
        <main className="page">
            {props.topSevices.slides.length !== 0 ? 
             <TopService serviceData={props.topSevices}/>:
             ""}

            <Achivments achivments={achivmentsSmall}/>

            {props.mainPage.products.items.length !== 0 ?
            <UnicProducts products={props.mainPage.products.items}/> :
            ""}
            
           {props.analiyzesComplex.length !== 0 ?
            <AnalyzeComplexes analyzes={props.analiyzesComplex}/>: 
            ""} 
            <Stocks stocks={stocks}/>
            <AboutUs aboutUs={aboutUs}/>
        </main>
    );
}

let mapStateToProps = (state)=>{
    return {
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