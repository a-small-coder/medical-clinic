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
export function postApiRequest(apiUrl, data, goodResponseHandler = standartGoodResponseHandler, badResponseHandler = standartErrorResponseHandler) {
    console.log(`Send post request: ${apiUrl}`)
    axios({
        method: 'post',
        url: apiUrl,
        data: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => {
        goodResponseHandler(response)
    }).catch(err => {
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
    console.log(err)
}

export default SERVER_API_START_URL