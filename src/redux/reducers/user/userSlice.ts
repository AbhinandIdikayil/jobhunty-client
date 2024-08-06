import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { ErrorPayload, UserReducer } from '../../../types/AllTypes'
import { forgotPassword, getUser, googleLoginAndSignup, login, logout, signupUser, updateUserProfile, verifyEmail, verifyOtp } from '../../actions/userAction'
import { getCompany, sendRequest, updateProfile, updateSocialLinks } from 'src/redux/actions/companyAction'
import { adminLogin, getAllusers } from 'src/redux/actions/adminAction'

const initialState: UserReducer = {
    loading: false,
    user: null,
    err: false,
    role: null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: (state) => {
            state.user = null
            state.role = null
            state.loading = false
            state.err = false
        },
        resetErr: (state) => {
            state.err = false
        },
        removeExperienceState: (state, { payload }) => {
            console.log(payload)
            if (state.user && state.user.experiences ) {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        experiences: state.user.experiences.filter((data, index) => index !== payload && data)
                    }
                };
            }
            return state;
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<UserReducer>) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true
                state.err = false
                state.role = null
                state.user = null
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.loading = false
                state.err = false
                state.role = null
                state.user = null
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
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload
                state.err = false
                state.role = payload.role as 'user' | 'company' | 'admin'
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.err = (action.payload as ErrorPayload).message
                } else {
                    state.err = action.error.message || 'An unknown error occured'
                }
            })
            .addCase(googleLoginAndSignup.pending, (state) => {
                state.loading = true
                state.role = null
            })
            .addCase(googleLoginAndSignup.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = false
                state.user = payload
                state.role = payload?.role as 'user' | 'company' | 'admin'
            })
            .addCase(googleLoginAndSignup.rejected, (state, action) => {
                state.loading = false
                state.role = null
                if (action.payload) {
                    state.err = (action.payload as ErrorPayload).message
                } else {
                    state.err = action.error.message || 'An unknown error occured'
                }
            })
            .addCase(logout.pending, (state) => {
                state.loading = true
                state.role = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false
                state.user = null
                state.role = null
                state.err = false
            })
            .addCase(logout.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload?.message || 'error occured'
            })
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true
                state.err = false
                state.role = null
            })
            .addCase(verifyOtp.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = false
                state.role = payload?.role as 'user' | 'company' | 'admin'
                state.user = payload
            })
            .addCase(verifyOtp.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload?.message || 'error occured'
                state.role = null
            })
            .addCase(verifyEmail.pending, (state) => {
                state.err = false
                state.loading = true
            })
            .addCase(verifyEmail.fulfilled, (state, { payload }) => {
                state.user = payload
                state.err = false
                state.loading = false
            })
            .addCase(verifyEmail.rejected, (state, { payload }) => {
                state.err = payload?.message || false
                state.loading = false
            })
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true
                state.user = null
                state.err = false
                state.role = null
            })
            .addCase(forgotPassword.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload
                state.role = null
                state.err = false
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false
                state.user = null
                state.role = null
                if (action.payload) {
                    state.err = (action.payload as ErrorPayload).message
                } else {
                    state.err = action.error.message || 'An unknown error occured'
                }
            })
            .addCase(getCompany.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(getCompany.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = false
                state.user = payload
            })
            .addCase(getCompany.rejected, (state) => {
                state.loading = false
                state.err = false
                // state.user = null
                // state.role = null
            })
            .addCase(updateProfile.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(updateProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = false
                state.user = payload
            })
            .addCase(updateProfile.rejected, (state) => {
                state.loading = false
                state.err = false
            })
            .addCase(updateSocialLinks.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(updateSocialLinks.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = false
                state.user = payload
            })
            .addCase(updateSocialLinks.rejected, (state) => {
                state.loading = false
                state.err = false
            })
            .addCase(sendRequest.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(sendRequest.fulfilled, (state) => {
                state.loading = false
                state.err = false
            })
            .addCase(sendRequest.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(adminLogin.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(adminLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload
                state.role = payload?.role
                state.err = false
            })
            .addCase(adminLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.user = null
                state.role = null
                state.err = payload
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = payload
                state.role = payload.role || null
                state.err = false
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload.message
            })
            .addCase(updateUserProfile.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.user = { ...state.user, ...payload }
                state.err = false
            })
            .addCase(updateUserProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
    }
})


export const { resetState, resetErr, removeExperienceState } = userSlice.actions

export default userSlice.reducer