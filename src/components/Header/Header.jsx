import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/photos" className={({ isActive }) => isActive ? "active" : ""}>Photos</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default Header;