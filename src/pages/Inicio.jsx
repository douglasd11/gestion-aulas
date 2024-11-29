import "../App.css";
import Table from "../components/table/Table";
import { string } from "../tools/Types";

const Inicio = ({ nombreUsuario }) => {
    return (
        <main className="flex flex-col flex-1 justify-center items-center p-4 bg-slate-100">
            <h2 className="text-3xl font-semibold mb-4">
                Bienvenido {nombreUsuario ? nombreUsuario : "Wendy"}
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
            <Table
                config={{
                    title: "Salones",
                    subTitle: "Consulta la disponibilidad de los salones",
                    otherOptions: () => {
                        return (
                            <>
                                <button
                                    className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    View All
                                </button>
                                <button
                                    className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                                    Add
                                </button>
                            </>
                        )
                    },
                    data: [
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "Wendy",
                                email: "john@gmail.com"
                            },
                            role: "Admin",
                            status: "Pending",
                            date: "2021-10-02",
                        },
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "Douglas",
                                email: "john@gamil.com"
                            },
                            role: "Estudiante",
                            status: "Active",
                            date: "2021-10-20",
                        },
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "John Michael",
                                email: "john@gamil.com"
                            },
                            role: "Admin",
                            status: "Active",
                            date: "2021-10-10",
                        },
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "John Michael",
                                email: "john@gamil.com"
                            },
                            role: "Admin",
                            status: "Active",
                            date: "2021-10-05",
                        },
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "Wendy",
                                email: "john@gmail.com"
                            },
                            role: "Admin",
                            status: "Pending",
                            date: "2021-10-02",
                        },
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "Douglas",
                                email: "john@gamil.com"
                            },
                            role: "Estudiante",
                            status: "Active",
                            date: "2021-10-20",
                        },
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "John Michael",
                                email: "john@gamil.com"
                            },
                            role: "Admin",
                            status: "Active",
                            date: "2021-10-10",
                        },
                        {
                            member: {
                                img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
                                name: "John Michael",
                                email: "john@gamil.com"
                            },
                            role: "Admin",
                            status: "Active",
                            date: "2021-10-05",
                        },
                    ],
                    headers: [
                        { key: "member", label: "Member", type: "user" },
                        { key: "role", label: "Role", type: "chip" },
                        { key: "status", label: "Status", type: "chip", chipCondition: "Active", },
                        { key: "date", label: "Date", type: "date" },
                    ],
                    actions: [
                        {
                            icon: <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>,
                            onClick: () => console.log("Edit"),
                        },
                        {
                            label: "Delete",
                            onClick: () => console.log("Delete"),
                        },
                    ],
                    actionsConfig: {
                        label: "Actions",
                    }
                }}


            />
        </main>
    );
};

Inicio.propTypes = {
    nombreUsuario: string.isRequired,
};

export default Inicio;
