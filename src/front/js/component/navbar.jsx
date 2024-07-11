import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to = "/">
				<button className="btn" href="#">Home</button>
				</Link>
				<Link to = "/Contact">
				<button className="btn btn-outline-success" type="submit">Contact</button>
				</Link>	
				<Link to = "/CreateContact">
				<button className="btn btn-outline-primary" type="submit">New Contact</button>
				</Link>				
			</div>
		</nav>
	);

};
