import * as axios from 'axios'
const SERVER_API_START_URL = "http://127.0.0.1:8000/api/"
export function getApiResponse(apiUrl, onGoodResponce, onBadResponse) {
    console.log(`Send response: ${apiUrl}`)
    axios.get(apiUrl).then(response => {
        console.log(response.data)
        onGoodResponce(response.data)
    }).catch(err => {
        console.log(err)
        onBadResponse()

    })
}
export function putApiRequest(apiUrl) {
    console.log(`Send request: ${apiUrl}`)
    axios.put(apiUrl).then(response => {
        console.log(response.status)
        return response.status
    }).catch(err => {
        console.log(err)
        return err.status
    })
    
}
export default SERVER_API_START_URL