import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateUserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    roleid: "",
    accountid: "",
    password: "",
    statusid: "", // Cambiado a tipo string para el desplegable
  });

  const [roles, setRoles] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch("/api/v1/roles");
        if (!response.ok) {
          throw new Error("Error al obtener roles");
        }
        const rolesData = await response.json();
        setRoles(rolesData);
      } catch (error) {
        console.error("Error al obtener roles:", error);
      }
    };

    const fetchAccounts = async () => {
      try {
        const response = await fetch("/api/v1/accounts");
        if (!response.ok) {
          throw new Error("Error al obtener cuentas");
        }
        const accountsData = await response.json();
        setAccounts(accountsData);
      } catch (error) {
        console.error("Error al obtener cuentas:", error);
      }
    };

    const fetchStatuses = async () => {
      try {
        const response = await fetch("/api/v1/statuses");
        if (!response.ok) {
          throw new Error("Error al obtener estados");
        }
        const statusesData = await response.json();
        setStatuses(statusesData);
      } catch (error) {
        console.error("Error al obtener estados:", error);
      }
    };

    fetchRoles();
    fetchAccounts();
    fetchStatuses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convertir roleid, accountid y statusid a números
      const roleid = parseInt(formData.roleid);
      const accountid = parseInt(formData.accountid);
      const statusid = parseInt(formData.statusid);
  
      // Verificar si la conversión fue exitosa
      if (isNaN(roleid) || isNaN(accountid) || isNaN(statusid)) {
        throw new Error("Los campos Role ID, Account ID y Status ID deben ser números.");
      }
  
      // Actualizar formData con los valores convertidos
      const updatedFormData = {
        ...formData,
        roleid,
        accountid,
        statusid,
      };
  
      const response = await fetch("/api/v1/adduser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
  
      if (!response.ok) {
        throw new Error("Error al crear usuario");
      }
  
      console.log("Usuario creado exitosamente");
      navigate("/home");
  
      setFormData({
        name: "",
        lastname: "",
        email: "",
        roleid: "",
        accountid: "",
        password: "",
        statusid: "",
      });
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };
  

  return (
    <div className="container mx-auto ">
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

        {/* Resto de campos de entrada similares */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="roleid"
          >
            Role ID
          </label>
          <select
            className="border rounded py-2 px-4 w-full"
            id="roleid"
            name="roleid"
            value={formData.roleid}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Role</option>
            {roles.map((role) => (
              <option key={role.roleid} value={role.roleid}>
                {role.rolename}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountid"
          >
            Account ID
          </label>
          <select
            className="border rounded py-2 px-4 w-full"
            id="accountid"
            name="accountid"
            value={formData.accountid}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Cuenta</option>
            {accounts.map((account) => (
              <option key={account.accountid} value={account.accountid}>
                {account.accountname}
              </option>
            ))}
          </select>
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
          <select
            className="border rounded py-2 px-4 w-full"
            id="statusid"
            name="statusid"
            value={formData.statusid}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Estado</option>
            {statuses.map((status) => (
              <option key={status.statusid} value={status.statusid}>
                {status.statusname}
              </option>
            ))}
          </select>
        </div>
        {/* Resto de campos de entrada similares */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Crear Usuario
          </button>
          <Link to="/">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/")}
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
