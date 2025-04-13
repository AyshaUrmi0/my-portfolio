import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className='relative min-h-screen w-full'>
            {/* Particle background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ParticleBackground isDarkMode={isDarkMode} />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
                <Navbar />  
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;