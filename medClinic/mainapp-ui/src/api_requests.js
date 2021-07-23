import * as axios from 'axios'
const SERVER_API_START_URL = "http://127.0.0.1:8000/api/"
export function getApiResponse (apiUrl, onGoodResponce, onBadResponse){
    console.log(`Send response: ${apiUrl}`)
            axios.get(apiUrl).then(response => {
                console.log(response.data)
                onGoodResponce(response.data)
        }).catch(err => {
            console.log(err)
            onBadResponse()
            
        })
}
export default SERVER_API_START_URL