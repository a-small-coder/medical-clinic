import headerReducer from "./header-reducer";
import {combineReducers, createStore} from 'redux';


let reducers = combineReducers({
    header: headerReducer,
})

let store = createStore(reducers);


window.store = store;

export default  store


