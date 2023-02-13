import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/flowers'>Flowers</NavLink></li>
                <li><NavLink to='/rainbows'>Rainbows</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;