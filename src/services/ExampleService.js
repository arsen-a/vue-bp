import axios from 'axios'

class ExampleService {
    constructor() {
        this.axios = axios
        this.axios.defaults.baseURL = 'api url here' 
    }

    getAll() {
        return this.axios.get('endpoint')
    }

    getSingle(id) {
        return this.axios.get(`endpoint/${id}`)
    }

    add(object) {
        return this.axios.post('endpoint', object)
    }

    update(id, object) {
        return this.axios.put(`endpoint/${id}`, object)
    }

    delete(id) {
        return this.axios.delete(`endpoint/${id}`)
    }
}

export const exampleService = new ExampleService()