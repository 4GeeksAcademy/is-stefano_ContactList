import React from "react";
import { Link } from "react-router-dom";

export const Shopping = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/CreateContact">
                    <button className="btn btn-outline-primary" type="submit">New Contact</button>
                </Link>
            </div>
        </nav>
    );
};
