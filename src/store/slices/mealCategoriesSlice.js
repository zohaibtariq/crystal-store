import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchMealDbApi} from "../../api";

const fetchMealCategoriesData = createAsyncThunk('mealCategories/fetchMealDbApi', async () => {
    return await fetchMealDbApi('categories.php');
});

const dataSlice = createSlice({
    name: 'mealCategories',
    initialState: { status: 'idle', mealCategories: [], error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMealCategoriesData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMealCategoriesData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.mealCategories = action.payload.categories;
            })
            .addCase(fetchMealCategoriesData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;
export { fetchMealCategoriesData };