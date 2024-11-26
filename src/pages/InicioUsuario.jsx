import React from 'react';
import '../App.css';
import Logo from '../assets/LogoIsoft.png';

const InicioUsuario = ({ nombreUsuario }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-500 p-4 flex justify-between items-center h-14">
        <div className='flex items-center'>
            <img src={Logo} alt="Logo" className="h-14" />
            <h2 className="text-white text-xl font-semibold ml-2">ClassMatch</h2>
            </div>
            <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">Cuenta</button>
        </header>
        <div className="flex h-[calc(100vh-56px)]">
        <aside className="w-64 bg-gray-800 text-white h-full p-4">
            <nav>
                <ul>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Inicio</a></li>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Salones</a></li>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Reservas</a></li>
                </ul>
            </nav>
            </aside>
                <main className="flex-1 flex flex-col justify-center items-center p-4">
                    <h2 className="text-3xl font-semibold mb-4">Bienvenido, {nombreUsuario}</h2>
                    <p className="mb-8 text-center">Consulta la disponibilidad de los salones o revisa tus reservas pendientes.</p>
                    <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg">Salones</button>
                        <button className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg">Reservas</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default InicioUsuario;