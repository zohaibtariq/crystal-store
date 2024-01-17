import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomMealsData } from "../store/slices/randomMealSlice";
import MealDetail from "./MealDetail";
import Loading from "./Loading";
import Error from "./Error";

const MealGenerator = () => {

    const dispatch = useDispatch();
    const {randomMeal, status, error} = useSelector((state) => state.randomMeal);

    useEffect(() => {
        dispatch(fetchRandomMealsData());
    }, [dispatch]);

    if (status === 'loading' || status === 'idle')
        return <Loading/>

    if (status === 'failed')
        return <Error error={error}/>

    return (
        <div className={`container`}>
            <MealDetail meal={randomMeal}/>
        </div>
    );

};

export default MealGenerator;
