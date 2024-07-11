import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Contact } from "./Contact.jsx";
import { Navbar } from "../component/navbar.jsx";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Agenda de contactos</h1>
		</div>
	);
};
