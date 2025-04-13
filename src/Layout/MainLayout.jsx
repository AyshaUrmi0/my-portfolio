import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
    const { isDarkMode } = useTheme();
    
    // Log when the layout mounts and when theme changes
    useEffect(() => {
        console.log("MainLayout mounted, theme:", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);
    
    return (
        <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
            {/* Particle background */}
            <ParticleBackground />
            
            {/* Content positioned above the particle background */}
            <Navbar />
            
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
};

export default MainLayout;