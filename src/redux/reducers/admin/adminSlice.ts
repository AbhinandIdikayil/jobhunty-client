import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { blockUser, getAllusers, listRequest, updateApproval } from "src/redux/actions/adminAction";
import { listAllCompanies } from "src/redux/actions/commonAction";
import { adminReducer } from "src/types/Admin";


const initialState: adminReducer = {
    loading: false,
    request: [],
    companies: {
        companies: [],
        totalCount: [{ count: 0 }]
    },
    users: [],
    err: null,
    role: null,
}


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<adminReducer>) => {
        builder
            .addCase(blockUser.pending, (state) => {
                state.loading = true;
                state.err = null
            })
            .addCase(blockUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.users = state.users.map(user =>
                    user._id === payload._id ? { ...user, isBlocked: payload.isBlocked } : user
                );
                state.err = null
            })
            .addCase(blockUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.err = payload
            })
            .addCase(getAllusers.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(getAllusers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
                state.err = false
            })
            .addCase(getAllusers.rejected, (state, { payload }) => {
                state.loading = false
                state.users = []
                state.err = payload
            })
            .addCase(listRequest.pending, (state) => {
                state.loading = true;
                state.err = false
            })
            .addCase(listRequest.fulfilled, (state, { payload }) => {
                state.loading = false
                state.request = payload
                state.err = false
            })
            .addCase(listRequest.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(updateApproval.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(updateApproval.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.request = state.request.map(req => {
                    return req.companyId.email === payload.email ? { ...req, approvalStatus: payload.status } : req
                })
            })
            .addCase(updateApproval.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(listAllCompanies.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(listAllCompanies.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.companies = payload
            })
            .addCase(listAllCompanies.rejected, (state, { payload }) => {
                state.loading = false
                state.companies = {
                    companies: [],
                    totalCount: [{ count: 0 }] // Ensure to set this as well to maintain the initial structure
                };
                state.err = payload
            })
    }
})

export default adminSlice.reducer