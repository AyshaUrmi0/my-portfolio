import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className="relative min-h-screen">
            {/* Particle background container */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <ParticleBackground />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <main className="min-h-screen">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;