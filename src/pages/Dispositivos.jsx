import React, { useState } from 'react';
import '../App.css';
import Logo from '../assets/LogoIsoft.png';

const DispositivosAdmin = () => {
    const [dispositivos, setDispositivos] = useState([
        { tipo: 'Luz', estado: 'Encendido', salon: 'A101' },
        { tipo: 'Televisor', estado: 'Apagado', salon: 'A102' },
        { tipo: 'Aire Acondicionado', estado: 'Encendido', salon: 'A103' },
        { tipo: 'Luz', estado: 'Apagado', salon: 'A104' },
        { tipo: 'Televisor', estado: 'Encendido', salon: 'A105' },
    ]);

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
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Horario</a></li>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Salones</a></li>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Reservas</a></li>
                </ul>
            </nav>
            </aside>
            <main className="flex-1 p-10">
            <h1 className="text-2xl font-bold">Dispositivos del Salón</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dispositivos.map((dispositivo, index) => (
                            <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                                <p><strong>Tipo:</strong> {dispositivo.tipo}</p>
                                <p><strong>Estado:</strong> {dispositivo.estado}</p>
                                <p><strong>Salón:</strong> {dispositivo.salon}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            
        </div>
    );
};

export default DispositivosAdmin;