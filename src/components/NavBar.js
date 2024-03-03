import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch ,
  FaFile,
} from "react-icons/fa";

function NavBar({ username }) {
  return (
    <div className="bg-gradient-to-r from-[#262731] to-[#181c42] ">
      <div className="px-2 flex items-center justify-between border-b-2 border-gray-700 py-3">
        <div className="flex items-center">
          <FaFile className="text-[#ffc619] text-3xl mr-2" />
          <h1 className="text-[#ffc619] text-3xl font-bold">
            Doc-Guard
          </h1>
        </div>

        <div className="flex items-center justify-center flex-1"> {/* Centra el buscador horizontalmente */}
          <div className="flex items-center rounded-full bg-white px-2 py-2 w-2/4">
            <FaSearch className="text-gray-500 mr-2" />
            <input type="text" placeholder="Buscar" className="bg-transparent focus:outline-none flex-1" />
          </div>
        </div>
 
        <div className="ml-auto mr-6">
          <span className="font-bold text-lg mr-4 text-white">
            Bienvenido {" "}
          </span>
          <span className="font-bold text-[#ffc619]">{username}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
