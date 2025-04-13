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
        <div className="relative min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
            {/* Particle background container */}
            <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
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