import React from 'react';
import TruncatedText from "./TruncatedText";

const MealDetail = ({ meal }) => {
    return (
        <div key={meal.idMeal} className="card mt-5 mb-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={meal.strMealThumb} className="img-fluid" alt={meal.strMeal}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{meal.strMeal}</h1>
                        <p className="card-text">
                            <span className="badge text-bg-primary rounded-pill">{meal.strCategory}</span>
                            &nbsp;&nbsp;
                            <span className="badge text-bg-success rounded-pill">{meal.strArea}</span>
                        </p>
                        <TruncatedText text={meal.strInstructions} limit={1100} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;
