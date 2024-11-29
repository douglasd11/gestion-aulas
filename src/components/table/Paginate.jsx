import { any, func, number } from "../../tools/Types";

import { useState } from "react";

function Paginate({ data, setDataTable, limit }) {
    const [currentPage, setCurrentPage] = useState(1); // Página actual

    // Calcular el total de páginas
    const totalPages = Math.ceil(data.length / limit);

    // Manejar cambio de página
    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return; // Prevenir fuera de rango

        setCurrentPage(newPage);

        // Calcular los datos para la página actual
        const start = (newPage - 1) * limit;
        const end = start + limit;
        const pageData = data.slice(start, end);

        setDataTable(pageData); // Actualizar los datos visibles
    };

    return (
        <div className="flex items-center justify-between p-3">
            <p className="block text-sm text-slate-500">
                Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-1">
                <button
                    className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

Paginate.propTypes = {
    data: any.isRequired, // Espera un arreglo de objetos
    setDataTable: func.isRequired, // Función para actualizar los datos visibles
    limit: number.isRequired // Número de elementos por página
};

export default Paginate;
