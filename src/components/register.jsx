import { useState } from 'react';
function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('administrativos');
  
    return (
      <div className="App flex items-center justify-center flex-col min-h-screen bg-gray-100">
  
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
  
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="administrativos">Administrativos</option>
            <option value="profesor">Profesor</option>
            <option value="estudiante">Estudiante</option>
          </select>
  
          <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Register
          </button>
        </div>
  
      </div>
    );
  }
  
  export default Register