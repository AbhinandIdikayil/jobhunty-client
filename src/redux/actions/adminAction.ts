import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_AUTH } from "src/constants/axiosInstance";


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