'use client';

import React, { useState } from 'react';
import Image from 'next/image';
{/* ----------------------------- */}
{/* Layout */}
{/* ----------------------------- */}
import StarryBackground from '../components/background/starry-background';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
{/* ----------------------------- */}
{/* Sections */}
{/* ----------------------------- */}
import HomeSection from '../components/sections/home-section';
import ServicesSection from '../components/sections/services-section';
import AboutSection from '../components/sections/about-section';
import BlogSection from '../components/sections/blog-section';
import ContactSection from '../components/sections/contact-section';

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
    <main>
      <div className="page-wrapper">
        <StarryBackground />

        {/* ----------------------------- */}
        {/* header */}
        {/* ----------------------------- */}
        <div className="header-border w-full z-50">
          <div className="header-container mx-auto justify-between pt-8 px-4 sm:px-8 lg:px-16">
            <div className="logo-item inline-flex items-center justify-center mb-4">
              <div className="contents-star">
                <Image
                  className="fixed-small"
                  src="/zestark-star.svg"
                  alt="Zestark Star Logo"
                  width={96}
                  height={77}
                  priority
                />
              </div>
              <div className="contents-logo">
                <Image
                  src="/zestark-logo.svg"
                  alt="Zestark Logo"
                  width={120}
                  height={100}
                  priority
                />
              </div>
            </div>   
            <div className="navi-wrapper">
              <Navbar onChangeSection={setCurrentSection} />
            </div>
          </div>
        </div>

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
