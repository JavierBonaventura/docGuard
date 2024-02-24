import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserCRUD = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editUserData, setEditUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/v1/user/${id}`);
      setUsers(users.filter((user) => user.userid !== id));
      navigate("/userlist");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditUser = (userData) => {
    setEditUserData(userData);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Listado de usuarios</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded py-2 px-4 w-2/5 mr-2"
          placeholder="Buscar usuario..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex-grow"></div>
        <Link to="/CreateUser">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Crear usuario
          </button>
        </Link>{" "}
      </div>

      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4">Apellido</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role ID</th>
            <th className="py-2 px-4">Account ID</th>
            <th className="py-2 px-4">Password</th>
            <th className="py-2 px-4">Status ID</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.userid}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.lastname}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.roleid}</td>
              <td className="border px-4 py-2">{user.accountid}</td>
              <td className="border px-4 py-2">{user.password}</td>
              <td className="border px-4 py-2">{user.statusid}</td>
              <td className="border px-4 py-2 ">
                <Link
                  to={{
                    pathname: `/editUser/${user.userid}`,
                    state: { user: user },
                  }}
                  className="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-[5px] px-2 rounded mr-4"
                  onClick={() => handleEditUser(user)}
                >
                  Editar
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDeleteUser(user.userid)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCRUD;
