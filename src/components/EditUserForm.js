import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditUser = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        roleid: '',
        accountid: '',
        password: '',
        statusid: ''
    });

    console.log("el id es" + userId)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/api/v1/user/${userId}`);
                const userData = response.data;
               

                // Autocompletar los campos del formulario con los datos del usuario
                setFormData({
                    name: userData.name,
                    lastname: userData.lastname,
                    email: userData.email,
                    roleid: userData.roleid,
                    accountid: userData.accountid,
                    password: userData.password,
                    statusid: userData.statusid
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/user/${userId}`, formData);
            // Manejar el éxito de la actualización
            console.log('Usuario actualizado correctamente');
            navigate('/usuarios');
        } catch (error) {
            console.error('Error actualizando usuario:', error);
        }
    };

    return (
        <div className="container mx-auto ">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        className="border rounded py-2 px-4 w-full"
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                        Apellido
                    </label>
                    <input
                        className="border rounded py-2 px-4 w-full"
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Apellido"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border rounded py-2 px-4 w-full"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roleid">
                        Role ID
                    </label>
                    <input
                        className="border rounded py-2 px-4 w-full"
                        id="roleid"
                        type="text"
                        name="roleid"
                        value={formData.roleid}
                        onChange={handleChange}
                        placeholder="Role ID"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountid">
                        Account ID
                    </label>
                    <input
                        className="border rounded py-2 px-4 w-full"
                        id="accountid"
                        type="text"
                        name="accountid"
                        value={formData.accountid}
                        onChange={handleChange}
                        placeholder="Account ID"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className="border rounded py-2 px-4 w-full"
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statusid">
                        Status ID
                    </label>
                    <input
                        className="border rounded py-2 px-4 w-full"
                        id="statusid"
                        type="text"
                        name="statusid"
                        value={formData.statusid}
                        onChange={handleChange}
                        placeholder="Status ID"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Modificar Usuario
          </button>
          <Link to="/usuarios">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/usuarios")}
            >
              Volver
            </button>
          </Link>
        </div>
            </form>
        </div>
    );
};

export default EditUser;
