const SET_PRODUCTS = "SET_PRODUCTS";
const SET_TOP_SERVISES = "SET_TOP_SERVISES";
const SET_ACHIVMENTS_SMALL = "SET_ACHIVMENTS_SMALL";
const SET_STOCKS = "SET_STOCKS";
const SET_ABOUT_US = "SET_ABOUT_US";
const SET_ANALYZES_COMPLEXES = "SET_ANALYZES_COMPLEXES";
const SET_TOP_SERVISES_SLIDES = "SET_TOP_SERVISES_SLIDES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


let initialState = {
    topSevices : {
        content: {
            title: "Самые популярные услуги",
            text: "Наша клиника в первую очередь работает в интересах клиентов. Поэтому мы составили для вас список самых популярных услуг и анализов. ",
            link: "/catalog"
        },
        slides: []
        
    },
    achivmentsSmall : [],
    analiyzesComplex : [
    ],
    stocks : [
        // {id: 1, slogan: "Путешествуй уверенно с TedMed", text: "Анализы ПЕРЕД и ПОСЛЕ вакцинации от COVID-19 Вакцинация против COVID-19", img: null, link: ""},
        // {id: 2, slogan: "Онкодиагностика на любом этапе", text: "Возрастная скидка и бонусная программа", img: null, link: ""},
        // {id: 3, slogan: "Диагностика COVID-19 для организаций", text: "", img: null, link: ""},
        // {id: 4, slogan: "Обязательные анализы для детской медкарты 026/У", text: "", img: null, link: ""},
        // {id: 5, slogan: "Проверь уровень витамина D", text: "По выгодной цене Бесплатный выез на дом", img: null, link: ""},
    ],
    aboutUs: [],  
    products: {
        totalCount: 8,
        pageSize: 4,
        current_page: 1,
        category : "unic-analyzes",
        items: []

    }
    
}

const mainPageReducer = (state = initialState, action) =>{
    let stateCopy = {
        ...state};
    switch (action.type){
        case SET_ANALYZES_COMPLEXES: {
            // debugger
            stateCopy.analiyzesComplex = action.analiyzesComplex.map(i =>{
                return {...i}
            })
            // stateCopy.analiyzesComplex = action.analiyzesComplex
            
            return stateCopy
        }
        case SET_PRODUCTS: {
            // debugger
            stateCopy.products = {
                ...state.products, 
                // items: state.products.items.push(action.items), 
                items : [...state.products.items, ...action.items],
                totalCount: action.totalCount,
                pageSize: action.pageSize,
            }
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            stateCopy.products = {...state.products, current_page: action.current_page}
            return stateCopy
        }
        case SET_TOP_SERVISES: {
            stateCopy.topSevices = {...state.topSevices, content: action.content, slides: action.slides}
            return stateCopy
        }
        case SET_TOP_SERVISES_SLIDES: {
            stateCopy.topSevices = {...state.topSevices, slides: action.slides.map(a => (a))}
            return stateCopy
        }
        case SET_ACHIVMENTS_SMALL: {
            stateCopy.achivmentsSmall = action.achivments.map(i =>{
                return {...i}
            })
            return stateCopy
        }
        case SET_STOCKS: {
            stateCopy.stocks = [...state.stocks, action.stocks.map(a => (a))]
          
            return stateCopy
        }
        case SET_ABOUT_US: {
            stateCopy.aboutUs = action.aboutUs.map(i =>{
                return {...i}
            })
            return stateCopy
        }
        default:
            return state;
    }
}
export const setProductsAC = (items, totalCount, pageSize) =>({type: SET_PRODUCTS, items, totalCount, pageSize});
export const setTopServisesAC = (content, slides) =>({type: SET_TOP_SERVISES, content, slides});
export const setTopServisesSlidesAC = (slides) =>({type: SET_TOP_SERVISES_SLIDES, slides});
export const setAchivmentsSmallAC = (achivments) =>({type: SET_ACHIVMENTS_SMALL, achivments});
export const setStocksAC = (stocks) =>({type: SET_STOCKS, stocks});
export const setAboutUsAC = (aboutUs) =>({type: SET_ABOUT_US, aboutUs});
export const setAnalyzesComplexesAC = (analiyzesComplex) =>({type: SET_ANALYZES_COMPLEXES, analiyzesComplex});
export const setCurrentPageUnicProductsAC = (current_page) =>({type: SET_CURRENT_PAGE, current_page});
export default mainPageReducer;