const initialState = {
    randomMeal: {},
};

export const randomMealReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RANDOM_MEAL':
            return {
                ...state,
                randomMeal: action.payload,
            };
        default:
            return state;
    }
};
