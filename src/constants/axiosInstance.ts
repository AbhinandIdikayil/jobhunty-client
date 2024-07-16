import axios from 'axios'

const AUTH_SERVICE_URL = String(process.env.AUTH_SERVICE_URL)
const COMPANY_SERVICE_URL = String(process.env.COMPANY_SERVICE_URL)
console.log(COMPANY_SERVICE_URL,AUTH_SERVICE_URL)


export const AXIOS_INSTANCE_AUTH = axios.create({
    baseURL:AUTH_SERVICE_URL,
    withCredentials:true
})

export const AXIOS_INSTANCE_COMPANY = axios.create({
    baseURL:COMPANY_SERVICE_URL,
    withCredentials: true
})

export const CLOUDINARY_INSTANCE = axios.create({
    baseURL:process.env.CLOUDINARY,
    withCredentials: true
})

