import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_CHAT } from "src/constants/axiosInstance";


export const createOneToOneChat = createAsyncThunk(
    'chat/create',
    async (req: any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_CHAT.post('/create', {data:req})
            return data
        } catch (error: any) {
            return rejectWithValue(error?.response)
        }
    }
)

export const listChats = createAsyncThunk(
    'chat/list',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_CHAT.get('/list');
            return data
        } catch (error: any) {
            return rejectWithValue(error?.response)
        }
    }
)

export const sendMessage = createAsyncThunk(
    'chat/send-message',
    async (req: any, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_CHAT.post('/message', { data: req })
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getAllMessages = createAsyncThunk(
    'chat/all-messages',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_CHAT.get('/message', {
                params: {
                    chat: req
                }
            })
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)