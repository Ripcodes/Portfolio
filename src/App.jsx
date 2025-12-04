import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from './data/constants';

// Components
import InfinityLoader from './components/common/Loader';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Default is set to false (Light Mode)
  // I removed the useEffect that checked system preferences
  const [darkMode, setDarkMode] = useState(false);

  // Apply the 'dark' class only if darkMode state is toggled to true
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  // Loading Sequence
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for Active Section & Navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <InfinityLoader />;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      
      <ScrollToTop />
      
      <Navbar 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}