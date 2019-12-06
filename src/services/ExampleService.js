import axios from 'axios'

export default class ExampleService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/' 
    }

    getAll() {
        return axios.get('endpoint')
    }

    getSingle(id) {
        return axios.get(`endpoint/${id}`)
    }

    add(object) {
        axios.post('endpoint', object)
    }

    update(id, object) {
        axios.put(`endpoint/${id}`, object)
    }

    delete(id) {
        axios.delete(`endpoint/${id}`)
    }
}

export const EXAMPLESERVICE = new ExampleService()