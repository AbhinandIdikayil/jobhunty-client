import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE_JOB } from "src/constants/axiosInstance";
import { AddCategory, IAddSector, ICategories, IListCategory } from "src/types/Admin";
import { ErrorPayload } from "src/types/AllTypes";


export const listSectors = createAsyncThunk(
    '/sector-list',
    async (req, {rejectWithValue}) => {
        try {
            const {data} = await AXIOS_INSTANCE_JOB.get('/sector')
            return data
        } catch (error) {
            throw rejectWithValue(error)
        }
    }
)



export const listCategory = createAsyncThunk<IListCategory[], null, { rejectValue: ErrorPayload }>(
    'admin/list-category',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.get('/category')
            return data
        } catch (error: Error | any) {
            return rejectWithValue(error)
        }
    }
)


export const addCategory = createAsyncThunk(
    'admin/add-category',
    async (req: AddCategory, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.post('/add-category', req)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateCategory = createAsyncThunk(
    'admin/update-category',
    async (req: ICategories, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.put('/update-category', { data: req });
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteCategory = createAsyncThunk(
    'admin/delete-category',
    async (req: { id: string }, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.put('/delete-category', req);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const addSector = createAsyncThunk(
    'admin/add-sector',
    async(req:IAddSector,{rejectWithValue}) => {
        try {
            const {data} = await AXIOS_INSTANCE_JOB.post('/add-sector',{data:req})
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)