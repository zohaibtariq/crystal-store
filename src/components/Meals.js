import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCategoryMealsData } from "../store/slices/categoryMealsSlice";
import CategoryMeal from "./CategoryMeal";
import Loading from "./Loading";
import Error from "./Error";

const Meals = () => {

    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const {categoryMeals, status, error} = useSelector((state) => state.categoryMeals);

    // console.log(categoryName)
    // console.log(categoryMeals)

    useEffect(() => {
        // console.log('useEffect')
        dispatch(fetchCategoryMealsData(categoryName));
        // console.log('fetchCategoryMealsData after')
    }, [dispatch, categoryName]);

    if (status === 'loading' || status === 'idle')
        return <Loading/>

    if (status === 'failed')
        return <Error error={error}/>

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-5 pb-5">
                {categoryMeals && categoryMeals.map((meal) => (
                    <CategoryMeal key={meal.idMeal} meal={meal}/>
                ))}
            </div>
        </div>
        /*<div className={`container`}>
            <h1>{categoryName} Meals (Category Meals)</h1>
            <ul>
                {categoryMeals && categoryMeals.map((meal) => (
                    <li key={meal.idMeal}>
                        <NavLink className="nav-link" to={`/meal/${meal.idMeal}`}>
                            <strong>{meal.strMeal}</strong>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>*/
    );
};

export default Meals;
