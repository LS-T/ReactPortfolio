import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="navbar navbar-light mx-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-link">
                        <Link to="/">About</Link>
                        </li>
                        <li className="nav-item nav-link">
                        <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item nav-link">
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;