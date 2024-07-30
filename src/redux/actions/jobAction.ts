import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_JOB } from "src/constants/axiosInstance";


export const postJob = createAsyncThunk(
    'company/post-job',
    async (req,{rejectWithValue}) => {
        try {
            const {data} = await AXIOS_INSTANCE_JOB.post('/post-job',req);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
