import { useState } from "react";
import "../App.css";
import Logo from "../assets/LogoIsoft.png";

import Modal from "../components/modal/Modal";
import useControlModal from "../hooks/useControlModal";

const HorarioS = () => {
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

    console.log(horasSemana, "linea 35");

    return (
        <>
            <main className="flex-1 p-10">
                <h1 className="text-2xl font-bold mb-4">
                    Horarios por semana --- Aula A202
                </h1>

                <table className="table-auto w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-center">Hora</th>
                            <th className="px-4 py-2 text-center">Lunes</th>
                            <th className="px-4 py-2 text-center">Martes</th>
                            <th className="px-4 py-2 text-center">Miércoles</th>
                            <th className="px-4 py-2 text-center">Jueves</th>
                            <th className="px-4 py-2 text-center">Viernes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }, (_, i) => (
                            <tr key={i}>
                                <td className="border px-4 py-2 text-center bg-blue-400 text-white">{`${
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
                                <h2 className="text-xl font-semibold mb-2">
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
                            className={`px-4 py-2 rounded ${
                                horasSeleccionadas.length === 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 text-white hover:bg-blue-700"
                            }`}
                            disabled={horasSeleccionadas.length === 0}
                            onClick={openModal}
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </main>

            <Modal
                show={showModal}
                onClose={closeModal}
                title={"Reservar Espacio"}
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
                        onClick={closeModal}
                    >
                        Confirmar Reserva
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default HorarioS;
