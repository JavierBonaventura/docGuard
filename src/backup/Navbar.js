import React from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';

const Navbar = ({ onLogout, loggedInUsername }) => {


  const gothamBlack = {
    fontFamily: "Gotham Black",
  }


  const handleSignOut = () => {
    onLogout();
  };

  return (
    <nav className="bg-[#fece2f] p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center"> 
        <div className="text-black font-bold text-2xl" style={gothamBlack}>
          DOC GUARD
        </div>
        <IoDocumentTextOutline className="text-black font-bold text-2xl ml-2" style={gothamBlack} />
      </div>
      <div className="flex space-x-4">
          {/* <div className="hover:bg-yellow-200 px-2 py-1 rounded-md transition-colors duration-300">
            <a href="#" className="text-black">Inicio</a>
          </div>
          <div className="hover:bg-yellow-200 px-2 py-1 rounded-md transition-colors duration-300">
            <a href="#" className="text-black">Acerca de</a>
          </div>
          <div className="hover:bg-yellow-200 px-2 py-1 rounded-md transition-colors duration-300">
            <a href="#" className="text-black">Servicios</a>
          </div> */}
          <div className="hover:bg-yellow-200 px-2 py-1 rounded-md transition-colors duration-300">
            <a href="#" className="text-black" onClick={handleSignOut}>Logout</a>      
          </div>
          <div className="hover:bg-yellow-200 px-2 py-1 rounded-md transition-colors duration-300">
        <a href="#" className="text-black">
        Usuario logueado - {loggedInUsername}
        </a>
      </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
