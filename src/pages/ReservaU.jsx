import { useContext, useState } from "react";
import "../App.css";
import Table from "../components/table/Table";
import { ROUTES } from "../tools/CONSTANTS";
import { Link } from "react-router-dom";

import ReservationContext from "../context/Reservation/ReservationContext";
import Info from "../components/Info";

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
            <main className="flex-1 p-10 bg-slate-50">
                <div className="flex gap-1 mb-4">
                    <h1 className="text-2xl font-bold">Lista de reservas</h1>
                    <Info>
                        <div className="p-3 w-72 bg-white">
                            <p className="text-sm text-gray">
                                Aquí se presentan los salones por su respectivo
                            </p>
                        </div>
                    </Info>
                </div>
                
                <div className="overflow-x-auto mx-auto pt-4">
                    
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
                                    className="flex select-none items-center gap-2 rounded bg-blue-500 hover:bg-blue-700 py-2.5 px-4 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" /><path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /></svg>
                                    Nueva Reserva
                                </Link>
                            </>
                        )
                    },
                    data: reservations,
                    headers: [
                        { key: "spaceId", label: "Espacio", type: "chip", chipCondition: "" },
                        { key: "reservationDate", label: "Fecha", type: "date" },
                        { key: "startTime", label: "Hora inicio", type: "text" },
                        { key: "endTime", label: "Hora salida", type: "text" },
                        { key: "reservationReason", label: "Motivo", type: "text" },
                        { key: "status", label: "Estado", type: "chip" },
                        
                    ],
                    actions: [
                        {
                            icon: <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>,
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
