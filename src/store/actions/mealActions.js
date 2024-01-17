// old way
import {fetchMealDbApi} from "../../api";

export const setMealCategories = (categories) => ({
    type: 'SET_MEAL_CATEGORIES',
    payload: categories,
});

export const fetchMealCategories = () => async (dispatch) => {
    try {
        // Fetch data from the API (assuming you have some API fetching logic here)
        const data = await fetchMealDbApi('categories.php');

        // Dispatch the action to update the state with the fetched data
        dispatch(setMealCategories(data.categories));
    } catch (error) {
        console.error('Error fetching meal categories:', error);
    }
};
