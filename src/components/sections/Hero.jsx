import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Github, Linkedin, Globe } from 'lucide-react';
import CircuitArt from '../common/CircuitArt';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[85vh] flex items-center bg-white dark:bg-black transition-colors duration-300">
      <CircuitArt className="z-0 top-0 left-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-mono mb-6 rounded">
            $ systemctl start career
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tighter leading-tight mb-6">
            Automate.<br />Scale.<br />Deploy.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
            I'm Pranav Dakle. I design self-healing infrastructure and streamlined pipelines so you can sleep while your servers work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex justify-center items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl">
              See Projects <ChevronRight size={18} className="ml-2" />
            </a>
            <a href="#" className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
              Get Resume <Download size={18} className="ml-2" />
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors"><Globe size={24} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;