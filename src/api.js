const apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

export const fetchMealDbApi = async (endpoint) => {
    try {
        // console.log('fetchMealDbApi')
        const response = await fetch(apiUrl + endpoint);
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
