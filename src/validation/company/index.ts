
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


export const postJobValidationSchema = Yup.object().shape({
    jobTitle: Yup
        .string()
        .required('Title is required')
        .matches(/^[^0-9]*$/, 'Numbers are not allowed'),
    description: Yup
        .string()
        .required('Description is required')
        .matches(/^[^0-9]*$/, 'Numbers are not allowed'),
    employment: Yup
        .string()
        .required('Employment type is required'),
    category: Yup
        .string()
        .required('Category is required'),
    // joblocation: Yup
    //     .string(),
    salaryrange: Yup.object().shape({
        from: Yup
            .number()
            .typeError('From must be a number')
            .required('From is requrid')
            .min(0, 'From must be atleast 0'),
        to: Yup
            .number()
            .typeError('To must be a number')
            .required('To is required')
            .min(Yup.ref('from'), 'To must be greater than or equal to From'),
    }),
    // experince: Yup
    //     .number()
    //     .required('Experience is required')
    //     .min(0, 'Experience must be at least 0'),
    companyId: Yup
        .string(),
    expiry: Yup
        .date()
        .required('Expiry date is required')
        .min(new Date(), 'Expiry date must be in the future'),
    responsibilities: Yup.array()
        .of(
            Yup.string()
                .trim()
                .strict(true)
                .min(3, 'min 3 character')
        )
        .min(2, 'At least one responsibilities is required')
        .required('resonsibilities are required'),
    skills: Yup.array()
        .of(
            Yup.string()
                .trim()
                .strict(true)
                .min(3, 'min 3 character')
        )
        .min(2, 'At least one skill is required')
        .required('Skills are required'),
    qualification: Yup.array()
        .of(
            Yup.string()
                .trim()
                .strict(true)
                .min(3, 'min 3 character')
        )
        .min(2, 'At least one qualification is required')
        .required('qualification are required'),
})