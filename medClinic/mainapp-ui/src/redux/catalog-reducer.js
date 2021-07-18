const SET_PRODUCTS = "SET-PRODUCTS";
const ACTIVATE_CHECKBOX = "ACTIVATE_CHECKBOX";
const DISACTIVATE_CHECKBOX = "DISACTIVATE_CHECKBOX";
const CHANGE_FILTER_POPUP_SHOW_STATE = "CHANGE_FILTER_POPUP_SHOW_STATE"


let initialState = {
    products: {
        count: 10,
        category: null,
        title: "Все анализы",
        items: [
            {
                id: 1,
                search_group: "",
                ispopular: false, 
                title_min: "Экспресс-тест на COVID-19",
                title: "Экспресс-тест на COVID-19",
                text: "Результат предоставляется через 15 минут. Исследование представляет собой функциональный аналог ПЦР-тестов",
                time: 1,
                number: "0001",
                price: "2750",
                img: null,
                link: "/product"
            },
            {
                id: 2,
                search_group: "",
                ispopular: false,  
                title_min: "Глюкоза",
                title: "Глюкоза (в крови) (Glucose) ",
                text: "Глюкоза – основной источник энергии для метаболических процессов в организме человека, является обязательным компонентом большинства внутриклеточных структур, участвует в синтезе нуклеиновых кислот (рибоза, дезоксирибоза), образует соединения с белками (гликопротеиды, протеогликаны) и липидами (гликолипиды).",
                time: 3,
                number: "0002",
                price: "360",
                img: null,
                link: "/product"
            },
            {
                id: 3, 
                search_group: "",
                ispopular: false,  
                title_min: "Общий белок",
                title: "Общий белок (в крови) (Protein total) ",
                text: "Общий белок выступает показателем белкового обмена, отражающим содержание всех фракций белков в сыворотке крови. Тест используется в комплексных биохимических обследованиях пациентов при различных заболеваниях.",
                time: 2,
                number: "0003",
                price: "750",
                img: null,
                link: "/product"
            },
            {
                id: 4, 
                search_group: "",
                ispopular: false,  
                title_min: "Общий анализ крови",
                title: "Анализ крови. Общий анализ крови (без лейкоцитарной формулы и СОЭ) (Complete Blood Count, CBC)",
                text: "Общий анализ крови – это комплексное исследование, в ходе которого проводится количественная оценка содержания форменных элементов крови (эритроцитов, лейкоцитов, тромбоцитов), гемоглобина, проводится подсчет гематокрита и эритроцитарных индексов (MCV, MCH, MCHC, RDW).",
                time: 1,
                number: "0004",
                price: "500",
                img: null,
                link: "/product"
            }
        ]
    },
    filter: {
        is_show: false,
        categories: [
            {
                slug: "search_groups",
                title: "группы исследований", 
                active_count: 0,
                items: [
                    {slug: "blood-beohim", is_active: false, text: "биохимические исследования крови", complex_type: "" },
                    {slug: "blood-common", is_active: false, text: "общиехимические исследования крови", complex_type: "" },
                    {slug: "top-10", is_active: false, text: "ТОП-10", complex_type: "" },
                    {slug: "lab-search", is_active: false, text: "лабораторные исследования", complex_type: "" },
                    {slug: "blood-beohim", is_active: false, text: "биохимические исследования крови", complex_type: ""},
                    {slug: "blood-common", is_active: false, text: "общиехимические исследования крови", complex_type: ""},
                    {slug: "top-10", is_active: false, text: "ТОП-10", complex_type: ""},
                    {slug: "lab-search", is_active: false, text: "лабораторные исследования", complex_type: ""},
                ]
            },
            {
                slug: "complex_type",
                title: "комплексы анализов", 
                active_count: 0,
                items: [
                    {slug: "blood", is_active: false, title: "комплексные анализы крови",},
                    {slug: "each-year-observe", is_active: false, title: "ежегодное обследование",},
                    {slug: "diabet", is_active: false, title: "диагностика диабета",},
                    {slug: "hurt-and-blood-stytem", is_active: false, title: "оценка риска заюолевание сердечно-сосудистой системы",},
                ]
            },

        ],
    },
    
}

const catalogReducer = (state = initialState, action) =>{
    let stateCopy = {
        ...state};
    switch (action.type){
        case SET_PRODUCTS: {
            stateCopy.products = {...state.products}
            stateCopy.products.items = {...state.products.items, ...action.products};
            return stateCopy;
        }
        case ACTIVATE_CHECKBOX: {
            stateCopy.filter = {...state.filter};
            stateCopy.filter.categories = state.filter.categories.map(c =>{
                if (action.categorySlug === c.slug){
                    let categoryCopy = {...c, active_count: c.active_count + 1};
                    categoryCopy.items = c.items.map(i => {
                        if (action.itemSlug === i.slug){
                            return {...i, is_active: true}
                        }
                        return {...i}
                    })
                    return categoryCopy
                }
                return {...c}
            });
            return stateCopy
        }
        case DISACTIVATE_CHECKBOX: {
            stateCopy.filter = {...state.filter};
            stateCopy.filter.categories = state.filter.categories.map(c =>{
                if (action.categorySlug === c.slug){
                    let categoryCopy = {...c, active_count: c.active_count - 1};
                    categoryCopy.items = c.items.map(i => {
                        if (action.itemSlug === i.slug){
                            return {...i, is_active: false}
                        }
                        return {...i}
                    })
                    return categoryCopy
                }
                return {...c}
            });
            return stateCopy
        }
        case CHANGE_FILTER_POPUP_SHOW_STATE:{
            stateCopy.filter = {...state.filter, is_show: !state.filtre.is_show};
            return stateCopy;
        }
        default:
            return state;
    }
}
export const setProducts = (products) =>({type: SET_PRODUCTS, products: products});
export const activateCheckBoxAC = (categorySlug, itemSlug) =>({type: ACTIVATE_CHECKBOX, categorySlug: categorySlug, itemSlug: itemSlug});
export const disactiveteCheckBoxAC = (categorySlug, itemSlug) =>({type: DISACTIVATE_CHECKBOX, categorySlug: categorySlug, itemSlug: itemSlug});
export const showHiddenPopupAC = () => ({type: CHANGE_FILTER_POPUP_SHOW_STATE});
export default catalogReducer;