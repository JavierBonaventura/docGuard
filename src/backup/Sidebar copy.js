import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaInfoCircle,
  FaList,
  FaFile,
} from "react-icons/fa";
import sidebarIcon from "../Imagenes/pipeguard.svg";

const Sidebar = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  const sidebarItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "User", icon: <FaUser /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Info", icon: <FaInfoCircle /> },
    { name: "List", icon: <FaList /> },
    { name: "Home", icon: <FaHome /> },
    { name: "User", icon: <FaUser /> },

    // Agrega más opciones si es necesario
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar */}
      <div className="flex-1 flex">
        <div className="w-1/6 bg-[#262731]">
          <div className="flex items-center justify-center border-b-2 border-gray-700 shadow-lg py-3">
            <FaFile className="text-[#ffc619] text-3xl mr-2" />{" "}
            {/* Assuming "text-3xl" for 38px */}
            <h1 className="text-[#ffc619] text-3xl font-bold text-center ">
              Doc-Guard
            </h1>
          </div>{" "}
          
          <div className="py-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`ml-2 w-11/12 py-3 px-6 flex items-center rounded-lg mt-1 ${
                active === index
                  ? "	 text-[#ffc619] bg-[#3b3f46] shadow-xl "
                  : "text-white hover:bg-[#3b3f46] hover:shadow-xl"
              }`}
              onClick={() => handleClick(index)}
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}

</div>
        </div>

        <div className="flex-1">
          {/* Barra de navegación */}
          <div className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
            <h1 className="text-black text-xl font-bold">Mi Aplicación</h1>
            {/* Puedes agregar más elementos de la barra de navegación aquí */}
          </div>
          <div className="py-6 px-6 ">
            {/* Formulario de registro de usuario */}
            <form className="bg-[#f6f7f9] p-6   shadow-lg">
              <h2 className="text-2xl mb-4">Registro de Usuario</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Nombre de usuario
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Nombre de usuario"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Correo electrónico
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
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
                  className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Repetir Contraseña
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
