import { useState } from 'react';
import Logo from '../assets/LogoIsoft.png';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('administrativos');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative max-w-md w-full p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="absolute top-2 right-2">
          <img src={Logo} alt="Company Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="profesor">Profesor</option>
          <option value="estudiante">Estudiante</option>
        </select>
        <button className="w-full p-2 bg-blue-500 text-white rounded">Register</button>
      </div>
    </div>
  );
}

export default Register;