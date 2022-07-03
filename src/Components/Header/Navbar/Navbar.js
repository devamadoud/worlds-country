import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Tamaou</h1>
            </div>
            <div className="navbar-links">
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/services">
                        <li>Services</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}