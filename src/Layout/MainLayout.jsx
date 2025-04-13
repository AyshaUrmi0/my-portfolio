import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className=''>
            <ParticleBackground isDarkMode={isDarkMode} />
            <Navbar />  
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;