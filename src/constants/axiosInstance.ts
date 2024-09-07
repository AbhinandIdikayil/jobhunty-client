import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ErrorResponse } from 'react-router-dom';
import { logout } from 'src/redux/actions/userAction';
import { getGlobalDispatch } from 'src/redux/global';
import store from 'src/redux/store';

const AUTH_SERVICE_URL = String(process.env.AUTH_SERVICE_URL)
const COMPANY_SERVICE_URL = String(process.env.COMPANY_SERVICE_URL)
const USER_SERVICE_URL = String(process.env.USER_SERVICE_URL)
const CLOUDINARY = String(process.env.CLOUDINARY)
const JOB_SERVICE_URL = String(process.env.JOB_SERVICE_URL)
const CHAT_SERVICE_URL = String(process.env.CHAT_SERVICE_URL)
const NOTIFICATION_SERVICE_URL = String(process.env.NOTIFICATION_URL)


const createAxiosInstance = (url: string): AxiosInstance => {
    const instance = axios.create({
        baseURL: url,
        withCredentials: true,
    })

    instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
        return request;
    });

    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        async (error: AxiosError<ErrorResponse>) => {
            if (!error.config) {
                return Promise.reject(error);
            }

            const originalRequest = error.config as InternalAxiosRequestConfig & {
                _retry?: boolean;
            };

            // if (error.response?.status === 403) {
            //     if (error.response.data && error.response.data.message === 'User is blocked') {
            //         handleLogout();
            //         toast.error('Your account has been blocked. Please contact support.');
            //         return Promise.reject(error);
            //     }
            // }

            if (error.response?.status === 401) {
                console.log('--------------- intercepter ------------')
                const token = await refreshToken()
                console.log('token---------------',token)
                return token
            }
            return instance(originalRequest)
        },
    );
    return instance;
}

const refreshToken = async () => {
    try {
        const response = await fetch(
            `${process.env.AUTH_SERVICE_URL}/refresh`,
            {
                method: 'POST',
                credentials: 'include'
            }
        );
        console.log(response)
        if(response.status == 401) {
            // window.location.href = '/home'
            Logout()
              return response
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}

function Logout() {
    const dispatch = getGlobalDispatch();
  if (dispatch) {
    dispatch(logout(undefined));
  }
}



export const AXIOS_INSTANCE_AUTH = createAxiosInstance(AUTH_SERVICE_URL)

//  axios.create({
// baseURL: AUTH_SERVICE_URL,
// withCredentials: true
// })

export const AXIOS_INSTANCE_COMPANY = createAxiosInstance(COMPANY_SERVICE_URL)

//  axios.create({
// baseURL: COMPANY_SERVICE_URL,
// withCredentials: true
// })

export const AXIOS_INSTANCE_USER = createAxiosInstance(USER_SERVICE_URL)

//  axios.create({
// baseURL: USER_SERVICE_URL,
// withCredentials: true
// })

export const AXIOS_INSTANCE_NOTIFICATION = createAxiosInstance(NOTIFICATION_SERVICE_URL)

//  axios.create({
// baseURL: NOTIFICATION_SERVICE_URL,
// withCredentials: true
// })


export const AXIOS_INSTANCE_JOB = createAxiosInstance(JOB_SERVICE_URL)

//  axios.create({
// baseURL: JOB_SERVICE_URL,
// withCredentials: true
// })

export const AXIOS_INSTANCE_CHAT = createAxiosInstance(CHAT_SERVICE_URL)

//  axios.create({
// baseURL: CHAT_SERVICE_URL,
// withCredentials: true
// })

export const CLOUDINARY_INSTANCE = axios.create({
    baseURL: CLOUDINARY,
    withCredentials: false
})

