const SET_PRODUCTS = "SET-PRODUCTS";
const ACTIVATE_CHECKBOX = "ACTIVATE_CHECKBOX";
const DISACTIVATE_CHECKBOX = "DISACTIVATE_CHECKBOX";
const CHANGE_FILTER_POPUP_SHOW_STATE = "CHANGE_FILTER_POPUP_SHOW_STATE"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_PRODUCTS_CATEGORY = "SET_PRODUCTS_CATEGORY";
const BAD_CATEGORY = "BAD_CATEGORY";

let initialState = {
    products: {
        totalCount: 8,
        currentPage: 1,
        pageSize: 4,
        category: BAD_CATEGORY,
        title: {
            "catalog/unic-analyzes/" : "Уникальные анализы",
            "catalog/complex-analyzes/" : "Комплексы анализов",
            "catalog/all-analyzes/" : "Все анализы"
        },
        items: []
    },
    filter: {
        is_show: false,
        current_category: "",
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
                    {slug: "blood-beohim2", is_active: false, text: "биохимические исследования крови", complex_type: ""},
                    {slug: "blood-common2", is_active: false, text: "общиехимические исследования крови", complex_type: ""},
                    {slug: "top-102", is_active: false, text: "ТОП-10", complex_type: ""},
                    {slug: "lab-search2", is_active: false, text: "лабораторные исследования", complex_type: ""},
                ]
            },
            {
                slug: "complex_type",
                title: "комплексы анализов", 
                active_count: 0,
                items: [
                    {slug: "blood", is_active: false, text: "комплексные анализы крови",},
                    {slug: "each-year-observe", is_active: false, text: "ежегодное обследование",},
                    {slug: "diabet", is_active: false, text: "диагностика диабета",},
                    {slug: "hurt-and-blood-stytem", is_active: false, text: "оценка риска заюолевание сердечно-сосудистой системы",},
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
          //debugger
            stateCopy.products = {
                ...state.products, 
                items: action.items, 
                totalCount: action.totalCount,
                pageSize: action.pageSize,
                category: action.category
            }
            return stateCopy;
        }
        case SET_PRODUCTS_CATEGORY:{
          //debugger
            stateCopy.products = {...state.products, category: action.category}
            return stateCopy
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
            stateCopy.filter = JSON.parse(JSON.stringify(state.filter));
            stateCopy.filter.is_show = !state.filter.is_show;
            stateCopy.filter.current_category = action.current_category
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
          //debugger
            stateCopy.products = {...state.products, currentPage: action.currentPage}
            return stateCopy;
        }
        default:
            return state;
    }
}
export const getBadCategory = () =>({type: BAD_CATEGORY})
export const setProductsAC = (items, totalCount, category, pageSize) =>({type: SET_PRODUCTS, items, totalCount, category, pageSize});
export const setProductsCategoryAC = (category) => ({type: SET_PRODUCTS_CATEGORY, category})
export const activateCheckBoxAC = (categorySlug, itemSlug) =>({type: ACTIVATE_CHECKBOX, categorySlug: categorySlug, itemSlug: itemSlug});
export const disactiveteCheckBoxAC = (categorySlug, itemSlug) =>({type: DISACTIVATE_CHECKBOX, categorySlug: categorySlug, itemSlug: itemSlug});
export const showHiddenPopupAC = (current_category) => ({type: CHANGE_FILTER_POPUP_SHOW_STATE, current_category: current_category});
export const setCurrentPageAC = (totalPage) =>({type: SET_CURRENT_PAGE, currentPage: totalPage});
export default catalogReducer;
