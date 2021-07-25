import * as axios from 'axios'
const SERVER_API_START_URL = "http://127.0.0.1:8000/api/"
export function getApiResponse(apiUrl, onGoodResponce, onBadResponse) {
    console.log(`Send get response: ${apiUrl}`)
    axios.get(apiUrl).then(response => {
        console.log(response.data)
        onGoodResponce(response.data)
    }).catch(err => {
        console.log(err)
        onBadResponse()

    })
}
export function putApiRequest(apiUrl) {
    console.log(`Send put request: ${apiUrl}`)
    axios.put(apiUrl, {withCredentials: true}).then(response => {
        console.log(response.status)
        return response.status
    }).catch(err => {
        console.log(err)
        return err.status
    })
    
}
export function postApiRequest(apiUrl, data, goodResponseHandler) {
    console.log(`Send post request: ${apiUrl}`)
    axios({
        method: 'post',
        url: apiUrl,
        data: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        withCredentials: true
      }).then(response => {
        goodResponseHandler(response.data)
    }).catch(err => {
        console.log(err)
    })
    
}
export default SERVER_API_START_URL