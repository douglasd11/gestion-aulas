import { Link } from 'react-router-dom';
import { CalendarIcon, ClassroomIcon, HomeIcon } from '../components/icons';
import { ROUTES } from '../tools/CONSTANTS';

const Menu = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4 h-auto">
            <nav>
                <ul className='text-xl pt-6'>
                    <li>
                        <Link to={ROUTES.dashboard.home} className="flex items-center gap-6 mb-1 p-4 hover:bg-gray-700 rounded-lg">
                            <HomeIcon fill="white" /><p>Inicio</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.dashboard.rooms} className="flex items-center gap-6 mb-1 p-4 hover:bg-gray-700 rounded-lg">
                            <ClassroomIcon /><p>Salones</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.dashboard.reservations} className="flex items-center gap-6 mb-1 p-4 hover:bg-gray-700 rounded-lg">
                            <CalendarIcon /><p>Reservas</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;