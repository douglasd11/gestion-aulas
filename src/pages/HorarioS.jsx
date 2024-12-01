import { useContext, useEffect, useState } from "react";
import "../App.css";

import Modal from "../components/modal/Modal";
import useControlModal from "../hooks/useControlModal";

import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../tools/CONSTANTS";

import { useNavigate } from "react-router-dom";

import ReservationContext from "../context/Reservation/ReservationContext";
import useSession from "../context/Auth/useSession";
import SweetAlert2 from "react-sweetalert2";


const HorarioS = () => {

    const { id: idRoom } = useParams();
    const navigate = useNavigate();

    const { session } = useSession()
    const { reservations, insertReservation } = useContext(ReservationContext);
    const [swalProps, setSwalProps] = useState({});


    const [motivo, setMotivo] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState();

    const [pivoteWeek, setPivoteWeek] = useState(0);
    const [currentWeekDays, setCurrentWeekDays] = useState([]);

    const [currentMonthName, setCurrentMonthName] = useState("");
    const [currentYear, setCurrentYear] = useState(0);
    const [currentDay, setCurrentDay] = useState(0);

    console.log("Reservas:", reservations);

    const transformData = (reservations) => {

        let reservationsFiltered = reservations.filter(reservation => reservation.spaceId === idRoom);

        return reservationsFiltered.map((reservation, index) => {
            const startHour = parseInt(reservation.startTime.split(":")[0]);
            const endHour = parseInt(reservation.endTime.split(":")[0]);
            const horas = [];
            for (let i = startHour; i < endHour; i++) {
                horas.push(`${i}:00`);
            }
    
            const reservationDate = new Date(reservation.reservationDate);
            reservationDate.setDate(reservationDate.getDate() + 1);
            return {
                id: reservation.id, // Usar el índice como ID
                horas,
                dia: reservationDate.toLocaleString("es-ES", { weekday: "long" }),
                salon: reservation.spaceId,
                bloque: reservation.spaceId[0], // Usar la primera letra de spaceId como bloque
                numeroDia: reservationDate.getDate(),
            };
        });
    };

    const [reservasS, setReservas] = useState(transformData(reservations));
    console.log("Reservas transformadas:", reservasS);

    const currentDate = new Date();
    // const currentMonth = currentDate.getMonth() + 1;

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // const currentMonthName = monthNames[currentMonth - 1];
    // const currentYear = currentDate.getFullYear();
    // const currentDay = currentDate.getDate();

    //console.log("Fecha actual:", currentDay);


    const getCurrentWeekDays = () => {
        let currentDate = new Date();

        //console.log(pivoteWeek, "pivoteweek");
        
        currentDate.setDate(currentDate.getDate() + (pivoteWeek*7));

        setCurrentMonthName(monthNames[currentDate.getMonth()]);
        setCurrentYear(currentDate.getFullYear());
        setCurrentDay(currentDate.getDate());

        let firstDayOfWeek = currentDate.getDate() - currentDate.getDay() + 1;

        if (firstDayOfWeek < 1) {
            currentDate.setMonth(currentDate.getMonth() - 1);
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            //console.log(daysInMonth, "Días en el mes");
           
            //console.log(daysInMonth, firstDayOfWeek, "ACAAA 2");

            firstDayOfWeek = daysInMonth + firstDayOfWeek;
        }

        //console.log(currentDate.getDate(), (currentDate.getDay() + 1), "TODO");
        //console.log(firstDayOfWeek, "Resultado");


        const weekDays = [];

        // pendiente depurar
        for (let i = 0; i < 5; i++) {
            const day = new Date(currentDate.setDate(parseInt(firstDayOfWeek) + i));
            //console.log(day, (firstDayOfWeek+i), "Día de la semana");
            weekDays.push({
                day: day.toLocaleString("es-ES", { weekday: "long" }).toUpperCase().slice(0, 3),
                date: day.getDate(),
                month: day.getMonth() + 1,
                year: day.getFullYear(),
            });
        }

        return weekDays;
    };

    // currentWeekDays = getCurrentWeekDays();
    // console.log("Días de la semana actual:", currentWeekDays);



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

    const handleClick = (hora, dia, fecha, reserva) => {
        if (reserva) {
            alert(
                `No se pueden seleccionar horas con reserva - Hora: ${hora}, Día: ${dia} ${fecha.date}`
            );
            setHorasSeleccionadas([]);
            setFechaSeleccionada(null);
            return;
        }

        setFechaSeleccionada(fecha);

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
        reservationDate: `${fechaSeleccionada.year}-${fechaSeleccionada.month}-${fechaSeleccionada.date}`,
        startTime: horasSeleccionadas[0].hora,
        endTime: horasSeleccionadas[horasSeleccionadas.length - 1].hora,
        reservationReason: motivo !== "" ? motivo : "No especificado",
        status: "pendiente",
        reservationType: "normal",
      });
  
      setSwalProps({
        show: true,
        title: "¡Reservación exitosa!",
        text: "Tu reservación ha sido creada exitosamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
        didClose: () => {
          navigate(ROUTES.dashboard.reservations);
        },
      });
    };

    useEffect(() => {
        setCurrentWeekDays(getCurrentWeekDays());
        console.log("Días de la semana actual:", currentWeekDays);

    }, [pivoteWeek]);

    // console.log("prueba: ", currentWeekDays[0]?.month - 1)


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
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none" stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
                        Regresar
                    </Link>
                </div>

                <div className="flex items-center gap-2 mb-4 mt-3">
                    <button onClick={() => setPivoteWeek(0)} className={`p-4 py-2 mr-3 border rounded-full min-w-20 border-slate-500 text-slate-600 text-sm font-medium transition-all hover:bg-slate-200 ${pivoteWeek === 0 ? 'bg-slate-200' : 'bg-white'}`}>
                        Hoy
                    </button>
                    <button onClick={() => setPivoteWeek(pivoteWeek - 1)} className="transition-all hover:bg-slate-200 rounded-full p-1 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                    </button>
                    <button onClick={() => setPivoteWeek(pivoteWeek + 1)} className="transition-all hover:bg-slate-200 rounded-full p-1 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                    </button>
                    <h2 className="font-semibold text-xl text-slate-700 ml-4">{currentMonthName} {currentYear}</h2>
                </div>

                <table className="table-auto w-full border border-gray-300 bg-white">
                    <thead className="bg-slate-200">
                        <tr className="text-xs">
                            <th className="px-4 py-2 text-center text-sm min-w-24 w-[15%]">Hora</th>
                            {
                                currentWeekDays.map((day, index) => (
                                    <th key={index} className="px-4 py-2 text-center font-normal min-w-24 w-[16.5%]">
                                        <div>
                                            <p>{day.day}</p>
                                            <span className="text-base font-semibold">{day.date}</span>
                                        </div>
                                    </th>
                                ))
                            }
                            {/* <th className="px-4 py-2 text-center font-medium min-w-24 w-[16.5%]"><div><p>LUN</p><span className="text-base">25</span></div></th>
                            <th className="px-4 py-2 text-center font-medium min-w-24 w-[16.5%]"><div><p>MAR</p><span className="text-base">25</span></div></th>
                            <th className="px-4 py-2 text-center font-medium min-w-24 w-[16.5%]"><div><p>MIÉ</p><span className="text-base">25</span></div></th>
                            <th className="px-4 py-2 text-center font-medium min-w-24 w-[16.5%]"><div><p>JUE</p><span className="text-base">25</span></div></th>
                            <th className="px-4 py-2 text-center font-medium min-w-24 w-[16.5%]"><div><p>VIE</p><span className="text-base">25</span></div></th> */}
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
                                ].map((dia, index) => {
                                    const reserva = reservasS.find(
                                        (reserva) =>
                                            reserva.horas.includes(
                                                `${7 + i}:00`
                                            ) && reserva.dia === dia &&
                                            reserva.numeroDia === currentWeekDays[index]?.date
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
                                                    currentWeekDays[index],
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
                                                ? `Reserva ${reserva?.id.slice(0, 8)}`
                                                : ""}
                                            {isSelected ? "Seleccionada" : ""}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>

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
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" /><path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /></svg>
                            Continuar
                        </button>
                    </div>
                </div>
            </main>

            <Modal
                show={showModal}
                onClose={closeModal}
                title={"Reservar "+ idRoom}
                info={""}
            >
                <div>
                    {/* {console.log("Horas seleccionadas", horasSeleccionadas)} */}
                    <p className="mb-4">Confirma el horario seleccionado</p>
                    <h2 className="font-medium mb-2">
                        Horas Seleccionadas: {horasSeleccionadas[0]?.dia}
                    </h2>
                    <ul className="flex gap-5">
                        {horasSeleccionadas?.map((hora, index) => (
                            <li key={index} className="mb-1">
                                {`${hora.hora}`}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-5">
                        <label htmlFor="">Motivo de reserva</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded p-2 px-3 mt-1"
                            placeholder="Estudio"
                            value={motivo}
                            onChange={(e) => setMotivo(e.target.value)}
                        />
                    </div>
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

            <SweetAlert2 {...swalProps} />
        </>
    );
};

export default HorarioS;
