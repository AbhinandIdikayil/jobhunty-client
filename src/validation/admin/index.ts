
import * as Yup from 'yup'

export const adminLoginInitialValues = {
    email:'',
    password:''
}

export const adminLoginValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .trim('cannot include spce')
        .strict(true)
        .email('email is invalid')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,'email is invalid')
        .required('email is required'),
    password: Yup 
        .string()
        .trim('cannot include space')
        .strict(true)
        .required('password is required')
})
