import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { fetchMealCategories } from "../store/actions/mealActions"; // old way
import {fetchMealCategoriesData} from "../store/slices/mealCategoriesSlice";
import MenuCategory from "./MenuCategory";
import Loading from "./Loading";
import Error from "./Error";

const Menu = () => {

    const dispatch = useDispatch();
    const {mealCategories, status, error} = useSelector((state) => state.mealCategories);

    useEffect(() => {
        // dispatch(fetchMealCategories()); // old way
        dispatch(fetchMealCategoriesData());
    }, [dispatch]);

    if (status === 'loading' || status === 'idle')
        return <Loading/>

    if (status === 'failed')
        return <Error error={error}/>

    return (
        <>
            <div className="bg-dark hero-header mb-5">
                <div className="container-xxl py-5 mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src="/grill.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl">
                {mealCategories && mealCategories.map((category, index) => (
                    <MenuCategory key={category.idCategory} category={category} index={index}
                                  isEven={index % 2 === 0}/>
                ))}
            </div>
        </>
    );

};

export default Menu;
