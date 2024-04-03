import axios from "axios"

/**
export function retrieveHelloWorldBean(){
    // Axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return axios.get(`http://localhost:8080/hello-world`)
}
**/

//export const retrieveHelloWorldBean = () => axios.get(`http://localhost:8080/hello-world`)
const apiClient= axios.create({
    baseURL: 'http://localhost:8080'
})

export const retrieveHelloWorldBean = (username) => apiClient.get(`/hello-world`)
export const retriveBoardListForUsername = (username) => apiClient.get(`/retriveBoardList/${username}`)

