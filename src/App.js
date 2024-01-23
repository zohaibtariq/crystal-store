import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';
import Meals from './components/Meals';
import Favourites from './components/Favourites';
import MealGenerator from './components/MealGenerator';
import Meal from "./components/Meal";
import './styles/style.css';

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
                 aria-label="Ninth navbar example">
                <div className="container-xl">
                    <a className="navbar-brand" href="#OneStore">OneStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Menu
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/meal-generator">
                                    Meal Generator
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-me">
                                    About Me
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favourites">
                                    My Favourites
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <InnerRoutes/>
            <footer className="footer fixed-bottom bg-white d-flex justify-content-center align-items-center custom">
                <div className="container">
                    <p className="float-end m-0 p-3"><a href="#">Back to top</a></p>
                    <p className={`m-0 p-3`}>&copy; 2023–2024 Company, Inc. &middot; <a href="#Privacy">Privacy</a> &middot; <a href="#Terms">Terms</a></p>
                </div>
            </footer>
        </Router>
    );
};

const InnerRoutes = () => {
    return (
        <Routes>
            <Route path="/about-me" element={<AboutMe/>}/>
            <Route path="/" element={<Menu/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/meal-generator" element={<MealGenerator/>}/>
            <Route path="/meals/:categoryName" element={<Meals/>}/>
            <Route path="/meal/:mealId" element={<Meal/>}/>
        </Routes>
    );
};

export default App;
