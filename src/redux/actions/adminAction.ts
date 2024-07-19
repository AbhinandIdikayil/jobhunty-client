import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_GATEWAY_AXIOS_INSTANCE, AXIOS_INSTANCE_AUTH, AXIOS_INSTANCE_COMPANY } from "src/constants/axiosInstance";


export const adminLogin = createAsyncThunk(
    'admin/login',
    async (req:any , {rejectWithValue}) => {
        try {
            const {data} = await AXIOS_INSTANCE_AUTH.post('/admin',req)
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data)
        }
    }
)

export const getAllusers = createAsyncThunk(
    'company/get-all-users',
    async(_,{rejectWithValue}) => {
        try {
            const {data} = await AXIOS_INSTANCE_COMPANY.get('/get-allusers')
            console.log(data)
            return data 
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)