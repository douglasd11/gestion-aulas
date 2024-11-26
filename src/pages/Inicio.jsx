import React from "react";
import "../App.css";

import Header from "../components/Header";
import Menu from "../components/menu";

const InicioUsuario = ({ nombreUsuario }) => {
    return (
        <main className="flex flex-col flex-1 justify-center items-center p-4 bg-slate-100">
            <h2 className="text-3xl font-semibold mb-4">
                Bienvenido, {nombreUsuario}
            </h2>
            <p className="mb-8 text-center">
                Consulta la disponibilidad de los salones o revisa tus reservas
                pendientes.
            </p>
            <div className="flex space-x-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg">
                    Salones
                </button>
                <button className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg">
                    Reservas
                </button>
            </div>
        </main>
    );
};

export default InicioUsuario;
