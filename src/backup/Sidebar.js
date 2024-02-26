import React, { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  const sidebarItems = [
    { name: 'Opción 1', icon: 'icono1.svg' },
    { name: 'Opción 2', icon: 'icono2.svg' },
    { name: 'Opción 3', icon: 'icono3.svg' },
    // Agrega más opciones si es necesario
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/6 bg-gray-800">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className={`w-full py-4 px-6 flex items-center text-white ${
              active === index ? 'bg-purple-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              src={item.icon}
              alt={`Ícono de ${item.name}`}
              className="mr-2 w-6 h-6"
            />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="flex-1 p-10">
        {/* Contenido principal aquí */}
      </div>
    </div>
  );
};

export default Sidebar;
