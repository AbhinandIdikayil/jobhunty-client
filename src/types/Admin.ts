

export type adminReducer = {
    loading: boolean,
    category: IListCategory[],
    request: any[],
    companies: any[],
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

export type ICategories = {
    _id: string,
    name: string,
    description: string,
    image: string,
    status?: boolean
}

export interface IAddCategory  {
    name: string,
    description: string,
    image?: string,
}