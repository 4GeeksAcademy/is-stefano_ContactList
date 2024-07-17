import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Contact } from "./Contact.jsx";
import { Navbar } from "../component/navbar.jsx";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center mt-5 ">
			<h1>Elije tu destino...</h1>
			<Link to="/Contact">
				<button className="btn btn-success me-3" type="submit">Contact List</button>
			</Link>
			<Link to="/StarWars">
				<button className="btn btn-danger" type="submit">StarWars</button>
			</Link>
		</div>
	);
};
