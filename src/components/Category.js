import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useParams} from 'react-router-dom';
import { fetchCategoryMealsData } from "../store/slices/categoryMealsSlice";

const Category = () => {
    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const categoryMeals = useSelector((state) => state.categoryMeals);

    useEffect(() => {
        dispatch(fetchCategoryMealsData(categoryName));
    }, [dispatch, categoryName]);

    return (
        <div className={`container`}>
            <h1>{categoryName} Category Meals</h1>
            <ul>
                {categoryMeals.map((meal) => (
                    <li key={meal.idMeal}>
                        <NavLink className="nav-link" to="/meal/${meal.idMeal}">
                            <strong>{meal.strMeal}</strong>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </NavLink>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
