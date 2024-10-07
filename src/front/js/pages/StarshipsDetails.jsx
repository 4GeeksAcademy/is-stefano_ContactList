import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const StarshipsDetails = () => {
    const { store } = useContext(Context);
    const handleImgError = (event) => {
        console.log(event.target.src);
        event.target.src = 'https://cdn2.iconfinder.com/data/icons/star-wars-5/24/Millenium-Falcon-512.png'
    }
    return (

        <div className="container">
            <h1 className="text-center">Detalles de la nave</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-6">
                        <img src={""} className="card-img-top my-2" onError={handleImgError} />
                        <div className="card-body">
                            <h2 className="card-title">{store.currentStarship.name}</h2>
                            <p className="card-text">Model: {store.currentStarship.model}</p>
                            <p className="card-text">Manufacturer:  {store.currentStarship.manufacturer}</p>
                            <p className="card-text">Length:  {store.currentStarship.length}</p>
                            <p className="card-text">Crew:  {store.currentStarship.crew}</p>
                            <p className="card-text">Passengers:  {store.currentStarship.passengers}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
