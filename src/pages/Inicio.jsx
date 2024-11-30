import { Link } from "react-router-dom";
import "../App.css";
import Table from "../components/table/Table";
import { string } from "../tools/Types";
import { ROUTES } from "../tools/CONSTANTS";
import useSession from "../context/Auth/useSession";

const Inicio = () => {

    const { session } = useSession();

    return (
        <main className="flex flex-col flex-1 justify-center items-center p-4 bg-slate-50">
            <h2 className="text-3xl font-semibold mb-4">
                Bienvenido {session?.user?.name}
            </h2>
            <p className="mb-8 text-center">
                Consulta la disponibilidad de los salones o revisa tus reservas
                pendientes.
            </p>
            <div className="flex gap-6 mt-4">
                <Link className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg">
                    Salones
                </Link>
                <Link to={ROUTES.dashboard.reservations} className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg">
                    Reservas
                </Link>
            </div>
            
        </main>
    );
};

Inicio.propTypes = {
    nombreUsuario: string.isRequired,
};

export default Inicio;
