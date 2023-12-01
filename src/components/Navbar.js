import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#e3b016] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">DOC GUARD</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white">Inicio</a>
          </li>
          <li>
            <a href="#" className="text-white">Acerca de</a>
          </li>
          <li>
            <a href="#" className="text-white">Servicios</a>
          </li>
          <li>
            <a href="#" className="text-white">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
