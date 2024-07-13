import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleEye = (person) => {
    actions.setCurrentContact(person);
    navigate('/contact-details');
  };

  const handleTrash = async (item) => {
    actions.setCurrentContact(item);
    await actions.deleteUser();
    actions.getUsers();
  };

  const handleEdit = (item) => {
    actions.setCurrentContact(item);
    navigate("/ContactEdit")
  };

  const handleSubmit = (item) => {
    item.preventDefault();
    actions.setUser(username);
    actions.getUsers();
  };

  const handleImgError = (event) => {
    console.log(event.target.src);
    event.target.src = 'https://media1.tenor.com/m/ANAuC61sW6UAAAAd/gato-abriendo-y-cerrando-la-boca.gif'
  }

  return (
    <div className="container text-start">
      <h1 className="text-center text-success">Contactos de {store.cohorte}</h1>
      <form onSubmit={handleSubmit} className="mb-4"> 
        <div className="mb-3">
          <input
            type="text" id="username" placeholder="Usuario:" className="form-control" value={username}
            onChange={(item) => setUsername(item.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Ver</button>
      </form>
      <div className="row d-flex flex-column">
        {store.contacts.map((item) =>
          <div key={item.id} className="col-md-6 mb-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-4 mb-3">
                  <img src={`https://randomuser.me/api/portraits/women/${store.currentContact.id}.jpg`} className="img-fluid rounded-start" onError={handleImgError} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="d-flex justify-content-end">
                      <span className="btn btn-sm text-primary me-2" onClick={() => handleEye(item)}>
                        <i className="far fa-eye"></i>
                      </span>
                      <span className="btn btn-sm text-success me-2" onClick={() => handleEdit(item)} ><i className="far fa-edit"></i></span>
                      <span className="btn btn-sm text-danger" onClick={() => handleTrash(item)}><i className="fas fa-trash"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
