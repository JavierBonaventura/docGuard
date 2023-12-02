import React, { useState } from "react";
import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"; 
import Content from './Content';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <Content />
      </div>
    </div>
    );
  }

  return (
    <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-700 mb-6">Please sign in to your account</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
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
