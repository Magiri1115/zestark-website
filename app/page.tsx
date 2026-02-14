'use client';

import React, { useState } from 'react';
{/* ----------------------------- */}
{/* Layout */}
{/* ----------------------------- */}
import StarryBackground from '../app/components/background/StarryBackground';
import Navbar from '../app/components/layout/Navbar/Navbar';
import Footer from '../app/components/layout/Footer/Footer';
import Header from '../app/components/layout/Header/Header';
{/* ----------------------------- */}
{/* Sections */}
{/* ----------------------------- */}
import HomeSection from '@/app/components/sections/Home/HomeSection';
import ServicesSection from '../app/components/sections/Services/ServicesSection';
import AboutSection from '../app/components/sections/About/AboutSection';
import BlogSection from '../app/components/sections/Blog/BlogSection';
import ContactSection from '../app/components/sections/Contact/ContactSection';
import EmergencyNotice from '../app/components/emergency/EmergencyNotice';

export default function Page() {
  const [currentSection, setCurrentSection] = useState('home');
  
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection onChangeSection={setCurrentSection} />;
      case 'services':
        return <ServicesSection onChangeSection={setCurrentSection} />;
      case 'aboutus':
        return <AboutSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onChangeSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-w-[368px] min-h-[480px]">
      <div className="page-wrapper">
        <StarryBackground />
        <Header onChangeSection={setCurrentSection} />
        <main className="main-container">
          <EmergencyNotice
            maintenancePC={process.env.NEXT_PUBLIC_MAINTENANCE_PC === "true"}
            maintenanceTablet={process.env.NEXT_PUBLIC_MAINTENANCE_TABLET === "true"}
            maintenanceMobile={process.env.NEXT_PUBLIC_MAINTENANCE_MOBILE === "true"}
          />
          <div className="sections-wrapper">
            {renderSection()}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}