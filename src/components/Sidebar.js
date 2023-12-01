// Sidebar.js

import React, { useState } from 'react';

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="bg-gray-800 h-screen w-1/5 p-4 left-0 bottom-0 mb-4">
              <ul className="flex flex-col space-y-4">
        <li>
          <a href="#" className="text-white" onClick={toggleSubMenu}>
            Opción 1
          </a>
          {showSubMenu && (
            <ul className="ml-4 mt-2">
              <li>
                <a href="#" className="text-white">
                  Sub-Opción 1
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Sub-Opción 2
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className="text-white">
            Opción 2
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Opción 3
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Opción 4
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Opción 5
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
