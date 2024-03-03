import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from "./components/Login";
import UserList from "./components/UserList";
import CreateUserForm from "./components/CreateUserForm";
import EditUserForm from "./components/EditUserForm";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import CuentasList from "./components/CuentasList"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Al cargar la aplicación, intenta recuperar el estado de inicio de sesión desde el almacenamiento local
    const storedLoggedIn = localStorage.getItem('loggedIn');
    const storedUsername = localStorage.getItem('username');
    if (storedLoggedIn && storedUsername) {
      setLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al inicio

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
    // Almacenar estado de inicio de sesión en localStorage
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
    // Limpiar el estado de inicio de sesión en localStorage al cerrar sesión
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
  };

  return (
    <>
      {loggedIn ? (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <NavBar username={username} />
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            <Sidebar onLogout={handleLogout} />
            <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
              <Routes>
                <Route path="/crearusuario" element={<CreateUserForm />} />
                <Route path="/usuarios" element={<UserList />} />
                <Route path="/productos" element={<EditUserForm />} />
                <Route path="/cuentas" element={<CuentasList />} />

              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
