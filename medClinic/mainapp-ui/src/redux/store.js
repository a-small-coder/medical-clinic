import headerReducer from "./header-reducer";
import {combineReducers, createStore} from 'redux';
import footerReducer from "./footer-reducer";
import catalogReducer from "./catalog-reducer";
import productReducer from "./product-reducer";
import mainPageReducer from "./mainPage-reducer";
import authReducer from "./auth-reducer";
import orderReducer from "./order-reducer";


let reducers = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    catalog: catalogReducer,
    productPage: productReducer,
    mainPage: mainPageReducer,
    auth: authReducer,
    order: orderReducer, 
})

let store = createStore(reducers);


window.state = store.getState();

export default  store


