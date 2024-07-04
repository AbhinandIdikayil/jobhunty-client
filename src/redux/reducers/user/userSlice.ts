import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { ErrorPayload, UserReducer } from '../../../types/AllTypes'
import { login, signupUser } from '../../actions/userAction'


const initialState: UserReducer = {
    loading: false,
    user: null,
    err: false,
    role: null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<UserReducer>) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true
                    state.err = false
                    state.role = null
                    state.user = null
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false
                    state.err = false
                    state.role = action.payload.role as 'user' | 'company' | 'admin'
                    state.user = action.payload
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.err = (action.payload as ErrorPayload).message;
                  } else {
                    state.err = action.error.message || 'An unknown error occurred';
                  }
                state.role = null
                state.user = null
            })
            .addCase(login.pending,(state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled,(state,{payload}) => {
                state.loading = false
                state.user = payload
                state.err = false
                state.role = payload.role as 'user' | 'company' | 'admin'
            })
            .addCase(login.rejected,(state,action) => {
                state.loading = false
                if(action.payload){
                    state.err = (action.payload as ErrorPayload).message
                } else {
                    state.err = action.error.message || 'An unknown error occured'
                }
            })
    }
})

export default userSlice.reducer