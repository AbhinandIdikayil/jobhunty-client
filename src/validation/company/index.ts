
import * as Yup from 'yup'




export const companyProfile = Yup.object().shape({
    website: Yup
        .string()
        .required('website is required'),
    location: Yup
        .array()
        .of(Yup.string()),
        // .required('location sdsdis required'),
    date: Yup
        .string(),
        // .required('Date is required'),
    description: Yup
        .string()
        .min(6, 'min 5 char needed')
        .required('desciption is required'),
    employee: Yup 
        .string()
        .min(2,'min 2 employee is required')
})



export const socialLinks = {
    instagram: '',
    twitter: '',
    facebook: '',
    linkedIn: '',
    youtube: ''
}

export const socialLinksValidation = Yup.object().shape({
    instagram: Yup
        .string(),
    twitter: Yup
        .string(),
    facebook: Yup
        .string(),
    linkedIn: Yup
        .string(),
    youtube: Yup
        .string()
})