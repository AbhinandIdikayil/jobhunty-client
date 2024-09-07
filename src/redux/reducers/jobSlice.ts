import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobReducer } from "src/types/Job";
import { applyJob, editInterview, getAllJob, getJobDetails, getSpecificApplicantDetails, listApplicants, listApplications, postJob, removeJob, scheduleInterview, updateHiringStatus, updateJob } from "../actions/jobAction";
import { handleAuthError } from "src/utils/HandleAuthError";

const initialState: JobReducer = {
    loading: false,
    err: null,
    job: null,
    jobs: null,
    applicant: null,
    applicants: [],
    applications: []
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJobById(state, action: PayloadAction<string>) {
            const id = action.payload;
            const foundJob = state.jobs?.jobs.find((job:any) => job._id === id);
            state.job = foundJob || null // Set to null if no job is found
        },
        reset(state){
            state.jobs = []
            state.applicants = []
            state.applications = []
            state.applicant = null
            state.job = null
        }
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
                state.jobs.jobs = [...state.jobs?.jobs, payload]
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
                state.jobs.jobs = []
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
                state.job = null
                state.err = payload
            })
            .addCase(removeJob.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(removeJob.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.jobs.jobs = state.jobs?.jobs?.map((job:any) =>
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
                state.jobs.jobs = state.jobs?.jobs?.map((job:any) => {
                    return job._id == payload?._id ? { ...job, ...payload } : job
                })
                state.err = null
            })
            .addCase(updateJob.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(listApplications.pending, (state) => {
                state.err = null
                state.loading = true
            })
            .addCase(listApplications.fulfilled, (state, { payload }) => {
                state.err = null
                state.loading = false
                state.applications = payload
            })
            .addCase(listApplications.rejected, (state, { payload }) => {
                state.err = payload
                state.loading = false
                state.applications = []
                handleAuthError(state, payload)
            })
            .addCase(listApplicants.pending, (state) => {
                state.err = null
                state.loading = true
            })
            .addCase(listApplicants.fulfilled, (state, { payload }) => {
                state.err = null
                state.loading = false
                state.applicants = payload
            })
            .addCase(listApplicants.rejected, (state, { payload }) => {
                state.err = payload
                state.loading = false
                state.applicants = []
                handleAuthError(state, payload)
            })
            .addCase(getSpecificApplicantDetails.pending, (state) => {
                state.err = null
                state.loading = true
            })
            .addCase(getSpecificApplicantDetails.fulfilled, (state, { payload }) => {
                state.err = null
                state.loading = false
                state.applicant = payload ?? null
            })
            .addCase(getSpecificApplicantDetails.rejected, (state) => {
                state.err = null
                state.loading = false
            })
            .addCase(updateHiringStatus.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(updateHiringStatus.fulfilled, (state, action) => {
                const { hiring_status } = action.payload;
                state.loading = false;
                state.err = null;
                if (state.applicant) {
                    state.applicant.hiring_status = hiring_status ?? state.applicant.hiring_status;
                }
            })
            .addCase(updateHiringStatus.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(scheduleInterview.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(scheduleInterview.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                if (state.applicant) {
                    state.applicant = {
                        ...state.applicant,
                        schedule: payload?.schedule
                    };
                }
            })
            .addCase(scheduleInterview.rejected, (state) => {
                state.loading = false
                state.err = null
            })
            .addCase(editInterview.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(editInterview.fulfilled, (state,{payload}) => {
                state.loading = false
                state.err = null
                if (state.applicant) {
                    state.applicant = {
                        ...state.applicant,
                        schedule: payload?.schedule
                    };
                }
            })
            .addCase(editInterview.rejected, (state,{payload}) => {
                state.loading = false
                state.err = {payload}
            })
    }
})

export const { setJobById, reset } = jobSlice.actions;
export default jobSlice.reducer