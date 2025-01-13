import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbard from '../Pages/Shared/Navbar/Navbard';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import AIChat from '../Pages/Shared/Footer/AiChat';
import TawkToChat from '../Pages/Home/Home/Tawk';
import TawkToMessage from '../Pages/Home/Home/TawkToMessage';

const Main = () => {
    return (
        <div className='bg-gray-50'>
            <div className='z-50'>
                <Navbard />
            </div>

            <div className='sticky top-0 z-30'>
                <Navbar />
            </div>

            <br />
            <div className=''>
                <Outlet />
            </div>
            <TawkToMessage />
            <Footer />
        </div>
    );
};

export default Main;