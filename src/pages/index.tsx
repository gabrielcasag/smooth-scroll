import React, { useState } from 'react';
import Head from 'next/head';
import { StaticRouter as Router } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import { sections } from '@/components/InfoSection/Data';
import InfoSection from '@/components/InfoSection';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Head>
        <title>Next.js template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar toggle={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggle={toggleSidebar} />
      <HeroSection />
      {sections.map(infos => (
        <InfoSection key={infos.id} {...infos} />
      ))}
    </Router>
  );
};

export default Home;
