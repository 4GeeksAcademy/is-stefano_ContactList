import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const PlanetDetails = () => {
    const { store } = useContext(Context);
    const handleImgError = (event) => {
        console.log(event.target.src);
        event.target.src = 'https://www.vhv.rs/dpng/d/465-4654243_planet-i-planet-png-icon-transparent-png.png'
    }
    return (

        <div className="container">
            <h1 className="text-center">Detalles de {store.currentPlanet.name} </h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-6">
                        <img src={""} className="card-img-top my-2" onError={handleImgError} />
                        <div className="card-body">
                            <p className="card-text">Terrain: {store.currentPlanet.terrain}</p>
                            <p className="card-text">Climate:  {store.currentPlanet.climate}</p>
                            <p className="card-text">Rotation period:  {store.currentPlanet.rotation_period}</p>
                            <p className="card-text">Orbital period:  {store.currentPlanet.orbital_period}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
