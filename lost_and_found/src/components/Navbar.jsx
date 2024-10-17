import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/find">Find</Link></li>
                <li><Link to="/report">Report</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
