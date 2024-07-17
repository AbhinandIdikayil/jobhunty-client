
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
        .min(2, 'min 2 employee is required')
})





export const socialLinksValidation = Yup.object().shape({
    instagram: Yup
        .string()
        .matches(
            /^https:\/\/www\.instagram\.com\/in\//,
            'instagram link must start with "https://www.instagram.com/in/"'
        ),
    twitter: Yup
        .string()
        .matches(
            /^https:\/\/www\.twitter\.com\/in\//,
            'Twitter link must start with "https://www.twitter.com/in/"'
        ),
    facebook: Yup
        .string()
        .matches(
            /^https:\/\/www\.facebook\.com\/in\//,
            'Facebook link must start with "https://www.facebook.com/in/"'
        ),
    LinkedInLink: Yup
        .string()
        .matches(
            /^https:\/\/www\.linkedin\.com\/in\//,
            'LinkedIn link must start with "https://www.linkedin.com/in/"'
        )
        .required('Linkedin link is required'),
    youtube: Yup
        .string()
        .matches(
            /^https:\/\/www\.youtube\.com\/in\//,
            'Youtube link must start with "https://www.youtube.com/in/"'
        )
})