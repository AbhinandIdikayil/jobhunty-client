import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { ChatInitialState } from "src/types/Chat";


const initialState:ChatInitialState = {
    loading:false,
    err:null,
    selectedUser:null,
    users:[],
    companies:[],
}


const chatSlice = createSlice({
    name:'chat',
    initialState,
    reducers:{},
    extraReducers:(builder: ActionReducerMapBuilder<ChatInitialState>) => {
        // builder
        // .addCase()
    }
})

export default chatSlice.reducer