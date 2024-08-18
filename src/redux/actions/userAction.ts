import { createAsyncThunk } from "@reduxjs/toolkit";
import { IVerifyEmail, Login, verifyOtpRequest, verifyOtpResponse } from "../../types/AllTypes";
import { AXIOS_INSTANCE_AUTH, AXIOS_INSTANCE_USER } from "../../constants/axiosInstance";
import { aboutEdit } from "src/types/profile";
import { removeExperienceState } from "../reducers/user/userSlice";
import { RootState } from "../store";
import { handleTokenError } from "src/utils/HandleError";

// interface SignupRequest {
//   name: string,
//   email: string,
//   password: string,
// } 

interface ErrorPayload {
  message: string;
  // Other error details
}
interface User {
  email: string,
  name: string,
  password: string,
  role: string,
  otp: string,
}

interface ErrorPayload {
  message: string;
}



export const signupUser = createAsyncThunk<User, any, { rejectValue: ErrorPayload }>(
  'user/signup',
  async (userData: any, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_AUTH.post('/signup', userData)
      return data
    } catch (error: any | Error) {
      console.log(error);
      return rejectWithValue(error.response.data)
    }
  }
)

export const verifyOtp = createAsyncThunk<verifyOtpResponse, verifyOtpRequest, { rejectValue: ErrorPayload }>(
  'user/verify-otp',
  async (req: verifyOtpRequest, { rejectWithValue }) => {
    try {
      console.log(req)
      const { data } = await AXIOS_INSTANCE_AUTH.post('/verify-otp', req)
      return data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const login = createAsyncThunk<User, Login, { rejectValue: ErrorPayload }>(
  'user/login',
  async (loginData: Login, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_AUTH.post('/login', loginData)
      return data
    } catch (error: any | Error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)

export const googleLoginAndSignup = createAsyncThunk<any, any, { rejectValue: ErrorPayload }>(
  'user/google',
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_AUTH.post('/google', { token: payload?.credential as string, role: payload.role, page: payload.page }, {
        withCredentials: true
      })
      return data
    } catch (error: Error | any) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)


export const logout = createAsyncThunk<any, any, { rejectValue: ErrorPayload }>(
  'user/logout',
  async (_: undefined, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_AUTH.post('/logout', {}, { withCredentials: true })
      return data
    } catch (error: any | Error) {
      return rejectWithValue(error.response.data)
    }
  }
)


//$ this function is mainly used to validate the email and sending
//$ the otp to the respective email given in the input

export const verifyEmail = createAsyncThunk<string, IVerifyEmail, { rejectValue: ErrorPayload }>(
  'user/verify-email',
  async (req: IVerifyEmail, { rejectWithValue }) => {
    try {
      console.log(req)
      const { data } = await AXIOS_INSTANCE_AUTH.post('/verify-email', req)
      console.log(data)
      return data
    } catch (error: Error | any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const forgotPassword = createAsyncThunk<any, any>(
  'user/forgotPassword',
  async (req: any, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_AUTH.put('/forgot-password', req);
      console.log(data)
      return data
    } catch (error: any | Error) {
      return rejectWithValue(error.reponse.data)
    }
  }
)

export const getUser = createAsyncThunk(
  'user/get-user',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_USER.get('/user')
      return data
    } catch (error) {
      return rejectWithValue(handleTokenError(error))
    }
  }
)

export const updateUserProfile = createAsyncThunk(
  'user/update-profile',
  async (req: aboutEdit, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_USER.post('/update-profile', req);
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const removeExperienceAndUpdateUserProfile = createAsyncThunk(
  'updateprofile/remove-experience',
  async (ind, { dispatch, getState }) => {
    dispatch(removeExperienceState(ind))
    const updatedUserState = getState() as RootState;
    // Dispatch the updateUserProfile action
    await dispatch(updateUserProfile(updatedUserState?.user?.user)).unwrap();
    return updatedUserState?.user?.user;
  }
)