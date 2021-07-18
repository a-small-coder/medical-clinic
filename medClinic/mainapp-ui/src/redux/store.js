import headerReducer from "./header-reducer";
import {combineReducers, createStore} from 'redux';
import footerReducer from "./footer-reducer";
import catalogReducer from "./catalog-reducer";


let reducers = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    catalog: catalogReducer,
})

let store = createStore(reducers);


window.tate = store.getState();

export default  store


