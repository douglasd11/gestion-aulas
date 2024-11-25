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
        { tipo: 'Luz', estado: 'Encendido', salon: 'B101' },
        { tipo: 'Televisor', estado: 'Apagado', salon: 'B102' },
        { tipo: 'Aire Acondicionado', estado: 'Encendido', salon: 'B103' },
        { tipo: 'Luz', estado: 'Apagado', salon: 'B104' },
        { tipo: 'Televisor', estado: 'Encendido', salon: 'B105' },
        { tipo: 'Luz', estado: 'Encendido', salon: 'C101' },
        { tipo: 'Televisor', estado: 'Apagado', salon: 'C102' },
        { tipo: 'Aire Acondicionado', estado: 'Encendido', salon: 'C103' },
        { tipo: 'Luz', estado: 'Apagado', salon: 'C104' },
        { tipo: 'Televisor', estado: 'Encendido', salon: 'C105' },
        { tipo: 'Luz', estado: 'Encendido', salon: 'Lab1' },
        { tipo: 'Televisor', estado: 'Apagado', salon: 'Lab2' },
        { tipo: 'Aire Acondicionado', estado: 'Encendido', salon: 'Lab3' },
        { tipo: 'Luz', estado: 'Apagado', salon: 'Lab4' },
        { tipo: 'Televisor', estado: 'Encendido', salon: 'Lab5' },
    ]);

    const [salonSeleccionado, setSalonSeleccionado] = useState('');

    const salones = [
        'A101', 'A102', 'A103', 'A104', 'A105',
        'B101', 'B102', 'B103', 'B104', 'B105',
        'C101', 'C102', 'C103', 'C104', 'C105',
        'Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5'
    ];

    const handleSalonClick = (salon) => {
        setSalonSeleccionado(salon);
    };

    const dispositivosFiltrados = dispositivos.filter(dispositivo => dispositivo.salon === salonSeleccionado);

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
            <h1 className="text-2xl font-bold mb-4">Dispositivos IoT</h1>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Selecciona un salón:</h3>
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border-b border-gray-300">Bloque A</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Bloque B</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Bloque C</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Laboratorios</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                        {salones.slice(0, 5).map((salon, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSalonClick(salon)}
                                                className={`block w-full text-left px-4 py-2 my-1 rounded ${salonSeleccionado === salon ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                            >
                                                {salon}
                                            </button>
                                        ))}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                        {salones.slice(5, 10).map((salon, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSalonClick(salon)}
                                                className={`block w-full text-left px-4 py-2 my-1 rounded ${salonSeleccionado === salon ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                            >
                                                {salon}
                                            </button>
                                        ))}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                        {salones.slice(10, 15).map((salon, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSalonClick(salon)}
                                                className={`block w-full text-left px-4 py-2 my-1 rounded ${salonSeleccionado === salon ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                            >
                                                {salon}
                                            </button>
                                        ))}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                        {salones.slice(15).map((salon, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSalonClick(salon)}
                                                className={`block w-full text-left px-4 py-2 my-1 rounded ${salonSeleccionado === salon ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                            >
                                                {salon}
                                            </button>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {salonSeleccionado && (
                        <div>
                            <h3 className="text-lg font-semibold">Dispositivos en el salón {salonSeleccionado}:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                {dispositivosFiltrados.map((dispositivo, index) => (
                                    <button key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50 text-left">
                                        <p><strong>Tipo:</strong> {dispositivo.tipo}</p>
                                        <p><strong>Estado:</strong> {dispositivo.estado}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DispositivosAdmin;