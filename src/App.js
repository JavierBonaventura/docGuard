import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import UserList from "./components/UserList";
import CreateUserForm from "./components/CreateUserForm";
import EditUserForm from "./components/EditUserForm";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    console.log(username)
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
  };

  return (
    <Router>
      {loggedIn ? (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <NavBar  username={username}/>
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            <Sidebar  onLogout={handleLogout} />
            <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
              <Routes>
                <Route path="/crearusuario" element={<CreateUserForm />} />
                <Route path="/usuarios" element={<UserList />} />
                <Route path="/productos" element={<EditUserForm />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
