import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const ContactDetails = () => {
  const { store, actions } = useContext(Context)
  const handleImgError = (event) => {
    console.log(event.target.src);
    event.target.src = 'https://media1.tenor.com/m/ANAuC61sW6UAAAAd/gato-abriendo-y-cerrando-la-boca.gif'
  }
  return (
    <div className="container">
      <h1 className="text-center">Detalles de contacto</h1>
      <div className="container">
        <div className="row justify-content-center"> 
        <div className="card col-4">
          {!store.currentContact ?
            'Sin datos'
            :
            <>
              <img src={`https://randomuser.me/api/portraits/women/${store.currentContact.id}.jpg`} className="card-img-top my-2" onError={handleImgError} />
              <div className="card-body">
                <h2 className="card-title">{store.currentContact.name}</h2>
                <p className="card-text">Email: {store.currentContact.email}</p>
                <p className="card-text">Phone:  {store.currentContact.phone}</p>
                <p className="card-text">Address:  {store.currentContact.address}</p>
              </div>
              <Link to="/Contact">
                <button className="btn btn-outline-success my-2" type="submit">Regresar</button>
              </Link>
            </>
          }
        </div>
        </div>

      </div>
    </div>
  )
}