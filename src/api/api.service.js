class ApiService {
    constructor() {
        this.url = `http://localhost:3000`
    }

    create = (endpoint, obj) => {
        const INIT = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }

        return fetch(`${this.url}/${endpoint}`, INIT).then(resp => resp.json()).then(json => json.map(obj => Object.assign(new Target(), obj)))
    }

    getAll = (endpoint, Target) => {
        return fetch(`${this.url}/${endpoint}`).then(resp => resp.json()).then(json => json.map(obj => Object.assign(new Target(), obj)))
    }

    getById = (endpoint, Target, id) => {
        return fetch(`${this.url}/${endpoint}/${id}`).then(resp => resp.json()).then(json => Object.assign(new Target(), json))
    }

    update = (endpoint, obj) => {
        const INIT = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }

        return fetch(`${this.url}/${endpoint}/${obj.id}`, INIT).then(resp => resp.json()).then(json => json.map(obj => Object.assign(new Target(), obj)))
    }

    deleteAll = (endpoint) => {
        const INIT = {
            method: 'DELETE',
        }
        return fetch(`${this.url}/${endpoint}`, INIT)
    }

    deleteById = (endpoint, id) => {
        const INIT = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        }
        return fetch(`${this.url}/${endpoint}/${obj.id}`, INIT)

    }
}

export default Object.freeze(new ApiService())