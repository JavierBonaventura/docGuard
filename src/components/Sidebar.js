import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaInfoCircle, FaList, FaFile } from "react-icons/fa";
import sidebarIcon from "../Imagenes/pipeguard.svg";
import UserList from "./UserList";
import CreateUserForm from "./CreateUserForm";
import EditUser from "./EditUserForm";

const Sidebar = () => {
  const [active, setActive] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState('UserList');

  const handleClick = (index) => {
    setActive(index);
    switch(index) {
      case 0:
        setSelectedComponent('UserList');
        break;
      case 1:
        setSelectedComponent('CreateUserForm');
        break;
      case 2:
        setSelectedComponent('Settings');
        break;
      case 3:
        setSelectedComponent('Info');
        break;
      case 4:
        setSelectedComponent('List');
        break;
      default:
        setSelectedComponent('UserList');
    }
  };

  const handleCreateUserClick = () => {
    setSelectedComponent('CreateUserForm');
  };

  
  const handleEditUserClick = () => {
    console.log("hola")
    setSelectedComponent('EditUserForm');
  };

  const sidebarItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "User", icon: <FaUser /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Info", icon: <FaInfoCircle /> },
    { name: "List", icon: <FaList /> },
    { name: "Home", icon: <FaHome /> },
    { name: "User", icon: <FaUser /> },
  ];

  const renderSelectedComponent = () => {
    switch(selectedComponent) {
      case 'UserList':
        return <UserList onCreateUserClick={handleCreateUserClick} onEditUserClick={handleEditUserClick} />;
      case 'CreateUserForm':
        return <CreateUserForm />;
        case 'EditUserForm':
          return <EditUser />;
      default:
        return <UserList />;
    }
  };
  

  return (
    <div className="flex h-screen">
      <div className="w-1/6 bg-[#262731]">
        <div className="flex items-center justify-center border-b-2 border-gray-700 shadow-lg py-3">
          <FaFile className="text-[#ffc619] text-3xl mr-2" />
          <h1 className="text-[#ffc619] text-3xl font-bold text-center ">Doc-Guard</h1>
        </div>{" "}
        <div className="py-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`ml-2 w-11/12 py-3 px-6 flex items-center rounded-lg mt-1 ${
                active === index
                  ? "text-[#ffc619] bg-[#3b3f46] shadow-xl "
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

      <div className="flex-1 overflow-y-auto">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default Sidebar;
