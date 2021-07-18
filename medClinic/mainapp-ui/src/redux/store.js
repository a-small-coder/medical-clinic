import headerReducer from "./header-reducer";
import {combineReducers, createStore} from 'redux';
import footerReducer from "./footer-reducer";


let reducers = combineReducers({
    header: headerReducer,
    footer: footerReducer,
})

let store = createStore(reducers);


window.store = store;

export default  store


