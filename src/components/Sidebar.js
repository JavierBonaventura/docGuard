import React from 'react';
import { FaHome, FaUser, FaCog, FaInfoCircle, FaList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-[#3b3b3c] h-screen w-1/5 pt-1 left-0 bottom-0 mb-4">
      <div className="grid grid-cols-1 gap-1">
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaHome className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 1
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaUser className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 2
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaCog className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 3
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaInfoCircle className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 4
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaList className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 5
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaHome className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 6
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaUser className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 7
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaCog className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 8
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaInfoCircle className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 9
          </a>
        </div>
        <div className="bg-gray-700 p-2 w-full hover:bg-gray-800 flex items-center cursor-pointer">
          <FaList className="text-white mr-2" />
          <a href="#" className="text-white block text-center">
            Opción 10
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
