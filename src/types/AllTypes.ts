

export type UserReducer = {
    loading: boolean,
    err: boolean | string,
    role: 'user' | 'admin' | 'company' | null,
    user: null | any,
}

export type SignupForm = {
    name: string,
    email: string,
    password: string,
    role: string,
}

export type Login = {
    email: string,
    password: string
}


export type ErrorPayload = {
    message: string
}

