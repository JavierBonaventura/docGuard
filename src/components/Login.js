import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const LoginPage = () => {
    useEffect(() => {
        const video = document.getElementById("background-video");
        video.playbackRate = 0.7; // Ralentiza el video a la mitad
    }, []);

    return (
        <div className="font-sans relative">
            {/* Contenedor del video */}
            <div className="video-container absolute inset-0 z-0">
                {/* Inserta tu video aquí */}
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
                        <form action="#" method="POST">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-base font-medium text-black">Username</label>
                                <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-12">
                                <label htmlFor="password" className="block text-base font-medium text-black">Password</label>
                                <input type="password" id="password" name="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md" />
                            </div>
                            <div className="flex justify-between">
                                <div className="mb-4">
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Sign In
                                    </button>
                                </div>
                                <div className="mb-4">
                                    <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                                    
                                        <Link to="/register">Register</Link>
                                    </button>
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
