import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData)
        try {
            const response = await fetch('/api/v1/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            // console.log(response)
            if (response.ok) {
                onLogin(formData.username);

                // Manejar la respuesta exitosa (redireccionar, mostrar mensaje, etc.)
                console.log('Login successful');
            } else {
                // Manejar errores de inicio de sesión (mostrar mensaje de error, etc.)
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    useEffect(() => {
        const video = document.getElementById('background-video');
        video.playbackRate = 0.6; // Cambia 0.5 al valor que desees para ajustar la velocidad de reproducción
    }, []);

    return (
        <div className="font-sans relative">
            {/* Contenedor del video */}
            <div className="video-container absolute inset-0 z-0">
                <video autoPlay muted loop id="background-video" className="w-full h-full object-cover">
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>

            {/* Contenido de la página */}
            <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-sm w-full space-y-8">
                    <div className="login-box"> {/* Contenedor del formulario de login */}
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
                                <div className="mb-4">
                                    <Link to="/register" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                                        Register
                                    </Link>
                                </div>
                                <div>
                                    <a href="#" className="text-sm text-black font-medium hover:text-gray-900">Forgot your password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
