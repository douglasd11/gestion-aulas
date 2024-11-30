import { useContext, useState } from "react";
import "../App.css";

import Modal from "../components/modal/Modal";
import useControlModal from "../hooks/useControlModal";

import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../tools/CONSTANTS";

import { useNavigate } from "react-router-dom";

import ReservationContext from "../context/Reservation/ReservationContext";
import useSession from "../context/Auth/useSession";



const HorarioS = () => {

    const { id: idRoom } = useParams();
    const navigate = useNavigate();

    const { session } = useSession()

    const { reservations, insertReservation } = useContext(ReservationContext);


    const [reservasS, setReservas] = useState([
        {
            id: 1,
            horas: ["7:00", "8:00", "9:00"],
            dia: "lunes",
            salon: "A101",
            bloque: "A",
        },
        {
            id: 2,
            horas: ["13:00", "14:00", "15:00"],
            dia: "jueves",
            salon: "A101",
            bloque: "A",
        },
        {
            id: 3,
            horas: ["8:00", "9:00", "10:00"],
            dia: "viernes",
            salon: "A101",
            bloque: "A",
        },
    ]);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const currentMonthName = monthNames[currentMonth - 1];
    const currentYear = currentDate.getFullYear();

    console.log("Fecha actual:", currentDate.getMonth());
    
    const getWeeksOfMonth = (month, year) => {
        const weeks = [];
        let currentDate = new Date(year, month, 1);
        while (currentDate.getMonth() === month) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                week.push({
                    day: currentDate.toLocaleString("es-ES", { weekday: "short" }).toUpperCase(),
                    date: currentDate.getDate(),
                });
                currentDate.setDate(currentDate.getDate() + 1);
            }
            weeks.push(week);
        }
        return weeks;
    };

    const weeksCurrent = getWeeksOfMonth(currentMonth, currentYear); // November

    const currentWeekIndex = weeksCurrent.findIndex(week =>
        week.some(day => day.date === currentDate.getDate())
    );

    console.log("Semanas de Noviembre:", weeksCurrent);

    // const currentWeek = weeksCurrent[currentWeekIndex];
    // const currentDay = currentWeek.find(day => day.date === currentDate.getDate());

    // console.log("Semanas de Noviembre:", weeksCurrent);
    // console.log("Semana actual:", currentWeek);
    // console.log("Día actual:", currentDay);

    



    const [horasSeleccionadas, setHorasSeleccionadas] = useState([]);

    const horasSemana = Array.from(
        { length: 12 },
        (_, i) => `${7 + i}:00`
    ).reduce((acc, hora) => {
        acc[hora] = {
            lunes: false,
            martes: false,
            miércoles: false,
            jueves: false,
            viernes: false,
        };
        return acc;
    }, {});

    reservasS.forEach((reserva) => {
        reserva.horas.forEach((hora) => {
            if (horasSemana[hora]) {
                horasSemana[hora][reserva.dia] = true;
            }
        });
    });

    const handleClick = (hora, dia, reserva) => {
        if (reserva) {
            alert(
                `No se pueden seleccionar horas con reserva - Hora: ${hora}, Día: ${dia}`
            );
            setHorasSeleccionadas([]);
            return;
        }

        const nuevaHoraSeleccionada = { hora: `${hora}:00`, dia };
        const index = horasSeleccionadas.findIndex(
            (h) =>
                h.hora === nuevaHoraSeleccionada.hora &&
                h.dia === nuevaHoraSeleccionada.dia
        );

        if (index !== -1) {
            if (index === 0 || index === horasSeleccionadas.length - 1) {
                setHorasSeleccionadas(
                    horasSeleccionadas.filter((_, i) => i !== index)
                );
            }
            return;
        }

        const esHoraAdyacente = horasSeleccionadas.some((horaSel) => {
            const horaSelInt = parseInt(horaSel.hora.split(":")[0]);
            const horaInt = parseInt(hora);
            return (
                horaSel.dia === dia &&
                (horaSelInt + 1 === horaInt || horaSelInt - 1 === horaInt)
            );
        });

        if (horasSeleccionadas.length > 0 && !esHoraAdyacente) {
            setHorasSeleccionadas([nuevaHoraSeleccionada]);
        } else {
            const nuevasHorasSeleccionadas = [
                ...horasSeleccionadas,
                nuevaHoraSeleccionada,
            ];
            nuevasHorasSeleccionadas.sort((a, b) => {
                return (
                    parseInt(a.hora.split(":")[0]) -
                    parseInt(b.hora.split(":")[0])
                );
            });
            setHorasSeleccionadas(nuevasHorasSeleccionadas);
        }
    };

    const [showModal, openModal, closeModal] = useControlModal({
        defaultIsOpen: false,
        handleClose: () => {},
    });


    const handleConfirmReservations = () => {
        console.log("Reservar", horasSeleccionadas);
        closeModal();

        insertReservation({
            spaceId: idRoom,
            userId: session.user.id ? session.user.id : session.user.uuid,
            reservationDate: "2021-10-10",
            startTime: horasSeleccionadas[0].hora,
            endTime: horasSeleccionadas[horasSeleccionadas.length - 1].hora,
            reservationReason: "Estudio",
            status: "pending",
            reservationType: "normal",
        });

        alert("Reservación exitosa");

        navigate(ROUTES.dashboard.reservations);
    }



    return (
        <>
            <main className="flex-1 p-10 bg-slate-50 overflow-auto">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-[22px] font-semibold mb-2">
                            Reserva a {idRoom}
                        </h1>

                        {/* <h2 className="text-xl font-medium mb-4">semana</h2> */}
                    </div>
                    <Link
                        to={ROUTES.dashboard.rooms}
                        className={"px-4 py-2 rounded h-10 text-white bg-slate-800 flex gap-2 items-center text-sm font-medium"}
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none" stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
                        Regresar
                    </Link>
                </div>

                <div className="flex items-center gap-2 mb-4 mt-3">
                    <button className="p-4 py-2 mr-3 border bg-white rounded-full min-w-20 border-slate-500 text-slate-600 text-sm font-medium transition-all hover:bg-slate-200">
                        Hoy
                    </button>
                    <button className="transition-all hover:bg-slate-200 rounded-full p-1 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                    </button>
                    <button className="transition-all hover:bg-slate-200 rounded-full p-1 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                    </button>
                    <h2 className="font-semibold text-xl text-slate-700 ml-4">{currentMonthName} {currentYear}</h2>
                </div>

                <table className="table-auto w-full border border-gray-300 bg-white">
                    <thead className="bg-slate-200">
                        <tr className="text-sm">
                            <th className="px-4 py-2 text-center min-w-24 w-[15%]">Hora</th>
                            <th className="px-4 py-2 text-center min-w-24 w-[16.5%]">LUN</th>
                            <th className="px-4 py-2 text-center min-w-24 w-[16.5%]">MAR</th>
                            <th className="px-4 py-2 text-center min-w-24 w-[16.5%]">MIÉ</th>
                            <th className="px-4 py-2 text-center min-w-24 w-[16.5%]">JUE</th>
                            <th className="px-4 py-2 text-center min-w-24 w-[16.5%]">VIE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }, (_, i) => (
                            <tr key={i}>
                                <td className="border px-4 py-2 font-medium text-center bg-slate-600 text-white">{`${
                                    7 + i
                                }:00`}</td>
                                {[
                                    "lunes",
                                    "martes",
                                    "miércoles",
                                    "jueves",
                                    "viernes",
                                ].map((dia) => {
                                    const reserva = reservasS.find(
                                        (reserva) =>
                                            reserva.horas.includes(
                                                `${7 + i}:00`
                                            ) && reserva.dia === dia
                                    );
                                    const isSelected = horasSeleccionadas.some(
                                        (hora) =>
                                            hora.hora === `${7 + i}:00` &&
                                            hora.dia === dia
                                    );
                                    return (
                                        <td
                                            key={dia}
                                            onClick={() =>
                                                handleClick(
                                                    `${7 + i}`,
                                                    dia,
                                                    reserva
                                                )
                                            }
                                            className={`border px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                                reserva ? "bg-green-400" : ""
                                            } ${
                                                isSelected ? "bg-slate-300" : ""
                                            }`}
                                        >
                                            {reserva
                                                ? `Reserva ${reserva.id}`
                                                : ""}
                                            {isSelected ? "Seleccionada" : ""}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {console.log(horasSeleccionadas)}

                <div className="flex justify-between mt-4">
                    <div>
                        {horasSeleccionadas.length !== 0 && (
                            <>
                                <h2 className="text-xl font-medium mb-2">
                                    Horas Seleccionadas:{" "}
                                    {horasSeleccionadas[0].dia}
                                </h2>
                                <ul className="flex gap-5">
                                    {horasSeleccionadas.map((hora, index) => (
                                        <li key={index} className="mb-1">
                                            {`${hora.hora}`}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <div>
                        <button
                            className={`px-4 py-2 rounded flex h-10 items-center gap-2 text-sm ${
                                horasSeleccionadas.length === 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 text-white hover:bg-blue-700"
                            }`}
                            disabled={horasSeleccionadas.length === 0}
                            onClick={openModal}
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" /><path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /></svg>
                            Continuar
                        </button>
                    </div>
                </div>
            </main>

            <Modal
                show={showModal}
                onClose={closeModal}
                title={"Reservar "+ idRoom}
                info={"Confirma el horario seleccionado"}
            >
                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Horas Seleccionadas: {horasSeleccionadas[0]?.dia}
                    </h2>
                    <ul className="flex gap-5">
                        {horasSeleccionadas?.map((hora, index) => (
                            <li key={index} className="mb-1">
                                {`${hora.hora}`}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        className={`px-4 py-2 mt-4 rounded ${
                            horasSeleccionadas.length === 0
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-500 text-white hover:bg-green-700"
                        }`}
                        disabled={horasSeleccionadas.length === 0}
                        onClick={handleConfirmReservations}
                    >
                        Confirmar Reserva
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default HorarioS;
