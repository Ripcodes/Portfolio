import React from 'react';

const Footer = () => (
  <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 text-center transition-colors duration-300">
    <p className="text-gray-500 dark:text-gray-400 text-sm">
      © {new Date().getFullYear()} Pranav Dakle. <span className="text-gray-300 dark:text-gray-700 mx-2">|</span> 
      Deployed via React & Tailwind
    </p>
  </footer>
);

export default Footer;