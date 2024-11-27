import "../App.css";

const Perfil = () => {
    return (
        <>
            <main className="flex-1 p-10">
                <h2 className="text-3xl font-medium px-8 mb-10">Configuracion de perfil</h2>
                <div className="flex gap-20">
                    <div className="p-8">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center size-40 bg-violet-600 rounded-full text-white">
                                <p className="text-white text-6xl font-semibold">
                                    WV
                                </p>
                            </div>
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    User Name
                                </h2>
                                <p className="text-sm text-gray-600">
                                    user@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <form className="flex-1 space-y-5">
                        
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Correo electronico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                    htmlFor="confirm-password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Confirmar contraseña
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">Escribe tu contraseña para confirmar</p>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label
                                    htmlFor="current-password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Contraseña actual
                                </label>
                                <input
                                    type="password"
                                    name="current-password"
                                    id="current-password"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div className="flex-1"></div>
                        </div>
                        
                        <div>
                            <button
                                type="button"
                                className="w-52 mt-4 bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Perfil;
