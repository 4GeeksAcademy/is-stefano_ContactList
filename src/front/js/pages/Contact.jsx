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

  const handleEdit = async (item) => { 
    actions.setCurrentContact(item);
    await actions.editUser();
    actions.getUsers();
  };

  const handleSubmit = (item) => {
    item.preventDefault();
    actions.setUser(username);
    actions.getUsers();
  };

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
      <ul className="list-group">
        {store.contacts.map((item) =>
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name}
            <div>
              <span className="btn btn-sm text-primary me-2" onClick={() => handleEye(item)}>
                <i className="far fa-eye"></i>
              </span>
              <span className="btn btn-sm text-success me-2" onClick={() => handleEdit(item)} ><i className="far fa-edit"></i></span>
              <span className="btn btn-sm text-danger" onClick={() => handleTrash(item)}><i className="fas fa-trash"></i></span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};
