import React from 'react';
import Logo from '../assets/LogoIsoft.png';
import { ROUTES } from '../tools/CONSTANTS';
import { Link } from 'react-router-dom';

import useSession from "../context/Auth/useSession";
import MenuDropdown from './MenuDropdown';

const Header = () => {

    const { session } = useSession()

    console.log(session?.user.name)
    const nameF = session?.user?.name?.split(' ')[0];
    const capitalizedFirstName = nameF?.charAt(0).toUpperCase() + nameF?.slice(1).toLowerCase();

    const nameS = session?.user?.name?.split(' ')[1]
    const letters = (nameF?.charAt(0) + (nameS ? nameS.charAt(0) : '')).toUpperCase()

    return (
        <header className="bg-white p-2 flex justify-between items-center h-20 border-b">
            <div className='flex items-center'>
                <img src={Logo} alt="Logo" className="h-20" />
                <h2 className="text-black text-2xl font-bold ml-2">Class<span className='text-blue-500'>Match</span></h2>
            </div>
            <MenuDropdown />
            {/* <Link to={ROUTES.dashboard.profile} className="flex items-center gap-3 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">
                <div className='flex items-center justify-center size-9 bg-violet-600 rounded-3xl text-white'>
                    <p className='text-white font-semibold'>{ letters }</p>
                </div>
                <p className='font-semibold'>{ capitalizedFirstName }</p>
            </Link> */}
        </header>
    );
};

export default Header;