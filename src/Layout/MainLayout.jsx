import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300" style={{ backgroundColor: 'transparent' }}>
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