import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const CharactersDetails = () => {
    const { store } = useContext(Context);
    const handleImgError = (event) => {
        console.log(event.target.src);
        event.target.src = 'https://p7.hiclipart.com/preview/416/831/630/r2-d2-computer-icons-star-wars-chewbacca-stormtrooper-death-star.jpg'
    }
    return (

        <div className="container">
            <h1 className="text-center">Detalles de {store.currentCharacter.name} </h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-6">
                        <img src={""} className="card-img-top my-2" onError={handleImgError} />
                        <div className="card-body">
                            <p className="card-text">Gender: {store.currentCharacter.gender}</p>
                            <p className="card-text">Height:  {store.currentCharacter.height}</p>
                            <p className="card-text">Weight:  {store.currentCharacter.mass}</p>
                            <p className="card-text">Birth:  {store.currentCharacter.birth_year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
