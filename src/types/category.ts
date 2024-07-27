
export interface categoryReducer {
    loading: boolean,
    err: null | any,
    category: ICategory[],
    sectors: ISectors[]
}

export interface ICategory {
    _id: string,
    name: string,
    description: string,
    image: string,
    status?: boolean
}
export interface ISectors {
    _id: string,
    name: string,
    image?:string,
    status?:boolean
}