import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchMealDbApi} from "../../api";

const fetchCategoryMealsData = createAsyncThunk('categoryMeals/fetchMealDbApi', async (categoryName) => {
    // console.log("categoryName")
    // console.log(categoryName)
    return await fetchMealDbApi(`filter.php?c=${categoryName}`);
});

const dataSlice = createSlice({
    name: 'categoryMeals',
    initialState: { status: 'idle', categoryMeals: [], error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryMealsData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategoryMealsData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categoryMeals = action.payload.meals;
            })
            .addCase(fetchCategoryMealsData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;
export { fetchCategoryMealsData };