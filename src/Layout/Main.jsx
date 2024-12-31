import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import SearchBox from '../Pages/Shared/Navbar/SearchBox';

const Main = () => {
    return (
        <div>
            <SearchBox />
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            <br />
            <div className=''>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;