import { createAsyncThunk } from "@reduxjs/toolkit";
import { Login, SignupForm } from "../../types/AllTypes";
import { AXIOS_INSTANCE_AUTH } from "../../constants/axiosInstance";


interface AuthResponse {
  token: string;
  user: User2;
}

interface User2 {
  name: string;
  email: string;
}

interface User {
  // Define the structure of your user data
  // For example:
  id: string;
  name: string;
  email: string;
  role: string
}

interface ErrorPayload {
  message: string;
}

export const signupUser = createAsyncThunk<User, SignupForm, { rejectValue: ErrorPayload }>(
  'user/signup',
  async (userData: SignupForm, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_AUTH.post('/signup', userData)
      return data
    } catch (error: any | Error) {
      console.log(error);
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

export const googleLoginAndSignup = createAsyncThunk(
  'user/google',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE_AUTH.post('/google', { token: payload?.credential as string }, {
        withCredentials: true
      })
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)


export const logout = createAsyncThunk<any, any,{rejectValue: ErrorPayload}>(
  'user/logout',
  async (_: undefined, { rejectWithValue }) => {
    try {
      const {data} = await AXIOS_INSTANCE_AUTH.post('/logout',{},{withCredentials:true})
      return data
    } catch (error:any | Error) {
      return rejectWithValue(error)
    }
  }
)