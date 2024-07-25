import axios from 'axios'

const AUTH_SERVICE_URL = String(process.env.AUTH_SERVICE_URL)
const COMPANY_SERVICE_URL = String(process.env.COMPANY_SERVICE_URL)
const USER_SERVICE_URL = String(process.env.USER_SERVICE_URL)
const CLOUDINARY = String(process.env.CLOUDINARY)
const JOB_SERVICE_URL = String(process.env.JOB_SERVICE_URL)

export const AXIOS_INSTANCE_AUTH = axios.create({
    baseURL:AUTH_SERVICE_URL,
    withCredentials:true
})

export const AXIOS_INSTANCE_COMPANY = axios.create({
    baseURL:COMPANY_SERVICE_URL,
    withCredentials: true
})

export const AXIOS_INSTANCE_USER = axios.create({
    baseURL:USER_SERVICE_URL,
    withCredentials: true
})

export const AXIOS_INSTANCE_JOB = axios.create({
    baseURL:JOB_SERVICE_URL,
    withCredentials: true
})

export const CLOUDINARY_INSTANCE = axios.create({
    baseURL:CLOUDINARY,
    withCredentials: false
})


