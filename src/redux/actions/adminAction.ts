import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_AUTH, AXIOS_INSTANCE_COMPANY, AXIOS_INSTANCE_USER } from "src/constants/axiosInstance";


export const adminLogin = createAsyncThunk(
    'admin/login',
    async (req: any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_AUTH.post('/admin', req)
            return data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data)
        }
    }
)

export const getAllusers = createAsyncThunk(
    'company/get-all-users',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_USER.get('/get-allusers')
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const blockUser = createAsyncThunk(
    'admin/block-user',
    async (req: any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_USER.put('/block-user', req);
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    }
)


export const listRequest = createAsyncThunk(
    'admin/list-request',
    async (req: any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.get('/list-request')
            console.log(data)
            return data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)


export const updateApproval = createAsyncThunk(
    'admin/company-approval',
    async (req:any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.put('/update-request', req);
            console.log(data)
            return data
        } catch (error: Error | any) {
            console.log(error)
            return rejectWithValue(error)
        }
    }
)