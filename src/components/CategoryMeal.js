import React from 'react';
import {NavLink} from "react-router-dom";

const CategoryMeal = ({ meal }) => {
    return (
        <React.Fragment key={meal.idMeal}>
            <div className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={meal.strMealThumb} alt={meal.strMeal} />
                    <div className="card-body">
                        <h3 className="card-text">
                            <NavLink className="nav-link btn btn-sm btn-outline-secondary" to={`/meal/${meal.idMeal}`}>
                                {meal.strMeal}
                            </NavLink>
                        </h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CategoryMeal;
