import * as Yup from 'yup'


export const companyProfileInitialState = {
    website: '',
    location: [''],
    date: '',
    description: ''
    // techStacks:['']
}

export const companyProfile = Yup.object().shape({
    website: Yup
        .string(),
    location: Yup
        .array()
        .of(Yup.string().matches(/[a-zA-Z]/, 'only char allowed'))
        .required('location is required'),
    date: Yup.date()
        .max(new Date(), 'Date cannot be in future')
        .required('Date is required'),
    description: Yup
        .string()
        .min(6, 'min 5 char needed')

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