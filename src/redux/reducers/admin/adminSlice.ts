import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { addCategory, addSector, blockUser, deleteCategory, getAllusers, listCategory, listRequest, updateApproval, updateCategory } from "src/redux/actions/adminAction";
import { listSectors } from "src/redux/actions/commonAction";
import { adminReducer } from "src/types/Admin";


const initialState: adminReducer = {
    loading: false,
    category: [],
    request: [],
    companies: [],
    sectors: [],
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
            .addCase(addCategory.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(addCategory.fulfilled, (state) => {
                state.loading = false
                state.err = false
            })
            .addCase(addCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(listCategory.pending, (state) => {
                state.loading = true
                state.err = false;
            })
            .addCase(listCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = false
                state.category = payload
            })
            .addCase(listCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(deleteCategory.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(deleteCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.category = state.category.map(data => {
                    return data._id == payload?._id ? { ...data, status: payload?.status } : data
                })
            })
            .addCase(deleteCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(updateCategory.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(updateCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.category = state.category.map(data => {
                    return data._id = payload._id ? { ...data, ...payload } : data
                })
            })
            .addCase(updateCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(listSectors.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(listSectors.fulfilled, (state, { payload }) => {
                state.sectors = payload
                state.loading = false
                state.err = null
            })
            .addCase(listSectors.rejected, (state, { payload }) => {
                state.err = payload
                state.loading = false
            })
            .addCase(addSector.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(addSector.fulfilled, (state) => {
                state.loading = false
                state.err = false
            })
            .addCase(addSector.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
    }
})

export default adminSlice.reducer