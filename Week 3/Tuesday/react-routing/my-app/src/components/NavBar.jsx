import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from '../assets/elytra_studios_logo.jpg'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <img src={logo} alt="company-logo" />
                <h1 className="company-name">Elytra Studios</h1>
            </div>

            <div className="route-btn">
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                    Home
                </NavLink>

                <NavLink to="/About" className={({ isActive }) => isActive ? "active-link" : ""}>
                    About
                </NavLink>

                <NavLink to="/Products" className={({ isActive }) => isActive ? "active-link" : ""}>
                    Products
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;