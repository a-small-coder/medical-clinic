const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';


let initialState = {
    search: {
        newSearchText: "Поиск по сайту",
        defaultSearchText: "Поиск по сайту"
    }
}

const headerReducer = (state = initialState, action) =>{

    switch (action.type){
        case UPDATE_NEW_SEARCH_TEXT: {
            let stateCopy = {...state};
            stateCopy.search = {...state.search};
            stateCopy.search.newSearchText = action.searchText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const updateNewSearchTextAC = (text) =>({type: UPDATE_NEW_SEARCH_TEXT, searchText: text});
export default headerReducer;