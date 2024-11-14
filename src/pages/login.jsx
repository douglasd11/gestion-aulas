import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [role, setRole] = useState('user');

    return (
        <div className="App flex items-center justify-center flex-col min-h-screen bg-gray-100">

            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Welcome</h1>
            </div>

            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Acceder</h1>

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                >
                    <option value="user">Usuario</option>
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

                <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Login
                </button>
            </div>

        </div>
    );
};

export default Login;