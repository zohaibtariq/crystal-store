import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMealData } from "../store/slices/mealSlice";
import MealDetail from "./MealDetail";
import Loading from "./Loading";
import Error from "./Error";

const Meal = () => {

    const { mealId } = useParams();
    const dispatch = useDispatch();
    const {meal, status, error} = useSelector((state) => state.meal);

    useEffect(() => {
        // console.log('useEffect')
        dispatch(fetchMealData(mealId));

    }, [dispatch, mealId]);

    if (status === 'loading' || status === 'idle')
        return <Loading/>

    if (status === 'failed')
        return <Error error={error}/>

    return (
        <div className={`container`}>
            <MealDetail meal={meal}/>
        </div>
    );
};

export default Meal;
