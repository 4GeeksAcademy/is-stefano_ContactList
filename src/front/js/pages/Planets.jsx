
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    const handleOnClick = (url) => {
        actions.getPlanet(url);
    };
    const handleFavorite = (planet) => {
        actions.addFavorite(planet);
    };
    const handleImgError = (event) => {
        event.target.src= 'https://cdn-icons-png.freepik.com/256/2010/2010147.png?semt=ais_hybrid'
    }
    useEffect(() => {
        actions.getPlanets()
    }, [])


    return (
        <div className="container">
            <div className="row">
                {store.planets?.map((planet) => (
                    <div key={planet.uid} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card contact-card h-100">
                            <div className="card-body d-flex flex-column">
                                <img
                                    className="card-img-top mb-3"
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                    alt={planet.name}
                                    onError={handleImgError}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <h5 className="card-title">{planet.name}</h5>
                                <div className="mt-auto">
                                    <Link to="/planet-details">
                                        <button type="button" onClick={() => handleOnClick(planet.url)} className="btn btn-primary me-2"><i className="fas fa-eye"></i></button>
                                    </Link>
                                    <button type="button" onClick={() => handleFavorite(planet)} className="btn btn-primary">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
=======
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDetails = async (uri) => {
        await actions.getPlanets(uri);
        navigate('/Planet-Details')
    }

    return (
        <div className="row d-flex  col-10 m-auto" >
            {store.planets.map((item) =>
                <div className="card col-3 m-auto" >
                    <img src="" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title" key={item.uid}>{item.name}</h5>
                        <a className="btn btn-primary" onClick={() => handleDetails(item.url)}>Detalles</a>
                    </div>
                </div>
            )}
        </div>
    )
};

