import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#fece2f] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-lg ">DOC GUARD</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-black">Inicio</a>
          </li>
          <li>
            <a href="#" className="text-black">Acerca de</a>
          </li>
          <li>
            <a href="#" className="text-black">Servicios</a>
          </li>
          <li>
            <a href="#" className="text-black">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
