const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';
const SWITCH_SPOILER_MODE = "SWITCH-SPOILER-MODE";
const ACTIVETE_SPOILER = "ACTIVETE-SPOILER";
const DISACTIVETE_SPOILER = "DISACTIVETE-SPOILER";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PRODUCTS_COUNT_IN_CART = "SET_PRODUCTS_COUNT_IN_CART";
const SET_CART = "SET_CART";

let initialState = {
    search: {
        newSearchText: "Поиск по сайту",
        defaultSearchText: "Поиск по сайту"
    },
    nav: {
        initSpoiler: false, // depricated
        categories: []
    },
    cart: {
        id: 1,
        total_products: 0,
        products: [],

    }
}

const headerReducer = (state = initialState, action) =>{
    let stateCopy = {
        ...state};
    switch (action.type){
        case UPDATE_NEW_SEARCH_TEXT: {
            stateCopy.search = {...state.search};
            stateCopy.search.newSearchText = action.searchText;
            return stateCopy;
        }
        case SWITCH_SPOILER_MODE: {
            stateCopy.nav = {...state.nav};
            stateCopy.nav.initSpoiler = action.spoilerMod;
            return stateCopy;
        }
        case ACTIVETE_SPOILER: {
            stateCopy.nav = {...state.nav}
            stateCopy.nav.categories = state.nav.categories.map( c => {
                if (action.id === c.id){
                    return { ...c, spoilerActive: true};
                }
                return { ...c};
            });
            return stateCopy
        }
        case DISACTIVETE_SPOILER: {
            stateCopy.nav = {...state.nav}
            stateCopy.nav.categories = state.nav.categories.map( c => {
                if (action.id === c.id){
                    return { ...c, spoilerActive: false};
                }
                return { ...c};
            });
            return stateCopy
        }
        case SET_CATEGORIES: {
            stateCopy.nav = {...state.nav}
            stateCopy.nav.categories = action.categories
            stateCopy.nav.initSpoiler = false
            return stateCopy
        }
        case SET_PRODUCTS_COUNT_IN_CART:{
            stateCopy.cart = {...state.cart, total_products: action.productsCount}
            return stateCopy
        }
        case SET_CART:{
            debugger
            stateCopy.cart = {
                ...state.cart, 
                products: [...action.cart.products], 
                total_products: action.cart.products.length, 
                id: action.cart.id 
            }
            return stateCopy
        }
        default:
            return state;
    }
}
export const setCartAC = (cart) => ({type: SET_CART, cart})
export const setProductsCountInCartAC = (productsCount) => ({type: SET_PRODUCTS_COUNT_IN_CART, productsCount})
export const updateNewSearchTextAC = (text) =>({type: UPDATE_NEW_SEARCH_TEXT, searchText: text});
export const switchSpoilerModAC = (spoilerMod) =>({type: SWITCH_SPOILER_MODE, spoilerMod: spoilerMod});
export const activateSpoilerAC = (id) =>({type: ACTIVETE_SPOILER, id: id});
export const disactiveteSpoilerAC = (id) =>({type: DISACTIVETE_SPOILER, id: id});
export const setCategoriesAC = (categories) =>({type: SET_CATEGORIES, categories: categories});
export default headerReducer;