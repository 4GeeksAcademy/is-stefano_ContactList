import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Species = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDetails = async (uri) => {
        await actions.getSpecies(uri);
        navigate('/Species-Details')
    }

    return (
        <div className="row d-flex  col-10 m-auto" >
            {store.species.map((item) =>
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
