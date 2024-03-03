import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaInfoCircle,
  FaList,
  FaFile,
} from "react-icons/fa";

function NavBar({ username }) {
  console.log(username);
  return (
    <div className="bg-[#262731] ">
      <div className="px-2 flex border-b-2 border-gray-700 py-3">
        <FaFile className="text-[#ffc619] text-3xl mr-2 ml-4" />
        <h1 className="text-[#ffc619] text-3xl font-bold text-center">
          Doc-Guard
        </h1>
        <p className="text-white ml-auto mr-6">
          <span>
            <span className="font-bold text-lg mr-4 text-white">
              Bienvenido{" "}
            </span>
            <span className="font-bold text-[#ffc619]">{username}</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default NavBar;
