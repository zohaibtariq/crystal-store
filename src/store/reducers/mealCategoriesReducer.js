const initialState = {
    mealCategories: [],
};

export const mealCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MEAL_CATEGORIES':
            return {
                ...state,
                mealCategories: action.payload,
            };
        default:
            return state;
    }
};
