import { createAsyncThunk } from "@reduxjs/toolkit";
import { Login, SignupForm } from "../../types/AllTypes";
import { AXIOS_INSTANCE_AUTH } from "../../constants/axiosInstance";


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
      console.log(data, 'from the action folder')
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
      console.log(data)
      return data
    } catch (error: any | Error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)