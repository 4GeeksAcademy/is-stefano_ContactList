import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const SpeciesDetails = () => {
    const { store } = useContext(Context);
    const handleImgError = (event) => {
        console.log(event.target.src);
        event.target.src = 'https://p7.hiclipart.com/preview/416/831/630/r2-d2-computer-icons-star-wars-chewbacca-stormtrooper-death-star.jpg'
    }
    return (

        <div className="container">
            <h1 className="text-center">Detalles de {store.currentSpecies.name} </h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-6">
                        <img src={""} className="card-img-top my-2" onError={handleImgError} />
                        <div className="card-body">
                            <p className="card-text">Classification: {store.currentSpecies.classification}</p>
                            <p className="card-text">Language:  {store.currentSpecies.language}</p>
                            <p className="card-text">Average Height:  {store.currentSpecies.average_height}</p>
                            <p className="card-text">Average Lifespan:  {store.currentSpecies.average_lifespan}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
