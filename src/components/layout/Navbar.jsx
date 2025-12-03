import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';

const Navbar = ({ isScrolled, activeSection, darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-black dark:text-white tracking-tight flex items-center gap-2">
          <Terminal size={20} />
          Pranav_Dakle
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors relative py-1 ${isActive ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
              >
                {link.name}
                {isActive && (
                  <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white" />
                )}
              </a>
            );
          })}
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-black" />}
          </button>

          <a href="#contact" className="px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden gap-4 items-center">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-black" />}
          </button>
          <button 
            className="p-2 text-black dark:text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="py-4 px-6 flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-black dark:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;