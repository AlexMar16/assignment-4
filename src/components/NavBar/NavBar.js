import React from 'react';
import {PropTypes} from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavBar = ({ logo }) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header navbar-logo">
                    <img className="main-image" src={logo} alt="logoImage" />
                </div>
                <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                    className="nav-link"> pizzas</NavLink>
                <NavLink
                    exact
                    to="/offers"
                    activeClassName="active"
                    className="nav-link"> offers</NavLink>
                <NavLink
                    exact
                    to="/cart"
                    activeClassName="active"
                    className="nav-link"> cart</NavLink>
                <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-link"> about</NavLink>
            </div>
        </nav>

    );
}

// make sure to get always the logo, which is a string in app.js
NavBar.propTypes = {
    logo: PropTypes.string.isRequired
}

export default NavBar;
