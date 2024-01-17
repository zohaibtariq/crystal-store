import { combineReducers } from 'redux';
import { mealCategoriesReducer } from './mealCategoriesReducer';

const rootReducer = combineReducers({
    mealCategories: mealCategoriesReducer,
});

export default rootReducer;
