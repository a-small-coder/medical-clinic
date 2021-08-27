const SWITCH_PRODUCT_ACTIVE_CONTENT = "SWITCH_PRODUCT_ACTIVE_CONTENT";
const SET_PRODUCT = "SET_PRODUCT"


let initialState = {
    product:{
        
    },
    
}

const productReducer = (state = initialState, action) =>{
    let stateCopy = {
        ...state};
    switch (action.type){
        case SWITCH_PRODUCT_ACTIVE_CONTENT: {
            stateCopy.product = {...state.product, active_content_category: action.content_category}
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
export const switchProductActiveContentAC = (content_category) =>({type: SWITCH_PRODUCT_ACTIVE_CONTENT, content_category});
export const setProductAC = (product, isAcomplex) =>({type: SET_PRODUCT, product, isAcomplex});
export default productReducer;