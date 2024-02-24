import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateUserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    roleid: 0, // Cambiado a tipo numérico
    accountid: 0, // Cambiado a tipo numérico
    password: "",
    statusid: 0, // Cambiado a tipo numérico
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "roleid" || name === "accountid" || name === "statusid"
          ? parseInt(value, 10)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/adduser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al crear usuario");
      }

      // Aquí puedes manejar el éxito de la creación del usuario
      console.log("Usuario creado exitosamente");
      navigate("/userlist");

      // Aquí puedes agregar lógica adicional, como limpiar el formulario después de la creación
      setFormData({
        name: "",
        lastname: "",
        email: "",
        roleid: 0, // Cambiado a tipo numérico
        accountid: 0, // Cambiado a tipo numérico
        password: "",
        statusid: 0, // Cambiado a tipo numérico
      });
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };
  return (
    <div className="container mx-auto w-8/12">
      <h1 className="text-3xl font-bold mb-4">Crear Usuario</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="roleid"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountid"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="statusid"
          >
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
            Crear Usuario
          </button>
          <Link to="/userlist">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/userlist")}
            >
              Volver
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
