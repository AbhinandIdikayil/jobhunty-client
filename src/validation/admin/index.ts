
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


export const AddCategoryValidation = Yup.object().shape({
    name: Yup
        .string()
        .required('name is required')
        .matches(/^[^0-9]*$/, 'Numbers are not allowed'),
    description: Yup
        .string()
        .required('description is required')
        .matches(/^[^0-9]*$/,'Numbers are not allowed')
        .min(10,'atleast 10 character'),
})