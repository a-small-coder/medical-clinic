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
        slides: [
            {
                id: 1, 
                title_min: "Экспресс-тест на COVID-19",
                description: "Результат предоставляется через 15 минут. Исследование представляет собой функциональный аналог ПЦР-тестов",
                price: "---",
                big_image: null,
                slug: "/catalog"
            }
        ]
        
    },
    achivmentsSmall : [
        {id: 1, title: "Качественные специалисты", text: "ведущие врачи с мировым именем", img: null},
        {id: 2, title: "Сертифицированная клиника", text: "Подтвержденный стандарт качества ISO", img: null},
        {id: 3, title: "Бесплатный выезд", text: "после заполнения анкеты", img: null},
        {id: 4, title: "Поддержка 24/7", text: "Всегда на связи", img: null},
    ],
    analiyzesComplex : [
        {id: 1, title_min: "Биохимия крови", description: "кровь", small_image: null, slug: "/product/1"},
    ],
    stocks : [
        {id: 1, slogan: "Путешествуй уверенно с TedMed", text: "Анализы ПЕРЕД и ПОСЛЕ вакцинации от COVID-19 Вакцинация против COVID-19", img: null, link: ""},
        {id: 2, slogan: "Онкодиагностика на любом этапе", text: "Возрастная скидка и бонусная программа", img: null, link: ""},
        {id: 3, slogan: "Диагностика COVID-19 для организаций", text: "", img: null, link: ""},
        {id: 4, slogan: "Обязательные анализы для детской медкарты 026/У", text: "", img: null, link: ""},
        {id: 5, slogan: "Проверь уровень витамина D", text: "По выгодной цене Бесплатный выез на дом", img: null, link: ""},
    ],
    aboutUs: [
        {id: 1, title: "О компании", text: "TedMed - крупнейшая частная медицинская компания в России, специализирующаяся на высокоточной лабораторной диагностике и оказании медицинских услуг. Международный уровень качества, исключительный сервис и высокотехнологичные инновационные решения – главные приоритеты нашей работы. Внедрение передовых международных практик и стандартов позволило ИНВИТРО достичь уровня лучших европейских лабораторий, доказав, что российская лаборатория может и должна соответствовать международным стандартам.", link: ""},
        {id: 2, title: "История компании", text: "Компания была основана врачом-онкологом Павлом Крвцовым в 2003 году, а в 2005 году открылся первый медицинский офис «». В тот период спектр доступных исследований составлял всего 30 тестов. Сегодня сеть «TedMed» охватывает более 580 городов не только в России, но также в Украине, Казахстане, Беларуси, Армении и Киргизии. Восемь центральных лабораторий выполняют более 2 000 видов исследований.", link: ""},
        {id: 3, title: "Социальная ответственность", link: "" , text: "«TedMed» придерживается принципов "+
        "доказательной медицины, а также этичного и ответственного ведения бизнеса. Мы выстраиваем" +
        "эффективное сотрудничество с профессиональными медицинскими сообществами и общественными " +
        "организациями. Благодаря образовательным мероприятиям для врачей и программам поддержки молодых "+
        "ученых и студентов, компания вносит вклад в формирование высочайших стандартов отрасли. «» выступает "+
        "партнером благотворительных организаций, а также многих региональных спортивных и культурных мероприятий."},
    ],
    products: {
        totalCount: 8,
        pageSize: 4,
        current_page: 1,
        category : "unic-analyzes",
        items: [
            {
                id: 1, 
                title: "NASBA", 
                description: "новинка в нашей лаборатории!", 
                small_image: null, 
                link: "", 
                markers: {
                    count: 1,
                    items: [
                        {id: 1, type: "new", label: "new"}
                    ]
                },
            },
            {
                id: 2, 
                title: "(ANA)", 
                description: "Антитела к ядерным антигенам IgG, 25 антигенов", 
                img: null, 
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
                img: null, 
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
                img: null, 
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
                img: null, 
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
                img: null, 
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
                img: null, 
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
                img: null, 
                link: "", 
                markers: {
                    count: 0,
                    items: []
                }
            },
        ]

    }
    
}

const mainPageReducer = (state = initialState, action) =>{
    let stateCopy = {
        ...state};
    switch (action.type){
        case SET_PRODUCTS: {
            stateCopy.products = {
                ...state.products, 
                // items: state.products.items.push(action.items), 
                items : action.items,
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
            stateCopy.achivmentsSmall = [...state.achivmentsSmall, action.achivments.map(a => (a))]
            return stateCopy
        }
        case SET_STOCKS: {
            stateCopy.stocks = [...state.stocks, action.stocks.map(a => (a))]
          
            return stateCopy
        }
        case SET_ABOUT_US: {
            stateCopy.aboutUs = [...state.aboutUs, action.aboutUs.map(a => (a))]
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
export const setCurrentPageUnicProductsAC = (current_page) =>({type: SET_ABOUT_US, current_page});
export default mainPageReducer;