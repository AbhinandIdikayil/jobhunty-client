import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_COMPANY } from "src/constants/axiosInstance";



export const getCompany = createAsyncThunk(
    'company/get-data',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.get('/company')
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const updateProfile = createAsyncThunk(
    'company/profile',
    async (req:any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_COMPANY.post('/company-overview',{data:req})
            console.log(data);
            return data
        } catch (error) {
            console.log(error)
        }
    }
)
