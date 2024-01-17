import { combineReducers } from 'redux';
// import { mealCategoriesReducer } from './mealCategoriesReducer'; // old way
import mealCategoriesSlice from "../slices/mealCategoriesSlice";
import randomMealSlice from "../slices/randomMealSlice";
import categoryMealsSlice from "../slices/categoryMealsSlice";
import mealSlice from "../slices/mealSlice";

const rootReducer = combineReducers({
    // mealCategories: mealCategoriesReducer, // old way
    mealCategories: mealCategoriesSlice,
    randomMeal: randomMealSlice,
    categoryMeals: categoryMealsSlice,
    meal: mealSlice,
});

export default rootReducer;
