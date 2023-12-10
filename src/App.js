import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import DetalleItem from "./components/DetalleItem";
import Register from "./components/Register";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);
  const [gestionUsuariosVisible, setGestionUsuariosVisible] = useState(false);

  const handleGestionUsuariosClick = (isVisibleUserList) => {

    setGestionUsuariosVisible(isVisibleUserList);
    console.log(isVisibleUserList)
  };

  const handleLogin = (username) => {
    setIsLogged(true);
    setLoggedInUsername(username);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleVolver = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              isLogged ? (
                <div className="flex flex-col min-h-screen">
                  <Navbar
                    loggedInUsername={loggedInUsername}
                    onLogout={handleLogout}
                  />
                  <div className="flex flex-wrap">
                  <Sidebar onGestionUsuariosClick={handleGestionUsuariosClick} />
                    {selectedItem ? (
                      <DetalleItem
                        selectedItem={selectedItem}
                        onVolver={handleVolver}
                      />
                    ) : (
                      <Content onItemClick={handleItemClick} />
                    )}
                    {gestionUsuariosVisible && <UserList onGestionUsuariosClick={handleGestionUsuariosClick} />}
                  </div>
                </div>
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
