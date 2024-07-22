

export type adminReducer = {
    loading: boolean,
    request: any[],
    companies: any[],
    users: any[],
    err: null | any,
    role: 'admin' | null
}


export type CompanyRequest = {
    companyId:{
        _id: string,
        name: string,
        email: string,
        approvalStatus: string
    }
}