import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const StarshipDetails = () => {
    const { store, actions } = useContext(Context);
    const starship = store.starship;
    useEffect(() => {
        return () => actions.setStarship({})
    }, [])
    const handleImgError = (event) => {
        event.target.src= 'https://cdn-icons-png.freepik.com/256/2010/2010147.png?semt=ais_hybrid'
    };

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card contact-card my-2">
                        <div className="card-body">
                            <img
                                className="card-img-top"
                                src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                                onError={handleImgError}
                                alt={starship.name}
                            />
                            <div>
                                <h5 className="card-title">{starship.name}</h5>
                                <p className="card-text">
                                    Model: {starship.properties?.model}<br />
                                    Cargo capacity: {starship.properties?.cargo_capacity}<br />
                                    Cost: {starship.properties?.cost_in_credits}<br />
                                    Passengers: {starship.properties?.passengers}<br />
                                </p>
                            </div>
                            <div>
                                <Link to="/starships">
                                    <button type="button" className="btn btn-primary">Starships List</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};