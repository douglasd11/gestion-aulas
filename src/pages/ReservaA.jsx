import '../App.css';
import Logo from '../assets/LogoIsoft.png';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReservaA = () => {
    const [reservas, setReservas] = useState([
        { dia: 'Lunes', hora: '8:00', salon: 'A101', estado: 'solicitud', usuario: 'Juan Pérez' },
        { dia: 'Martes', hora: '9:00', salon: 'B202', estado: 'activa', usuario: 'Ana Gómez' },
        { dia: 'Miércoles', hora: '10:00', salon: 'C303', estado: 'rechazada', usuario: 'Carlos Ruiz' },
        { dia: 'Jueves', hora: '11:00', salon: 'C104', estado: 'activa', usuario: 'María López' },
        { dia: 'Viernes', hora: '12:00', salon: 'B205', estado: 'solicitud', usuario: 'Luis Fernández' },
    ]);

    const renderReservas = (estado) => {
        return reservas
            .filter((reserva) => reserva.estado === estado)
            .map((reserva, index) => (
                <div key={index} className="reserva-item" style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                    <p><strong>Usuario:</strong> {reserva.usuario}</p>
                    <p><strong>Día:</strong> {reserva.dia}</p>
                    <p><strong>Hora:</strong> {reserva.hora}</p>
                    <p><strong>Salón:</strong> {reserva.salon}</p>
                </div>
            ));
    };

    return (
        <>
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
                <main className="flex-1 p-10 flex-col flex items-center">
                    <h1 className="text-2xl font-bold mb-4">Lista de reservas</h1>
                <div style={{ width: '50%', maxWidth: '1200px', height: '500px', border: '2px solid blue', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
                    <Tabs>
                        <TabList style={{ backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '8px 8px 0 0' }}>
                            <Tab style={{ backgroundColor: '#6aa9e9', padding: '10px', borderRadius: '8px 8px 0 0' }}>Solicitud</Tab>
                            <Tab style={{ backgroundColor: '#98c3ed', padding: '10px', borderRadius: '8px 8px 0 0' }}>Activas</Tab>
                            <Tab style={{ backgroundColor: '#cfe2ff', padding: '10px', borderRadius: '8px 8px 0 0' }}>Rechazadas</Tab>
                        </TabList>

                        <TabPanel>
                            <div>{renderReservas('solicitud')}</div>
                        </TabPanel>
                        <TabPanel>
                            <div>{renderReservas('activa')}</div>
                        </TabPanel>
                        <TabPanel>
                            <div>{renderReservas('rechazada')}</div>
                        </TabPanel>
                    </Tabs>
                </div>
            </main>
        </div>
        </>
    );
};

export default ReservaA;