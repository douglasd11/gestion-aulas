import { useState } from "react";
import "../App.css";

const ReservaU = () => {
    const [reservas, setReservas] = useState([
        { dia: "Lunes", hora: "8:00", salon: "A101" },
        { dia: "Martes", hora: "9:00", salon: "B202" },
        { dia: "Miércoles", hora: "10:00", salon: "C303" },
        { dia: "Jueves", hora: "11:00", salon: "B204" },
        { dia: "Viernes", hora: "12:00", salon: "A105" },
    ]);

    const handleClick = (codigo) => {
        alert(`Cancelando reserva del ${codigo}`);
    };

    return (
        <>
            <main className="flex-1 p-10">
                <h1 className="text-2xl font-bold mb-4">Lista de reservas</h1>
                <div className="overflow-x-auto mx-auto max-w-3xl">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">
                                    Día
                                </th>
                                <th className="border border-gray-300 p-2">
                                    Hora
                                </th>
                                <th className="border border-gray-300 p-2">
                                    Salón
                                </th>
                                <th className="border border-gray-300 p-2">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas.map((reserva, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 p-2">
                                        {reserva.dia}
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        {reserva.hora}
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        {reserva.salon}
                                    </td>
                                    <td className="border border-gray-300 p-2 flex justify-center">
                                        <button
                                            onClick={() =>
                                                handleClick(reserva.salon)
                                            }
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                        >
                                            Cancelar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default ReservaU;
