import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { FiAlertTriangle } from "react-icons/fi";


const LoginPage = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [showErrorPopup, setShowErrorPopup] = useState(false); // Estado para controlar la visibilidad del popup de error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/v1/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                onLogin(formData.username);
                console.log('Login successful');
            } else {
                console.error('Login failed');
                setShowErrorPopup(true); // Mostrar el popup de error si el inicio de sesión falla
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    useEffect(() => {
        const video = document.getElementById('background-video');
        video.playbackRate = 0.6;
    }, []);

    return (
        <div className="font-sans relative">
            <div className="video-container absolute inset-0 z-0">
                <video autoPlay muted loop id="background-video" className="w-full h-full object-cover">
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>

            <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-sm w-full space-y-8">
                    <div className="login-box">
                        <h2 className="text-2xl font-bold mb-1">Welcome Back!</h2>
                        <h3 className="text-lg mb-4">Please sign in to your account</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-base font-medium text-black">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border rounded placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div className="mb-12">
                                <label htmlFor="password" className="block text-base font-medium text-black">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border rounded placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="mb-4">
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {showErrorPopup && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <div className="absolute bg-gray-100 border border-gray-300 rounded-lg px-6 py-8 shadow-lg flex items-center">
          
            <div>
                <h2 className="text-lg font-semibold mb-2 text-red-600 flex items-center">
                <FiAlertTriangle className="text-4xl text-red-600 mr-2" />
                    <span className="mr-2 text-lg">Login Failed</span>
                </h2>
                <p className="text-sm">Incorrect username or password. Please try again.</p>
                <button onClick={() => setShowErrorPopup(false)} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded">OK</button>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default LoginPage;
