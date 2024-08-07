import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_JOB } from "src/constants/axiosInstance";


export const postJob = createAsyncThunk(
    'company/post-job',
    async (req, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.post('/post-job', req);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getAllJob = createAsyncThunk(
    'list-job',
    async (req?: string, { rejectWithValue }) => {
        try {
            let res
            if (req) {
                res = await AXIOS_INSTANCE_JOB.get(`/all-job/${req}`)
            } else {
                res = await AXIOS_INSTANCE_JOB.get(`/jobs`)
            }
            const { data } = res
            return data
        } catch (error: any) {
            return rejectWithValue(error?.response?.data)
        }
    }
)

export const applyJob = createAsyncThunk(
    'user/apply',
    async (req:any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.post('/apply-job', req)
            return data
        } catch (error: any) {
            return rejectWithValue(error?.response?.data)
        }
    }
)

export const getJobDetails = createAsyncThunk(
    'job/details',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.get(`/details/${req}`)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const removeJob = createAsyncThunk(
    'job/remove',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.delete(`/post-job/${req}`)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateJob = createAsyncThunk(
    'job/edit',
    async (req: any, { rejectWithValue }) => {
        try {
            console.log(req)
            const { data } = await AXIOS_INSTANCE_JOB.put(`/post-job/${req.id}`, req)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const listApplications = createAsyncThunk(
    'applications/list',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.get(`/application`)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const listApplicants = createAsyncThunk(
    'applicants/list',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.get('/applicant')
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getSpecificApplicantDetails = createAsyncThunk(
    'applicant/details',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.get(`/applicant/${req}`)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

