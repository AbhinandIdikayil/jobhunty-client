import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { JobReducer } from "src/types/Job";
import { postJob } from "../actions/jobAction";

const initialState: JobReducer = {
    loading: false,
    err: null,
    job: null,
    jobs: [],
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
    }
})


export default jobSlice.reducer