import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('name is required'),
    email: Yup
        .string()
        .required('Email is required')
        .email('Invalid email')
        .matches(/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i, 'email is invalid'),
    password: Yup
        .string()
        .required('password is required')
        .min(4, 'atleast 4 charchter')
})


export const otpValidationSchema = Yup.object().shape({
    otp: Yup
        .number()
        .typeError('only numbers are allowed')
        .required('otp is required')

})