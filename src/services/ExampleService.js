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

    add(car) {
        axios.post('endpoint', car)
    }

    update(id, car) {
        axios.put(`endpoint/${id}`, car)
    }

    delete(id) {
        axios.delete(`endpoint/${id}`)
    }
}

export const EXAMPLESERVICE = new ExampleService()