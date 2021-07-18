const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT';
const SWITCH_SPOILER_MODE = "SWITCH-SPOILER-MODE";
const ACTIVETE_SPOILER = "ACTIVETE-SPOILER";
const DISACTIVETE_SPOILER = "DISACTIVETE-SPOILER";

let initialState = {
    search: {
        newSearchText: "Поиск по сайту",
        defaultSearchText: "Поиск по сайту"
    },
    nav: {
        initSpoiler: false,
        categories: [
            {
                category: "анализы",
                sub_categories: [
                    {id: 1, sub_category: "каталог анализов", link: ""},
                    {id: 2, sub_category: "уникальные анализы", link: ""},
                    {id: 3, sub_category: "комплексы анализов", link: ""},
                ],
                id: 1,
                spoilerActive: false,
                link: ""
            },
            {
                category: "услуги",
                sub_categories: [
                    {id: 1, sub_category: "каталоог услуг", link: ""},
                    {id: 2, sub_category: "записаться к врачу", link: ""},
                    {id: 3, sub_category: "вакцинация", link: ""},
                ],
                id: 2,
                spoilerActive: false,
                link: ""
            },
            {
                category: "акции",
                sub_categories: [],
                id: 3,
                spoilerActive: false,
                link: ""
            },
            {
                category: "о компании",
                sub_categories: [],
                id: 4,
                spoilerActive: false,
                link: ""
            },
        ]
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
                return { ...c, spoilerActive: true};
            });
            return stateCopy
        }
        case DISACTIVETE_SPOILER: {
            stateCopy.nav = {...state.nav}
            stateCopy.nav.categories = state.nav.categories.map( c => {
                return { ...c, spoilerActive: false};
            });
            return stateCopy
        }
        default:
            return state;
    }
}
export const updateNewSearchTextAC = (text) =>({type: UPDATE_NEW_SEARCH_TEXT, searchText: text});
export const switchSpoilerModAC = (spoilerMod) =>({type: UPDATE_NEW_SEARCH_TEXT, spoilerMod: spoilerMod});
export const activateSpoilerAC = () =>({type: UPDATE_NEW_SEARCH_TEXT});
export const disactiveteSpoilerAC = () =>({type: UPDATE_NEW_SEARCH_TEXT});
export default headerReducer;