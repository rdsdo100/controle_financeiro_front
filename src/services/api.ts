import axios from "axios"

const url = process.env.REACT_APP_SERVER_ACESS

const api = axios.create({
    baseURL: url,
    headers: {
        
    }

})

const apiLogin = axios.create({
    baseURL: url,

})

export { api , apiLogin}