
import '../App.css'
import Logo from '../assets/LogoIsoft.png'


const HorarioS = () => {
    return (
      <>
        <header className="bg-blue-500 p-4 flex justify-between items-center h-14">
          <div className='flex items-center'>
            <img src={Logo} alt="Logo" className="h-14" />
            <h2 className="text-white text-xl font-semibold ml-2">ClassMatch</h2>
          </div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">Cuenta</button>
        </header>
  
        <div className="flex h-[calc(100vh-56px)]">
          <aside className="w-64 bg-gray-800 text-white h-full p-4">
            <nav>
              <ul>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Inicio</a></li>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Horario</a></li>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Salones</a></li>
                <li className="mb-4"><a href="#" className="hover:text-gray-400">Reservas</a></li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-10">
            <h1 className="text-2xl font-bold mb-4">Horarios por semana</h1>
  
            <table className="table-auto w-full border border-gray-300">
              <thead className='bg-gray-200'>
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
                    <td className="border px-4 py-2 text-center bg-blue-400 text-white">{`${7 + i}:00`}</td>
                    <td className="border px-4 py-2 cursor-pointer hover:bg-gray-200"></td>
                    <td className="border px-4 py-2 cursor-pointer hover:bg-gray-200"></td>
                    <td className="border px-4 py-2 cursor-pointer hover:bg-gray-200"></td>
                    <td className="border px-4 py-2 cursor-pointer hover:bg-gray-200"></td>
                    <td className="border px-4 py-2 cursor-pointer hover:bg-gray-200"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </>
    );
  };
  
  export default HorarioS;