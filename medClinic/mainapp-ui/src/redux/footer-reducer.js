const SWITCH_SPOILER_MODE = "SWITCH-SPOILER-MODE";
const ACTIVETE_SPOILER = "ACTIVETE-SPOILER";
const DISACTIVETE_SPOILER = "DISACTIVETE-SPOILER";

let initialState = {
    nav: {
        initSpoiler: false,
        categories: [
            {
                category: "Меню",
                sub_categories: [
                    {id: 1, sub_category: "Каталог анализов", link: "/analyzes"},
                    {id: 2, sub_category: "Наши услуги", link: "/service"},
                    {id: 3, sub_category: "Вакцинация", link: "/service/vac"},
                    {id: 4, sub_category: "Акции", link: "/stocks"},
                ],
                id: 1,
                spoilerActive: false,
            },
            {
                category: "О Нас",
                sub_categories: [
                    {id: 1, sub_category: "История компании", link: "/about-us"},
                    {id: 2, sub_category: "Клиентам", link: "/forclients"},
                    {id: 3, sub_category: "Партнеры", link: "/forpartners"},
                    {id: 4, sub_category: "Лицензия", link: "/license"},
                ],
                id: 2,
                spoilerActive: false,
            },
            {
                category: "Мы в соцсетях",
                sub_categories: [
                    {id: 1, sub_category: "Instagramm", link: "/brokelink"},
                    {id: 2, sub_category: "Facebook", link: "/brokelink"},
                    {id: 3, sub_category: "Twitter", link: "/brokelink"},
                    {id: 4, sub_category: "Telegram", link: "/brokelink"},
                    {id: 5, sub_category: "Вконтакте", link: "/brokelink"},
                ],
                id: 3,
                spoilerActive: false,
            }
        ]
    }
}

const footerReducer = (state = initialState, action) =>{
    let stateCopy = {
        ...state};
    switch (action.type){
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
export const switchSpoilerModAC = (spoilerMod) =>({type: SWITCH_SPOILER_MODE, spoilerMod: spoilerMod});
export const activateSpoilerAC = (id) =>({type: ACTIVETE_SPOILER, id: id});
export const disactiveteSpoilerAC = (id) =>({type: DISACTIVETE_SPOILER, id: id});
export default footerReducer;