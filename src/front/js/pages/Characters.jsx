
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    const handleOnClick = (url) => {
        actions.getCharacter(url);
    };
    const handleFavorite = (character) => {
        actions.addFavorite(character);
    };
    const handleImgError = (event) => {
        event.target.src= 'https://cdn-icons-png.freepik.com/256/2010/2010147.png?semt=ais_hybrid'
    };

    useEffect(() => {
        actions.getCharacters()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {store.characters?.map((character) => (
                    <div key={character.uid} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card contact-card h-100">
                            <div className="card-body d-flex flex-column">
                                <img
                                    className="card-img-top mb-3"
                                    src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                    alt={character.name}
                                    onError={handleImgError}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <h5 className="card-title">{character.name}</h5>
                                <div className="mt-auto">
                                    <Link to="/character-details">
                                        <button type="button" onClick={() => handleOnClick(character.url)} className="btn btn-primary me-2"><i className="fas fa-eye"></i></button>
                                    </Link>
                                    <button type="button" onClick={() => handleFavorite(character)} className="btn btn-primary">
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

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDetails = async (uri) => {
        await actions.getCharacter(uri);
        navigate('/Character-Details')
    }

    return (
        <div className="row d-flex  col-10 m-auto" >
            {store.characters.map((item) =>
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
