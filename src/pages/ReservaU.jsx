import { useContext, useState } from "react";
import "../App.css";
import Table from "../components/table/Table";
import { ROUTES } from "../tools/CONSTANTS";
import { Link } from "react-router-dom";

import ReservationContext from "../context/Reservation/ReservationContext";

const ReservaU = () => {

    const { reservations } = useContext(ReservationContext);

    console.log(reservations);

    // const [reservas, setReservas] = useState([
    //     { dia: "Lunes", hora: "8:00", salon: "A101" },
    //     { dia: "Martes", hora: "9:00", salon: "B202" },
    //     { dia: "Miércoles", hora: "10:00", salon: "C303" },
    //     { dia: "Jueves", hora: "11:00", salon: "B204" },
    //     { dia: "Viernes", hora: "12:00", salon: "A105" },
    // ]);

    const handleDelete = (codigo) => {
        alert(`Cancelando reserva del ${codigo}`);
    };

    return (
        <>
            <main className="flex-1 p-10">
                <h1 className="text-2xl font-bold mb-4">Lista de reservas</h1>
                <div className="overflow-x-auto mx-auto p-3">
                    
                <Table
                config={{
                    title: "Reservas",
                    subTitle: "",
                    otherOptions: () => {
                        return (
                            <>
                                {/* <button
                                    className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    View All
                                </button> */}
                                <Link to={ROUTES.dashboard.rooms}
                                    className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        strokeWidth="2"
                                        className="w-4 h-4"
                                    >
                                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a
                                                    .75.75 0 000-1.5h-2.25V7.5z"></path>
                                    </svg>
                                    Nueva reserva
                                </Link>
                            </>
                        )
                    },
                    data: [
                        {
                            name: "A101",
                            reservationDate: "2021-10-05",
                            startTime: "1:00",
                            endTime: "4:00",
                            reservationReason: "Reunion de trabajo",
                            status: "Pendiente",
                        },
                        {
                            name: "A102",
                            reservationDate: "2021-10-05",
                            startTime: "1:00",
                            endTime: "2:00",
                            reservationReason: "Reunion de trabajo",
                            status: "Pendiente",
                        },
                        {
                            name: "A103",
                            reservationDate: "2021-10-05",
                            startTime: "1:00",
                            endTime: "3:00",
                            reservationReason: "Reunion de trabajo",
                            status: "Pendiente",
                        },
                       
                    ],
                    headers: [
                        { key: "name", label: "Espacio", type: "chip", chipCondition: "" },
                        { key: "reservationDate", label: "Fecha", type: "date" },
                        { key: "startTime", label: "Hora inicio", type: "text" },
                        { key: "endTime", label: "Hora salida", type: "text" },
                        { key: "reservationReason", label: "Motivo", type: "text" },
                        { key: "status", label: "Estado", type: "chip" },
                        
                    ],
                    actions: [
                        {
                            icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>,
                            onClick: () => console.log("Delete"),
                        },
                    ], 
                    actionsConfig: {
                        label: "Acciones",
                    }
                }}

            />
            
                </div>
            </main>
        </>
    );
};

export default ReservaU;
