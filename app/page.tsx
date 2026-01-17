'use client';

import React, { useState } from 'react';
import Image from 'next/image';
{/* ----------------------------- */}
{/* Layout */}
{/* ----------------------------- */}
import StarryBackground from '../components/background/starry-background';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

{/* ----------------------------- */}
{/* Sections */}
{/* ----------------------------- */}
import HomeSection from '../components/sections/home-section';
import ServicesSection from '../components/sections/services-section';
import AboutSection from '../components/sections/about-section';
import BlogSection from '../components/sections/blog-section';
import ContactSection from '../components/sections/contact-section';
import EmergencyNotice from '../components/emergency/emergency-notice';

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

  const maintenancePC = process.env.NEXT_PUBLIC_MAINTENANCE_PC === "true";
  const maintenanceTablet = process.env.NEXT_PUBLIC_MAINTENANCE_TABLET === "true";
  const maintenanceMobile = process.env.NEXT_PUBLIC_MAINTENANCE_MOBILE === "true";

  return (
    <main className="min-w-[368px] min-h-[480px]">
      <div className="page-wrapper">
        <StarryBackground />
        {/* ----------------------------- */}
        {/* header */}
        {/* ----------------------------- */}
        <Header onChangeSection={setCurrentSection} />
        {/* ----------------------------- */}
        {/* 障害時対応 */}
        {/* ----------------------------- */}     
        <EmergencyNotice
          maintenancePC={process.env.NEXT_PUBLIC_MAINTENANCE_PC === "true"}
          maintenanceTablet={process.env.NEXT_PUBLIC_MAINTENANCE_TABLET === "true"}
          maintenanceMobile={process.env.NEXT_PUBLIC_MAINTENANCE_MOBILE === "true"}
        />
        {/* ----------------------------- */}
        {/* セクション */}
        {/* ----------------------------- */}
        <div className="header-offset">
          <div className="sections-wrapper">
            {renderSection()}
          </div>
        </div>
        {/* ----------------------------- */}
        {/* footer */}
        {/* ----------------------------- */}
        <Footer />
      </div>
    </main>
  );
}
