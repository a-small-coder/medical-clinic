import headerReducer from "./header-reducer";
import {combineReducers, createStore} from 'redux';
import footerReducer from "./footer-reducer";
import catalogReducer from "./catalog-reducer";
import productReducer from "./product-reducer";
import mainPageReducer from "./mainPage-reducer";


let reducers = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    catalog: catalogReducer,
    productPage: productReducer,
    mainPage: mainPageReducer 
})

let store = createStore(reducers);


window.tate = store.getState();

export default  store


