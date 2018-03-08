import React from "react";
import {PropTypes} from "prop-types";
import { NavLink } from "react-router-dom";

const NavBar = ({ logo }) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
            <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                    className="nav-link">
                <div className="navbar-header navbar-logo">
                    <img className="main-image" src={logo} alt="logoImage" />
                </div>
                </NavLink>

                <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                    className="nav-link"> Menu </NavLink>
                <NavLink
                    exact
                    to="/offers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>
                <NavLink
                    exact
                    to="/cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>
                <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-link">About</NavLink>
            </div>
        </nav>

    );
}

// make sure to get always the logo, which is a string in app.js
NavBar.propTypes = {
    logo: PropTypes.string.isRequired
}

export default NavBar;
