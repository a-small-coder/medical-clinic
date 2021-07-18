const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';


let initialState = {
    search: {
        newSearchText: "Поиск по сайту",
        defaultSearchText: "Поиск по сайту"
    }
}

const headerReducer = (state = initialState, action) =>{

    if (action.type === UPDATE_NEW_SEARCH_TEXT){
        state.search.newSearchText = action.searchText;
    }

    return state
}
export const updateNewSearchTextAC = (text) =>({type: UPDATE_NEW_SEARCH_TEXT, searchText: text});
export default headerReducer;