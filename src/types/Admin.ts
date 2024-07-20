

export type adminReducer = {
    loading: boolean,
    request: any[],
    companies: any[],
    users: any[],
    err: null | any,
    role: 'admin' | null
}