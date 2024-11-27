import React from 'react';
import Logo from '../assets/LogoIsoft.png';
import { ROUTES } from '../tools/CONSTANTS';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white p-2 flex justify-between items-center h-20 border-b">
            <div className='flex items-center'>
                <img src={Logo} alt="Logo" className="h-20" />
                <h2 className="text-black text-2xl font-bold ml-2">Class<span className='text-blue-500'>Match</span></h2>
            </div>
            <Link to={ROUTES.dashboard.profile} className="flex items-center gap-3 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">
                <div className='flex items-center justify-center size-9 bg-violet-600 rounded-3xl text-white'>
                    <p className='text-white font-semibold'>WV</p>
                </div>
                <p className='font-semibold'>Perfil</p>
            </Link>
        </header>
    );
};

export default Header;