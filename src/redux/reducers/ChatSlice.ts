import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { ChatInitialState } from "src/types/Chat";
import { createOneToOneChat, getAllMessages, listChats } from "../actions/chatAction";


const initialState: ChatInitialState = {
    loading: false,
    err: null,
    selectedUser: null,
    users: [],
    companies: [],
    chats: [],
    messages: []
}


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<ChatInitialState>) => {
        builder
            .addCase(createOneToOneChat.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(createOneToOneChat.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.selectedUser = payload
            })
            .addCase(createOneToOneChat.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(listChats.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(listChats.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.chats = payload
            })
            .addCase(listChats.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(getAllMessages.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(getAllMessages.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.messages = payload
            })
            .addCase(getAllMessages.rejected, (state, { payload }) => {
                state.loading = false
                state.messages = []
                state.err = payload
            })
    }
})

export default chatSlice.reducer