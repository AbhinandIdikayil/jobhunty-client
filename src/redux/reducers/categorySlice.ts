import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { categoryReducer } from "src/types/category";
import { addCategory, addSector, deleteCategory, listCategory, listSectors, updateCategory } from "../actions/commonAction";



const initialState: categoryReducer = {
    loading: false,
    err: null,
    category: [],
    sectors: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<categoryReducer>) => {
        builder
            .addCase(listCategory.pending, (state) => {
                state.err = null
                state.loading = true
            })
            .addCase(listCategory.fulfilled, (state, { payload }) => {
                state.category = payload
                state.err = null
                state.loading = false
            })
            .addCase(listCategory.rejected, (state, { payload }) => {
                state.err = payload
                state.loading = false
                state.category = []
            })
            .addCase(addCategory.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(addCategory.fulfilled, (state) => {
                state.loading = false
                state.err = false
            })
            .addCase(addCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(deleteCategory.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(deleteCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.category = state.category.map(data => {
                    return data._id == payload?._id ? { ...data, status: payload?.status } : data
                })
            })
            .addCase(deleteCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(updateCategory.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(updateCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.err = null
                state.category = state.category.map(data => {
                    return data._id = payload._id ? { ...data, ...payload } : data
                })
            })
            .addCase(updateCategory.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
            .addCase(listSectors.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(listSectors.fulfilled, (state, { payload }) => {
                state.sectors = payload
                state.loading = false
                state.err = null
            })
            .addCase(listSectors.rejected, (state, { payload }) => {
                state.err = payload
                state.loading = false
                state.sectors = []
            })
            .addCase(addSector.pending, (state) => {
                state.loading = true
                state.err = false
            })
            .addCase(addSector.fulfilled, (state) => {
                state.loading = false
                state.err = false
            })
            .addCase(addSector.rejected, (state, { payload }) => {
                state.loading = false
                state.err = payload
            })
    }
})

export default categorySlice.reducer