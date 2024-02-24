import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaInfoCircle, FaList } from 'react-icons/fa';

const Sidebar = ({ onGestionUsuariosClick }) => {
  const [gestionUsuariosVisible, setGestionUsuariosVisible] = useState(false);

  const handleGestionUsuariosClick = () => {
    const updatedVisibility = !gestionUsuariosVisible;
    setGestionUsuariosVisible(updatedVisibility);
    onGestionUsuariosClick(updatedVisibility);
  };
  
  return (
    <div className="bg-[#3b3b3c] h-screen w-1/5 pt-1 left-0 bottom-0 mb-4">
      <div className="grid grid-cols-1 gap-1">
        <div className="bg-gray-700 p-2 px-8 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200" onClick={handleGestionUsuariosClick}>
          <FaUser className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
           Gestion de Usuarios
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaHome className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 2
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaCog className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 3
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaInfoCircle className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 4
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaList className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 5
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaHome className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 6
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaUser className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 7
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaCog className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 8
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaInfoCircle className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 9
          </a>
        </div>
        <div className="bg-gray-700 p-2 px-8 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer transition-colors duration-200">
          <FaList className="text-white mr-2" />
          <a href="#" className="px-2 text-white block text-center">
            Opción 10
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
