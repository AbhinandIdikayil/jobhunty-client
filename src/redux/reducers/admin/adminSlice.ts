import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { blockUser, getAllusers } from "src/redux/actions/adminAction";
import { adminReducer } from "src/types/Admin";


const initialState: adminReducer = {
    loading: false,
    request:[],
    companies: [],
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
            .addCase(blockUser.fulfilled, (state,{payload}) => {
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
            .addCase(getAllusers.fulfilled, (state,{payload}) => {
                state.loading = false
                state.users = payload
                state.err = false
            })
            .addCase(getAllusers.rejected, (state, { payload }) => {
                state.loading = false
                state.users = []
                state.err = payload
            })
    }
})

export default adminSlice.reducer