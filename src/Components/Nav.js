import React from "react";
import { NavLink } from "react-router-dom";

// Navigation links
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/flowers'>Flowers</NavLink></li>
                <li><NavLink to='/rainbows'>Rainbows</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;