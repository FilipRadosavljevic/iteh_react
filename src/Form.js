import React from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './FormBMI.css';

const Form = () => {

    return (
        <Router>
            <div id="gradient">
                <div className="header-flex-container bg-dark">
                    <div className="header-navbar ">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link text-white" to="/">BMI</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link text-white" to="/tdee">TDEE</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="header-title">
                        <h1 className="text-white">ITEH - React</h1>
                    </div>
                    <div className="header-last-third"></div>
                </div>

                <Routes>
                    <Route exact path="/tdee" element={< FormOne />}></Route>
                    <Route exact path="/" element={< FormTwo />}></Route>

                </Routes>

            </div>
        </Router>
    )
}

export default Form