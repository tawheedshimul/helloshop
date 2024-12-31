import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <br />
            <div className='mt-20'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;