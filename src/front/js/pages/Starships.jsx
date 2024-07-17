import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Starships = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const handleDetails = async (uri) => {
        await actions.getOneStarship(uri);
        navigate('/Starships-Details')
    }

    return (
        <div className="row d-flex col-10 m-auto" >
            {store.starships.map((item) =>
                <div className="card col-3 m-auto" >
                    <img src="" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title" key={item.uid}>{item.name}</h5>
                        <a className="btn btn-primary" onClick={() => handleDetails(item.url)}>Detalles</a>
                    </div>
                </div>
            )}
        </div>
    );
};

