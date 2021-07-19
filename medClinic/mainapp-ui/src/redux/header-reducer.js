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
                    {id: 1, sub_category: "каталог анализов", link: "/catalog"},
                    {id: 2, sub_category: "уникальные анализы", link: "/catalog"},
                    {id: 3, sub_category: "комплексы анализов", link: "/catalog"},
                ],
                id: 1,
                spoilerActive: false,
                link: "/catalog"
            },
            {
                category: "услуги",
                sub_categories: [
                    {id: 1, sub_category: "каталоог услуг", link: "/service"},
                    {id: 2, sub_category: "записаться к врачу", link: "/service"},
                    {id: 3, sub_category: "вакцинация", link: "/service"},
                ],
                id: 2,
                spoilerActive: false,
                link: "/service"
            },
            {
                category: "акции",
                sub_categories: [],
                id: 3,
                spoilerActive: false,
                link: "/stocks"
            },
            {
                category: "о компании",
                sub_categories: [],
                id: 4,
                spoilerActive: false,
                link: "/aboutus"
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
                if (action.id === c.id){
                    return { ...c, spoilerActive: true};
                }
                return { ...c};
            });
            return stateCopy
        }
        case DISACTIVETE_SPOILER: {
            stateCopy.nav = {...state.nav}
            stateCopy.nav.categories = state.nav.categories.map( c => {
                if (action.id === c.id){
                    return { ...c, spoilerActive: false};
                }
                return { ...c};
            });
            return stateCopy
        }
        default:
            return state;
    }
}
export const updateNewSearchTextAC = (text) =>({type: UPDATE_NEW_SEARCH_TEXT, searchText: text});
export const switchSpoilerModAC = (spoilerMod) =>({type: SWITCH_SPOILER_MODE, spoilerMod: spoilerMod});
export const activateSpoilerAC = (id) =>({type: ACTIVETE_SPOILER, id: id});
export const disactiveteSpoilerAC = (id) =>({type: DISACTIVETE_SPOILER, id: id});
export default headerReducer;