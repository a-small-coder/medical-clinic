import React, { useEffect, useState } from 'react';
import Achivments from './Achivments/Achivments';
import AnalyzeComplexes from './AnalyzeComplexes/AnalyzeComplexes';
import UnicProducts from './UnicProducts/UnicProducts';
import TopService from './TopService/TopService';
import Stocks from './Stocks/Stocks';
import AboutUs from './AboutUs/AboutUs';
import imgA from '../../img/achivments-small/01.svg';
import imgComplex from '../../img/complexes/blood_anl_s.jpg';
import imgS from '../../img/stocks/slide2.jpg';
import imgUnic from '../../img/unic-products/unique_service_corona.webp';
import { connect } from 'react-redux';
import { setCurrentPageAC, setProductsAC } from '../../redux/catalog-reducer';
import * as axios from 'axios'
import { setAboutUsAC, setAchivmentsSmallAC, setAnalyzesComplexesAC, setCurrentPageUnicProductsAC, setStocksAC, setTopServisesAC, setTopServisesSlidesAC } from '../../redux/mainPage-reducer';

const MainPage = (props) => {


     
    let  achivmentsSmall = [
        {id: 1, title: "Качественные специалисты", text: "ведущие врачи с мировым именем", img: imgA},
        {id: 2, title: "Сертифицированная клиника", text: "Подтвержденный стандарт качества ISO", img: imgA},
        {id: 3, title: "Бесплатный выезд", text: "после заполнения анкеты", img: imgA},
        {id: 4, title: "Поддержка 24/7", text: "Всегда на связи", img: imgA},
    ]

    let analiyzesComplex = [
        {id: 1, title: "Биохимия крови", text: "кровь", img: imgComplex, link: "/product/1"},
        {id: 2, title: "Диагностика сахарного диабета", text: "диабет", img: imgComplex, link: "/product/1"},
        {id: 3, title: "Ежегодное обследование", text: "проверь себя", img: imgComplex, link: "/product/1"},
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

    let products = {
        count: 8,
        products: [
            {
                id: 1, 
                title: "NASBA", 
                description: "новинка в нашей лаборатории!", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 1,
                    items: [
                        {id: 1, type: "new", label: "new"}
                    ]
                }
            },
            {
                id: 2, 
                title: "(ANA)", 
                description: "Антитела к ядерным антигенам IgG, 25 антигенов", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 1,
                    items: [
                        {id: 1, type: "new", label: "new"}
                    ]
                }
            },
            {
                id: 3, 
                title: "ВПЧ-ПАП-тест жидкостный", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 1,
                    items: [
                        {id: 1, type: "sale", label: "-30%"}
                    ]
                }
            },
            {
                id: 4, 
                title: "ДНК HBV", 
                description: "ультрачувствительное исследование", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
            {
                id: 5, 
                title: " Исследование на абровирусные инфекции (Вирус Западного Нила)", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
            {
                id: 6, 
                title: " Исследование на абровирусные инфекции (Лихорадка Денге)", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 2,
                    items: [
                        {id: 1, type: "new", label: "new"},
                        {id: 2, type: "sale", label: "-50%"}
                    ]
                }
            },
            {
                id: 7, 
                title: "Клещевые инфекции", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
            {
                id: 8, 
                title: "Комплексная диагностика ОРВИ", 
                description: "", 
                img: imgUnic, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
        ]

    }


    const [Badresponse, setNeedRedirect] = useState(false);
    useEffect(() =>{
        if (Badresponse){
            console.log("hey! it's a bad response")
        }
        
    }, [Badresponse])

    useEffect(() => {
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
            console.log(`Send response: http://127.0.0.1:8000/api/best-products`)
            axios.get(`http://127.0.0.1:8000/api/best-products/`).then(response => {
                console.log(response.data)
                // debugger
                props.setTopServisesSlides(response.data)
        }).catch(err => {
            setNeedRedirect(true)
            console.log(err)
            
        })
            console.log(`Send response: http://127.0.0.1:8000/api/best-complex-analyzes`)
            axios.get(`http://127.0.0.1:8000/api/best-complex-analyzes/`).then(response => {
                console.log(response.data)
                // debugger
                props.setAnalyzesComplexes(response.data)
        }).catch(err => {
            // debugger
            setNeedRedirect(true)
            console.log(err)
            
        })
        
    }, [])

    return (
        <main className="page">
            {console.log(props.topSevices.slides.length === 0)}
            {console.log(props.topSevices)}
            {props.topSevices.slides.length !== 0 ? 
             <TopService serviceData={props.topSevices}/>:
             ""}
            <Achivments achivments={achivmentsSmall}/>
            <UnicProducts products={products}/>
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