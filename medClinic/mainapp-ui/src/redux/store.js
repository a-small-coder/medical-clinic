import headerReducer from "./header-reducer";
import {combineReducers, createStore} from 'redux';


let reducers = combineReducers({
    header: headerReducer,
})

let store = createStore(reducers);


// let store = {
//     _state : {
//         header: {
//             search: {
//                 newSearchText: "Поиск по сайту",
//                 defaultSearchText: "Поиск по сайту"
//             }
            
//         }
//     },
//     getState(){
//         return this._state;
//     },
//     subscribe(observer){
//         this._callSubscriber = observer;
//     },
//     _callSubscriber(){

//     },
//     dispatch(action){
//         headerReducer(this._state.header, action);
//         this._callSubscriber();
//     }

// }


window.store = store;

export default  store


