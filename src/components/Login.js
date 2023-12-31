import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch('https://backend-doc-guard.vercel.app/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Autenticación exitosa
        onLogin(username);
        console.log(username)
      } else {
        // Autenticación fallida
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud de autenticación', error);
      alert('Error al realizar la autenticación. Por favor, inténtelo de nuevo.');
    }
  };

  const handleRegister = () => {
    // Add logic for registration here
    console.log("Register button clicked");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-700 mb-6">Please sign in to your account</p>
          <form onKeyPress={handleKeyPress}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#fece2f] hover:bg-[#c09000] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <button
              className="bg-[#4285f4] hover:bg-[#255eb2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
            >
              <Link to="/register">Register</Link>
            </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-[#fece2f] hover:text-[#c09000]"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
