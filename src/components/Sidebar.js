import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCog, FaInfoCircle, FaList } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const [activeOption, setActiveOption] = useState(null);
  const location = useLocation();

  const sidebarOptions = [
    { icon: <FaUser />, label: 'Usuarios', route: '/usuarios' },
    { icon: <FaHome />, label: 'Opción 2', route: '/opcion2' },
    { icon: <FaCog />, label: 'Opción 3', route: '/opcion3' },
    { icon: <FaInfoCircle />, label: 'Opción 4', route: '/opcion4' },
    { icon: <FaList />, label: 'Opción 5', route: '/opcion5' },
    { icon: <FaHome />, label: 'Opción 6', route: '/opcion6' },
  ];

  useEffect(() => {
    const foundIndex = sidebarOptions.findIndex(option => option.route === location.pathname);
    if (foundIndex !== -1) {
      setActiveOption(foundIndex);
    }
  }, [location.pathname, sidebarOptions]);

  const handleClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className="bg-[#262731] h-screen w-1/6 pt-1 left-0 bottom-0 mb-4">
      <div className="py-2">
        {sidebarOptions.map((option, index) => (
          <Link
            to={option.route}
            key={index}
            className={`ml-2 w-11/12 py-3 px-6 flex items-center rounded-lg mt-1 ${
              activeOption === index
                ? "text-[#ffc619] bg-[#3b3f46] shadow-xl"
                : "text-white hover:bg-[#3b3f46] hover:shadow-xl hover:translate-x-1"
            }`}
            onClick={() => handleClick(index)}
          >
            <span className="mr-2">{option.icon}</span>
            <span>{option.label}</span>
          </Link>
        ))}
       
      </div>
      <button className="ml-2 w-1/6 mb-4 py-3 px-6 flex absolute bottom-0 items-center rounded-lg mt-1 text-white hover:text-red-500  hover:translate-x-1" onClick={onLogout}>
          <span className="mr-2"><FaHome /></span>
          <span>Cerrar sesión</span>
        </button>
    </div>
  );
};

export default Sidebar;
