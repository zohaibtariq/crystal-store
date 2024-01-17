import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchMealDbApi} from "../../api";

const fetchMealData = createAsyncThunk('meal/fetchMealDbApi', async (mealId) => {
    // console.log("mealId")
    // console.log(mealId)
    return await fetchMealDbApi(`lookup.php?i=${mealId}`);
});

const dataSlice = createSlice({
    name: 'meal',
    initialState: { status: 'idle', meal: [], error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMealData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMealData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.meal = action.payload.meals[0];
            })
            .addCase(fetchMealData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default dataSlice.reducer;
export { fetchMealData };