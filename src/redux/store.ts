import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user/userSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";
import adminSlice from "./reducers/admin/adminSlice";
import categorySlice from "./reducers/categorySlice";
import jobSlice from "./reducers/jobSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    user: userSlice,
    admin:adminSlice,
    category:categorySlice,
    job:jobSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[ REHYDRATE , FLUSH, PAUSE , PERSIST , PURGE , REGISTER]
            }
        })
    
})


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store