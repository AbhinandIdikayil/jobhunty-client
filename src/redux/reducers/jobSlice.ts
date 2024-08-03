import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { JobReducer } from "src/types/Job";
import { applyJob, getAllJob, postJob } from "../actions/jobAction";

const initialState: JobReducer = {
    loading: false,
    err: null,
    job: null,
    jobs: [],
    applicants: []
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {

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
            .addCase(getAllJob.pending,(state) => {
                state.loading = true
                state.err = null
            })
            .addCase(getAllJob.fulfilled,(state,{payload}) => {
                state.loading = false
                state.err = null
                state.jobs = payload
            })
            .addCase(getAllJob.rejected,(state,{payload}) => {
                state.loading = false
                state.err = payload
                state.jobs = []
            })
            .addCase(applyJob.pending,(state) => {
                state.loading = true
                state.err = null
            })
            .addCase(applyJob.fulfilled,(state,{payload}) => {
                state.loading = false
                state.applicants = payload
                state.err = null
            })
            .addCase(applyJob.rejected,(state,{payload}) => {
                state.loading = false
                state.err = payload
            })
    }
})


export default jobSlice.reducer