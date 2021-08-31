const CART_ID = "CART_ID";
const SET_OFFICE_TYPE = "SET_OFFICE_TYPE";
const SET_CHOOSEN_OFFICE = "SET_CHOOSEN_OFFICE";
const SET_CUSTOMER = "SET_CUSTOMER"

let initialState = {
    cart_id: 0,
    type_office: "", // 0 - "in office" or 1 - "home"
    choosen_office: 'Палата №6',
    
    
}

const orderReducer = (state = initialState, action) =>{
    switch (action.type){
        case CART_ID: {
            let stateCopy= {...state, cart_id: action.cart_id}
            return stateCopy
        }
        case SET_OFFICE_TYPE: {
            
            let stateCopy = {...state, type_office: action.type_office}
            return stateCopy
        }
        case SET_CHOOSEN_OFFICE:{
            
            let stateCopy = {...state, choosen_office: action.choosen_office}
            return stateCopy
        }
        case SET_CUSTOMER: {
            let stateCopy = {...state}
            stateCopy.customer = {...action.customer}
            return stateCopy
        }
        default: 
            return state
    }
}

export const setCartIdAC = (cart_id) => ({type: CART_ID, cart_id});
export const setOfficeTypeAC = (type_office) => ({type: SET_OFFICE_TYPE, type_office});
export const setChoosenOfficeAC = (choosen_office) => ({type: SET_CHOOSEN_OFFICE, choosen_office});
export const setCustomerAC = (customer) => ({type: SET_CUSTOMER, customer})
export default orderReducer