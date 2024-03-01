import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserCRUD = ({ onCreateUserClick, onEditUserClick }) => {
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
      navigate("/home");
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
       
        <button
          onClick={onCreateUserClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-1 rounded"
        >
          Crear usuario
        </button>
     
      </div>

      <table className="min-w-full bg-white">
        <thead className=" text-black">
          <tr>
            <th className="border py-2 px-1">Nombre</th>
            <th className="border py-2 px-1">Apellido</th>
            <th className="border py-2 px-1">Email</th>
            <th className="border py-2 px-1">Role ID</th>
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
              <td className="border px-1 py-2">{user.roleid}</td>
              <td className="border px-1 py-2">{user.accountid}</td>
              <td className="border px-1 py-2">{user.password}</td>
              <td className="border px-1 py-2">{user.statusid}</td>
              <td className="border px-1 py-2 ">
                <div className="flex justify-center">
                  {" "}
                  
                  <button
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-[5px] px-2 rounded mr-4"
  // onClick={() => {
  //   handleEditUser(user);
  //   onEditUserClick();
  // }}
  onClick={onEditUserClick}
>
  Editar
</button>

                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDeleteUser(user.userid)}
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
