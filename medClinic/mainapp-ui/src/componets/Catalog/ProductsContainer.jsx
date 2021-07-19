import React from 'react';
import Paggination from '../Paggination/Paggination';
import Product from './Product';
import { connect } from 'react-redux';
import { setCurrentPageAC, setProductsAC } from '../../redux/catalog-reducer';

const Products = (props) => {

    if (props.products.items.length === 0){
        props.setProducts({
            totalCount: 8,
            currentPage: 1,
            pageSize: 4,
            category: "/product",
            title: "Все анализы",
            items: [
                {
                    id: 1,
                    search_group: "",
                    complex_type: "",
                    ispopular: false, 
                    title_min: "Экспресс-тест на COVID-19",
                    title: "Экспресс-тест на COVID-19",
                    text: "Результат предоставляется через 15 минут. Исследование представляет собой функциональный аналог ПЦР-тестов",
                    time: 1,
                    number: "0001",
                    price: "2750",
                    img: null,
                },
                {
                    id: 2,
                    search_group: "",
                    complex_type: "",
                    ispopular: false,  
                    title_min: "Глюкоза",
                    title: "Глюкоза (в крови) (Glucose) ",
                    text: "Глюкоза – основной источник энергии для метаболических процессов в организме человека, является обязательным компонентом большинства внутриклеточных структур, участвует в синтезе нуклеиновых кислот (рибоза, дезоксирибоза), образует соединения с белками (гликопротеиды, протеогликаны) и липидами (гликолипиды).",
                    time: 3,
                    number: "0002",
                    price: "360",
                    img: null,
                },
                {
                    id: 3, 
                    search_group: "",
                    complex_type: "",
                    ispopular: false,  
                    title_min: "Общий белок",
                    title: "Общий белок (в крови) (Protein total) ",
                    text: "Общий белок выступает показателем белкового обмена, отражающим содержание всех фракций белков в сыворотке крови. Тест используется в комплексных биохимических обследованиях пациентов при различных заболеваниях.",
                    time: 2,
                    number: "0003",
                    price: "750",
                    img: null,
                },
                {
                    id: 4, 
                    search_group: "",
                    complex_type: "",
                    ispopular: false,  
                    title_min: "Общий анализ крови",
                    title: "Анализ крови. Общий анализ крови (без лейкоцитарной формулы и СОЭ) (Complete Blood Count, CBC)",
                    text: "Общий анализ крови – это комплексное исследование, в ходе которого проводится количественная оценка содержания форменных элементов крови (эритроцитов, лейкоцитов, тромбоцитов), гемоглобина, проводится подсчет гематокрита и эритроцитарных индексов (MCV, MCH, MCHC, RDW).",
                    time: 1,
                    number: "0004",
                    price: "500",
                    img: null,
                },
                {
                    id: 5,
                    search_group: "",
                    complex_type: "",
                    ispopular: false, 
                    title_min: "Экспресс-тест на COVID-19",
                    title: "Экспресс-тест на COVID-19",
                    text: "Результат предоставляется через 15 минут. Исследование представляет собой функциональный аналог ПЦР-тестов",
                    time: 1,
                    number: "0001",
                    price: "2750",
                    img: null,
                },
                {
                    id: 6,
                    search_group: "",
                    complex_type: "",
                    ispopular: false,  
                    title_min: "Глюкоза",
                    title: "Глюкоза (в крови) (Glucose) ",
                    text: "Глюкоза – основной источник энергии для метаболических процессов в организме человека, является обязательным компонентом большинства внутриклеточных структур, участвует в синтезе нуклеиновых кислот (рибоза, дезоксирибоза), образует соединения с белками (гликопротеиды, протеогликаны) и липидами (гликолипиды).",
                    time: 3,
                    number: "0002",
                    price: "360",
                    img: null,
                },
                {
                    id: 7, 
                    search_group: "",
                    complex_type: "",
                    ispopular: false,  
                    title_min: "Общий белок",
                    title: "Общий белок (в крови) (Protein total) ",
                    text: "Общий белок выступает показателем белкового обмена, отражающим содержание всех фракций белков в сыворотке крови. Тест используется в комплексных биохимических обследованиях пациентов при различных заболеваниях.",
                    time: 2,
                    number: "0003",
                    price: "750",
                    img: null,
                },
                {
                    id: 8, 
                    search_group: "",
                    complex_type: "",
                    ispopular: false,  
                    title_min: "Общий анализ крови",
                    title: "Анализ крови. Общий анализ крови (без лейкоцитарной формулы и СОЭ) (Complete Blood Count, CBC)",
                    text: "Общий анализ крови – это комплексное исследование, в ходе которого проводится количественная оценка содержания форменных элементов крови (эритроцитов, лейкоцитов, тромбоцитов), гемоглобина, проводится подсчет гематокрита и эритроцитарных индексов (MCV, MCH, MCHC, RDW).",
                    time: 1,
                    number: "0004",
                    price: "500",
                    img: null,
                }
            ]
        })
    }
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let productsElements = props.products.items.map(
        a => <Product key={a.id} title={a.title} time={a.time} number={a.number} slug={a.id} price={a.price} mainSlug={props.products.category}/>);

    return (
        <div className="analyze-section">
            <h2 className="analyze-section__title _title">{props.products.title}</h2>
            <div className="analyze-section__items">

                {productsElements}
            </div>
            <Paggination pagesCount={pagesCount} totalPage={props.products.currentPage} setCurrentPage={props.setCurrentPage}/>
        </div>
    );
}

let mapStateToProps = (state)=>{
    return {
        products: state.catalog.products,
        pageSize: state.catalog.products.pageSize,
        totalCount: state.catalog.products.totalCount
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setProducts: (products) => {
            dispatch(setProductsAC(products));
        },
        setCurrentPage: (totalPage) =>{
            dispatch(setCurrentPageAC(totalPage));
        }
    }
}
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;