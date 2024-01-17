import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchMealDbApi} from "../../api";

const fetchRandomMealsData = createAsyncThunk('randomMeal/fetchMealDbApi', async () => {
    return await fetchMealDbApi('random.php');
});

const dataSlice = createSlice({
    name: 'randomMeal',
    initialState: { status: 'idle', randomMeal: {}, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomMealsData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRandomMealsData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.randomMeal = action.payload.meals[0];
            })
            .addCase(fetchRandomMealsData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;
export { fetchRandomMealsData };