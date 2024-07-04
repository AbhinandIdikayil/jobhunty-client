import axios from 'axios'

const AUTH_SERVICE_URL = String(process.env.AUTH_SERVICE_URL)


export const AXIOS_INSTANCE_AUTH = axios.create({
    baseURL:AUTH_SERVICE_URL,
    withCredentials:true
})


