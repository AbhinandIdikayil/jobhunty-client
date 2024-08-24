import axios from 'axios'

const AUTH_SERVICE_URL = String(process.env.AUTH_SERVICE_URL)
const COMPANY_SERVICE_URL = String(process.env.COMPANY_SERVICE_URL)
const USER_SERVICE_URL = String(process.env.USER_SERVICE_URL)
const CLOUDINARY = String(process.env.CLOUDINARY)
const JOB_SERVICE_URL = String(process.env.JOB_SERVICE_URL)
const CHAT_SERVICE_URL = String(process.env.CHAT_SERVICE_URL)
const NOTIFICATION_SERVICE_URL = String(process.env.NOTIFICATION_URL)

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

export const AXIOS_INSTANCE_NOTIFICATION = axios.create({
    baseURL:NOTIFICATION_SERVICE_URL,
    // withCredentials: true
})


// AXIOS_INSTANCE_USER.interceptors.response.use(
//     (response: AxiosResponse) => {
//       // If the request is successful, simply return the response
//       return response;
//     },
//     (error: AxiosError) => {
//   store.dispatch(logoutUser())
//       if (error.response && error.response.status === 403) {
//         // Handle 403 Forbidden response here
//         console.warn('Access forbidden: You do not have the necessary permissions.');
  
//         // Optionally, you can dispatch an action to log out the user
  
//         // Redirect the user to a login page or a forbidden page
//         window.location.href = '/login'; // Adjust the path as needed
//       }
  
//       // Optionally, you can return a Promise.reject to propagate the error to the caller
//       return Promise.reject(error);
//     }
//   );

export const AXIOS_INSTANCE_JOB = axios.create({
    baseURL:JOB_SERVICE_URL,
    withCredentials: true
})

export const AXIOS_INSTANCE_CHAT = axios.create({
    baseURL:CHAT_SERVICE_URL,
    withCredentials:true
})

export const CLOUDINARY_INSTANCE = axios.create({
    baseURL:CLOUDINARY,
    withCredentials: false
})


