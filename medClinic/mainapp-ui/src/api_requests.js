import * as axios from 'axios'
const SERVER_API_START_URL = "http://127.0.0.1:8000/api/"
export function getApiResponse(apiUrl, onGoodResponce, onBadResponse, token=false) {
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
        onGoodResponce(response.data)
    }).catch(err => {
        console.log(err)
        onBadResponse()

    })
}
export function putApiRequest(apiUrl, token=false) {
    console.log(`Send put request: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (token){
        option["Authorization"] = `Token ${token}`
        console.log(`With token: ${token}`)
    }
    axios.put(apiUrl, {}, {headers: {"Authorization" : `Token ${token}`}}
    ).then(response => {
        console.log(response.status)
        return response.status
    }).catch(err => {
        console.log(err)
        return err.status
    })
    
}
export function postApiRequest(apiUrl, data, goodResponseHandler = (response) =>{console.log(response)}, badResponseHandler = (err)=>{console.log(err)}) {
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
export default SERVER_API_START_URL