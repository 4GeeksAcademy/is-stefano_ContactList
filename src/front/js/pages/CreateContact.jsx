import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

const CreateContact = () => {
    const {actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (item) => {
        setFormData({ ...formData, [item.target.name]: item.target.value });
    };

    const handleSubmit = (item) => {
        item.preventDefault();
        actions.createUser(formData);
        setFormData({ name: '', email: '', phone: '', address: '' });
    };

    return (
        <div className="row">
            <div className="container col-4 ">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Teléfono</label>
                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary my-2 ">Create Contact</button>
        </form>
            </div>
        </div>
    );
};

export default CreateContact;
