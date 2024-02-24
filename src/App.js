import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import UserList from "./components/UserList";
import CreateUserForm from "./components/CreateUserForm";
import EditUserForm from "./components/EditUserForm"
import "./App.css";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/createUser" element={<CreateUserForm />} />

          <Route path="/userList" element={<UserList />} />
          <Route path="/editUser/:userId" element={<EditUserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
