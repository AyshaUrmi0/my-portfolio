import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
                <Navbar />  
                <Outlet />
                <Footer />
        </div>
    );
};

export default MainLayout;