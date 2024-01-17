import React from 'react';
import {NavLink} from "react-router-dom";

const MenuCategory = ({ category, index, isEven }) => {
    return (
        <React.Fragment key={category.idCategory}>
            {/*<hr className="featurette-divider" />*/}
            <div className={`row featurette`}>
                <div className={`col-md-7 d-flex align-items-start justify-content-center flex-column ${isEven ? '' : 'order-md-2'}`}>
                    <h2 className="featurette-heading fw-normal lh-1 text-lg-start p-0 m-0">
                        <NavLink className="nav-link" to={`/meals/${category.strCategory}`}>
                            {category.strCategory}
                        </NavLink>
                    </h2>
                    <p className="lead p-0 m-0">{category.strCategoryDescription}</p>
                </div>
                <div className={`col-md-5 d-flex align-items-start justify-content-center flex-column ${isEven ? '' : 'order-md-1'}`}>
                    <NavLink className="nav-link" to={`/meals/${category.strCategory}`}>
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={category.strCategoryThumb} alt={category.strCategory} />
                    </NavLink>
                </div>
            </div>
            <hr className="featurette-divider" />
        </React.Fragment>
    );
};

export default MenuCategory;
