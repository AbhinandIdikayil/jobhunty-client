import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_JOB } from "src/constants/axiosInstance";


export const listSectors = createAsyncThunk(
    '/sector-list',
    async (req, {rejectWithValue}) => {
        try {
            const {data} = await AXIOS_INSTANCE_JOB.get('/sector')
            return data
        } catch (error) {
            throw rejectWithValue(error)
        }
    }
)