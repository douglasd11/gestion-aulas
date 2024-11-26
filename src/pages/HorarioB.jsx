import "../App.css";
import Logo from "../assets/LogoIsoft.png";
import { useState } from "react";
import Info from "../components/Info";

const HorarioB = () => {
    const [bloque, setBloque] = useState("");
    const salonesPorBloque = {
        bloqueA: generateSalones("A"),
        bloqueB: generateSalones("B"),
        bloqueC: generateSalones("C"),
        laboratorios: generateLaboratorios(),
    };

    function generateSalones(letter) {
        const salones = [];
        for (let row = 0; row < 3; row++) {
            const rowSalones = [];
            rowSalones.push(`Piso ${row + 1}`);
            for (let col = 0; col < 5; col++) {
                rowSalones.push(`${letter}${row + 1}0${col + 1}`);
            }
            salones.push(rowSalones);
        }
        return salones;
    }

    function generateLaboratorios() {
        return [["Lab 1", "Lab 2", "Lab 3", "Lab 4", "Lab 5"]];
    }

    const handleChange = (event) => {
        setBloque(event.target.value);
    };

    const handleClick = (codigo) => {
        alert(`Cargando horario del ${codigo}`);
    };

    return (
        <>
            <main className="flex-1 p-10">
                <div className="flex h-12 items-center">
                    <h1 className="text-2xl font-bold">Horarios - Salones</h1>

                    <Info>
                        <div className="p-3 w-72 bg-white">
                            <p className="text-sm text-gray">
                                Aquí se presentan los salones por su respectivo
                            </p>
                        </div>
                    </Info>
                </div>

                <label
                    htmlFor="bloque"
                    className="block text-lg font-medium text-gray-700 mb-2"
                >
                    Selecciona un bloque:
                </label>
                <select
                    id="bloque"
                    value={bloque}
                    onChange={handleChange}
                    className="block w-1/4 p-2 border border-blue-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
                >
                    <option value="">--Selecciona un bloque--</option>
                    <option value="bloqueA">Bloque A</option>
                    <option value="bloqueB">Bloque B</option>
                    <option value="bloqueC">Bloque C</option>
                    <option value="laboratorios">Laboratorios</option>
                </select>

                {bloque ? (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                {bloque === "laboratorios" ? (
                                    salonesPorBloque[bloque][0].map(
                                        (lab, index) => (
                                            <th
                                                key={index}
                                                className="py-2 px-4 border-b text-center"
                                            >
                                                {lab}
                                            </th>
                                        )
                                    )
                                ) : (
                                    <>
                                        <th className="py-2 px-4 border-b text-center bg-gray-200">
                                            Piso
                                        </th>
                                        {[...Array(5)].map((_, index) => (
                                            <th
                                                key={index}
                                                className="py-2 px-4 border-b text-center"
                                            >
                                                Salón {index + 1}
                                            </th>
                                        ))}
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {salonesPorBloque[bloque].map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-gray-100"
                                >
                                    {row.map((salon, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`py-2 px-4 border-b text-center ${
                                                colIndex === 0 &&
                                                bloque !== "laboratorios"
                                                    ? "bg-blue-200 text-blue-700 font-semibold"
                                                    : ""
                                            }`}
                                        >
                                            {colIndex === 0 &&
                                            bloque !== "laboratorios" ? (
                                                salon // Renderizar el piso sin botón y en color diferenciado
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleClick(salon)
                                                    }
                                                    className="w-full h-full bg-transparent transition-all text-gray-600 py-1 px-2 rounded hover:bg-blue-600 hover:text-white"
                                                >
                                                    {salon}
                                                </button>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border-b text-center bg-gray-200">
                                    Piso
                                </th>
                                {[...Array(5)].map((_, index) => (
                                    <th
                                        key={index}
                                        className="py-2 px-4 border-b text-center"
                                    >
                                        Salón {index + 1}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(3)].map((_, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-gray-100"
                                >
                                    {[...Array(6)].map((_, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`py-2 px-4 border-b text-center ${
                                                colIndex === 0
                                                    ? "bg-blue-200 text-blue-700 font-semibold"
                                                    : ""
                                            }`}
                                        ></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </>
    );
};

export default HorarioB;
