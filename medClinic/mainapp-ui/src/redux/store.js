import headerReducer from "./header-reducer";
import {combineReducers, createStore} from 'redux';
import footerReducer from "./footer-reducer";
import catalogReducer from "./catalog-reducer";
import productReducer from "./product-reducer";


let reducers = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    catalog: catalogReducer,
    productPage: productReducer 
})

let store = createStore(reducers);


window.tate = store.getState();

export default  store


