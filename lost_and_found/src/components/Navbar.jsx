import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.sass";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/report">Report</Link>
                <Link to="/find">Find</Link>
            </nav>
        </div>
    );
}

export default Navbar;