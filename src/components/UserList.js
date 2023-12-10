import React, { useState, useEffect } from 'react';
import { AiOutlineUser, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://backend-doc-guard.vercel.app/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios', error);
      }
    };

    fetchUsers();
  }, []);

  const handleEditUser = (userId) => {
    // Implementa la lógica para editar el usuario con el id proporcionado
    console.log('Editar usuario con ID:', userId);
  };

  const handleDeleteUser = async (userId) => {
    try {
      // Realiza la llamada a la API para eliminar el usuario
      await fetch(`https://backend-doc-guard.vercel.app/users/${userId}`, {
        method: 'DELETE',
      });

      // Actualiza el estado eliminando el usuario de la lista
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
    }
  };

  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {users.map((user) => (
        <li key={user.id} className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <AiOutlineUser className="w-8 h-8 text-gray-900 dark:text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Nombre de Usuario: {user.name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Email: {user.email}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Id: {user._id}
              </p>
            </div>
            <div className="flex-shrink-0 space-x-2">
              <button
                onClick={() => handleEditUser(user._id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <AiOutlineEdit />
              </button>
              <button
                onClick={() => handleDeleteUser(user._id)}
                className="text-red-500 hover:text-red-700"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
