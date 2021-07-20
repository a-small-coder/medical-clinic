const SWITCH_PRODUCT_ACTIVE_CONTENT = "SWITCH_PRODUCT_ACTIVE_CONTENT";
const SET_PRODUCT = "SET_PRODUCT"


let initialState = {
    product:{},
    
}

const productReducer = (state = initialState, action) =>{
    let stateCopy = {
        ...state};
    switch (action.type){
        case SWITCH_PRODUCT_ACTIVE_CONTENT: {
            debugger;
            stateCopy.product = {...state.product}
            stateCopy.product.content = state.product.content.map(c => {
                if (action.activeContentSlug === c.slug){
                    return {...c, active_block: true}
                }
                return {...c, active_block: false}
            })
            return stateCopy;
        }
        case SET_PRODUCT:{
            stateCopy.product = action.product
            stateCopy.product.isAcomplex = action.isAcomplex
            return stateCopy
        }
        default:
            return state;
    }
}
export const switchProductActiveContentAC = (activeContentSlug) =>({type: SWITCH_PRODUCT_ACTIVE_CONTENT, activeContentSlug: activeContentSlug});
export const setProductAC = (product, isAcomplex) =>({type: SET_PRODUCT, product, isAcomplex});
export default productReducer;