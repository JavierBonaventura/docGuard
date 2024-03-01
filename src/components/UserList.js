import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserCRUD = ({ onCreateUserClick, onEditUserClick }) => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [statuses, setStatuses] = useState([]);


  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get("/api/v1/users");
        setUsers(usersResponse.data);

        const rolesResponse = await axios.get("/api/v1/roles");
        setRoles(rolesResponse.data);

        const accountResponse = await axios.get("/api/v1/accounts");
        setAccounts(accountResponse.data);

        const statusResponse = await axios.get("/api/v1/statuses");
        setStatuses(statusResponse.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/v1/user/${userId}`);
      // Actualizar la lista de usuarios después de eliminar uno
      const response = await axios.get("/api/v1/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = (userId) => {
    // Lógica para editar un usuario, por ejemplo, redirigir a la página de edición
    // Puedes usar navigate o simplemente cambiar la URL
  };


  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

// Función para obtener el nombre del rol según el ID
const getRoleName = (roleId) => {
  const role = roles.find((r) => r.roleid === roleId);
  return role ? role.rolename : "Unknown";
};

// Función para obtener el nombre del account según el ID
const getAccountName = (accountId) => {
  const account = accounts.find((r) => r.accountid === accountId);
  return account ? account.accountname : "Unknown";
};

// Función para obtener el nombre del status según el ID
const getStatusName = (statusId) => {
  const status = statuses.find((r) => r.statusid === statusId);
  return status ? status.statusname : "Unknown";
};


  return (
    <div className="container mx-auto py-4 px-4 ">
      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded py-2 px-1 w-2/5 mr-2"
          placeholder="Buscar usuario..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex-grow"></div>

        <Link to="/crearusuario" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-1 rounded">
          Crear usuario
        </Link>
      </div>

      <table className="min-w-full bg-white">
        <thead className=" text-black">
          <tr>
            <th className="border py-2 px-1">Nombre</th>
            <th className="border py-2 px-1">Apellido</th>
            <th className="border py-2 px-1">Email</th>
            <th className="border py-2 px-1">Role</th>
            <th className="border py-2 px-1">Account ID</th>
            <th className="border py-2 px-1">Password</th>
            <th className="border py-2 px-1">Status ID</th>
            <th className="border py-2 px-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.userid}>
              <td className="border px-1 py-2">{user.name}</td>
              <td className="border px-1 py-2">{user.lastname}</td>
              <td className="border px-1 py-2">{user.email}</td>
              <td className="border px-1 py-2">{getRoleName(user.roleid)}</td>
              <td className="border px-1 py-2">{getAccountName(user.accountid)}</td>
              <td className="border px-1 py-2">{user.password}</td>
              <td className="border px-1 py-2">{getStatusName(user.statusid)}</td>
              <td className="border px-1 py-2 ">
                <div className="flex justify-center"> 
                  {/* Botones de acciones */}
                  <button
                  onClick={() => editUser(user.userid)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteUser(user.userid)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCRUD;
