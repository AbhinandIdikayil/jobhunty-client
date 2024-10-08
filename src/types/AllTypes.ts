import { ReactNode } from "react"


export type UserReducer = {
    loading: boolean,
    err: boolean | string | any,
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

export type verifyOtpRequest = {
    otp: string,
    name?: string,
    email: string,
    password?: string,
    role?: string,
    intention?: boolean
}

export type verifyOtpResponse = {
    name: string,
    email: string,
    role: string,
    isBlocked: string,
}

export type ErrorPayload = {
    message: string
}

export interface prop {
    open: boolean | null
}

export interface IVerifyEmail {
    email: string
}

export interface Children {
    children: ReactNode;
}

