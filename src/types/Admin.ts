

export type adminReducer = {
    loading: boolean,
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