'use client';

import React, { useState } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';
import {
  aboutSection,
  discoverSection,
  signupSection,
} from '@/components/InfoSection/Data';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggle={toggleSidebar} />
      <HeroSection />
      <InfoSection {...aboutSection} />
      <InfoSection {...discoverSection} />
      <ServicesSection />
      <InfoSection {...signupSection} />
      <Footer />
    </>
  );
};

export default Home;
