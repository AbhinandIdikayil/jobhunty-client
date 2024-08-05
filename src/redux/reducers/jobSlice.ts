import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobReducer } from "src/types/Job";
import { applyJob, getAllJob, getJobDetails, postJob, removeJob, updateJob } from "../actions/jobAction";

const initialState: JobReducer = {
    loading: false,
    err: null,
    job: [],
    jobs: [],
    applicants: []
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJobById(state, action: PayloadAction<string>) {
            const id = action.payload;
            const foundJob = state.jobs.find(job => job._id === id);
            state.job = foundJob || []; // Set to null if no job is found
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<JobReducer>) => {
        builder
            .addCase(postJob.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(postJob.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.jobs = [...state.jobs, payload]
            })
            .addCase(postJob.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(getAllJob.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(getAllJob.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.jobs = payload
            })
            .addCase(getAllJob.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
                state.jobs = []
            })
            .addCase(applyJob.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(applyJob.fulfilled, (state, { payload }) => {
                state.loading = false
                state.applicants = payload
                state.err = null
            })
            .addCase(applyJob.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(getJobDetails.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(getJobDetails.fulfilled, (state, { payload }) => {
                state.loading = false
                state.job = payload
                state.err = null
            })
            .addCase(getJobDetails.rejected, (state, { payload }) => {
                state.loading = false
                state.job = []
                state.err = payload
            })
            .addCase(removeJob.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(removeJob.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.jobs = state.jobs.map(job =>
                    job?._id === payload?._id ? { ...job, ...payload } : job
                );
            })
            .addCase(removeJob.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(updateJob.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(updateJob.fulfilled, (state, { payload }) => {
                state.loading = false
                state.jobs = state.jobs.map(job => {
                    return job._id == payload?._id ? { ...job, ...payload } : job
                })
                state.err = null
            })
            .addCase(updateJob.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
    }
})

export const { setJobById } = jobSlice.actions;
export default jobSlice.reducer