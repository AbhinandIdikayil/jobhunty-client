

export type adminReducer = {
    loading: boolean,
    request: any[],
    companies: {
        companies:Company[],
        totalCount:[{count:number}]
    },
    users: any[],
    err: null | any,
    role: 'admin' | null
}


export type CompanyRequest = {
    companyId: {
        _id: string,
        name: string,
        email: string,
        approvalStatus: string
    }
}

export type AddCategory = {
    name: string,
    description: string,
    image: string
}
export type IListCategory = {
    _id: string,
    name: string,
    description: string,
    image: string,
    status?:boolean
}

export type ISectors ={
    _id: string,
    name: string,
    image:string,
    status:boolean
}


export interface IAddCategory  {
    name: string,
    description: string,
    image?: string,
}


export interface IAddSector {
    name: string,
    image?: string
}

interface Company {
    _id: string,
    email:  string,
    name: string,
    password: string,
    description: string,
    contact: string,
    locations: string[],
    joinDate: Date,
    industry: string,
    images: string,
    benefits: [{
        icon: string,
        headline: string,
        description: string,
    }],
    foundedDate: Date,
    teams: [{
        name: string,
        profile: string,
        designation: string,
    }],
    techStack: string[],
    website: string,
    employees: string,
    coverImage: string,
    approvalStatus: {
        type: string,
        enum: ["Accepted", "Rejected", "Pending", "Message"],
        description: string,
        default:'Rejected'
    },
    profileCompleted: Boolean,
    profileCompletionStatus: {
        type: string,
        enum: ["1%", "2%", "3%"]
    },
    socialLinks: string[],
    icon: string,
    LinkedInLink: string,
    certificate: string,
    registrationId: string,
    isBlocked: {
        type: Boolean,
        default: false
    }
}