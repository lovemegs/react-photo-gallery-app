import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    <nav class="main-nav">
        <ul>
            <li><NavLink to='#'>Cats</NavLink></li>
            <li><NavLink to='#'>Dogs</NavLink></li>
            <li><NavLink to='#'>Computers</NavLink></li>
        </ul>
    </nav>
}

export default Nav;