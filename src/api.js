import axios from 'axios'

export function getTodos() {
    return axios.get('https://fakerapi.it/api/v2/books?_quantity=1')    
}

export function postTodo() {
    return axios.post('/fakeapi/todos')
}
