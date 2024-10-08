import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_COMPANY } from "src/constants/axiosInstance";
import { handleTokenError } from "src/utils/HandleError";



export const getCompany = createAsyncThunk(
    'company/get-data',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.get('/company')
            return data
        } catch (error) {
            return rejectWithValue(handleTokenError(error))
        }
    }
)


export const updateProfile = createAsyncThunk(
    'company/profile',
    async (req: any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.post('/company-overview', { data: req })
            console.log(data);
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(handleTokenError(error))
        }
    }
)

export const updateSocialLinks = createAsyncThunk(
    'company/social-links',
    async (req: any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.put('/company-social', { data: req });
            return data;
        } catch (error) {
            return rejectWithValue(handleTokenError(error))
        }
    }
)

export const sendRequest = createAsyncThunk(
    'company/send-request',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.post('/compnay-request');
            console.log(data)
            return data
        } catch (error: any) {
            return rejectWithValue(handleTokenError(error))
        }
    }
)


