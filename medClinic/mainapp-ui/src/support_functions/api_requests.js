import * as axios from 'axios'
const SERVER_API_START_URL = "http://127.0.0.1:8000/api/"
export function getApiResponse(apiUrl, token=false, goodResponseHandler = standartGoodResponseHandler, badResponseHandler = standartErrorResponseHandler) {
    console.log(`Send get response: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (token){
        option["Authorization"] = `Token ${token}`
        console.log(`With token: ${token}`)
    }
    
    axios.get(apiUrl, {headers: option}).then(response => {
        console.log(response.data)
        goodResponseHandler(response.data)
        
    }).catch(err => {
        console.log(err)
        badResponseHandler()

    })
}
export function putApiRequest(apiUrl, token=false, goodResponseHandler = standartGoodResponseHandler, badResponseHandler = standartErrorResponseHandler) {
    console.log(`Send put request: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (token){
        option["Authorization"] = `Token ${token}`
        console.log(`With token: ${token}`)
    }
    axios.put(apiUrl, {}, {headers: option}
    ).then(response => {
        goodResponseHandler(response)
    }).catch(err => {
        badResponseHandler(err)
    })
    
}
export function postApiRequest(apiUrl, data, goodResponseHandler = standartGoodResponseHandler, badResponseHandler = standartErrorResponseHandler, token=false) {
    console.log(`Send post request: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (token){
        option["Authorization"] = `Token ${token}`
        console.log(`With token: ${token}`)
    }
    axios({
        method: 'post',
        url: apiUrl,
        data: data,
        headers: option
      }).then(response => {
        goodResponseHandler(response)
    }).catch((err) =>{
        badResponseHandler(err)
    })
    
}

export function deleteApiRequest(apiUrl, token=false, goodResponseHandler = standartGoodResponseHandler, badResponseHandler = standartErrorResponseHandler) {
    console.log(`Send post request: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (token){
        option["Authorization"] = `Token ${token}`
        console.log(`With token: ${token}`)
    }
    axios({
        method: 'delete',
        url: apiUrl,
        headers: option
      }).then(response => {
        goodResponseHandler(response)
    }).catch(err => {
        badResponseHandler(err)
    })
}

export function standartGoodResponseHandler(response) {
    console.log(response)
}

export function standartErrorResponseHandler(err) {
    if (err.response) {
        // Request made and server responded
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    } else if (err.request) {
        // The request was made but no response was received
        console.log(err.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message);
    }
}

export default SERVER_API_START_URL

// user cart
export function getUserCart(token, setCart, onBadResponse){
    const cartUrl = `${SERVER_API_START_URL}cart/current_customer_cart/`
    const setCartFromResponse = (responseData) => {
      setCart(responseData)
    }
  
    getApiResponse(cartUrl, token, setCartFromResponse, onBadResponse)
  }
  
  
  // user data
  export function getActualUser(token, setUserData, setIsAuth){
    const url = `${SERVER_API_START_URL}auth/users/user-data/`
    const setUserFromResponse = (response) => {
      let userData = {
        userId: response.user.id,
        username: response.user.username,
        first_name: response.user.customer.first_name,
        last_name: response.user.customer.second_name,
        father_name: response.user.customer.father_name,
        email: response.user.email,
        customer: response.user.customer,
        token: response.token,
        is_anon: response.is_anon,
      }
      setUserData(userData)
      setIsAuth(true)
    }
  
    getApiResponse(url, token, setUserFromResponse)
  }

export function createOrder(token, data, setCart){
    const url = `${SERVER_API_START_URL}orders/create/`
    const setNewCartResponse = (response) => {
        if (response.cart.products == null){
            response.cart.products = []
        }
        setCart(response.cart)
      }
    postApiRequest(url, data, setNewCartResponse, ()=>{}, token)
}
  