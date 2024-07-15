import * as Yup from 'yup'


export const companyProfileInitialState = {
    webiste:'',
    location:[''],
    date:'',
    // techStacks:['']
}

export const companyProfile = Yup.object().shape({
    website: Yup
        .string(),
    location: Yup
        .array()
        .of(Yup.string().matches(/[a-zA-Z]/,'only char allowed'))
        .required('location is required'),
    date: Yup.date()
        .max(new Date(),'Date cannot be in future')
        .required('Date is required')

})