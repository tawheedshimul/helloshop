import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbard from '../Pages/Shared/Navbar/Navbard';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import JivoChat from '../Pages/Home/Home/JivoChat';

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
            <JivoChat />
            <Footer />
        </div>
    );
};

export default Main;