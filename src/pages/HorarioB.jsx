import './App.css'
import Logo from './assets/LogoIsoft.png'

const HorarioB = () => {
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
          <h1 className="text-2xl font-bold mb-4">Horarios por Bloque</h1>
          
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Bloque</th>
                <th className="py-2 px-4 border-b">Salón 1</th>
                <th className="py-2 px-4 border-b">Salón 2</th>
                <th className="py-2 px-4 border-b">Salón 3</th>
                <th className="py-2 px-4 border-b">Salón 4</th>
                <th className="py-2 px-4 border-b">Salón 5</th>
              </tr>
            </thead>
            <tbody>
              {['Bloque A', 'Bloque B', 'Bloque C'].map((bloque, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{bloque}</td>
                  {[...Array(5)].map((_, i) => (
                    <td key={i} className="py-2 px-4 border-b">
                      <button className="w-full h-full bg-transparent transition-all text-gray-600 py-1 px-2 rounded hover:bg-blue-600 hover:text-white">
                        {bloque.split(' ')[1]}10{i + 1}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
};

export default HorarioB;