import { useState } from "react";
import Logo from "../assets/LogoIsoft.png";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative max-w-md w-full p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                <div className="absolute top-2 right-2">
                    <img src={Logo} alt="Company Logo" className="w-12 h-12" />
                </div>
                <h1 className="text-2xl font-bold mb-6 text-center">Welcome</h1>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                >
                    <option value="user">
                        Usuario (Estudiante o Profesor)
                    </option>
                    <option value="admin">Administrador</option>
                </select>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button className="w-full p-2 bg-blue-500 text-white rounded">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
