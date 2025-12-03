import React from 'react';
import { motion } from 'framer-motion';

const InfinityLoader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black z-[100] flex flex-col justify-center items-center">
      <motion.svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        className="stroke-black dark:stroke-white fill-none stroke-[3px]"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ 
            pathLength: [0, 1], 
            opacity: [0.2, 1, 0.2],
            pathOffset: [0, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          d="M 20 30 C 20 10, 50 10, 60 30 C 70 50, 100 50, 100 30 C 100 10, 70 10, 60 30 C 50 50, 20 50, 20 30"
        />
        <path 
          d="M 20 30 C 20 10, 50 10, 60 30 C 70 50, 100 50, 100 30 C 100 10, 70 10, 60 30 C 50 50, 20 50, 20 30"
          className="stroke-gray-200 dark:stroke-gray-800"
          style={{ strokeWidth: 3 }}
        />
      </motion.svg>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-mono text-sm text-gray-500 dark:text-gray-400"
      >
        configuring_environment...
      </motion.div>
    </div>
  );
};

export default InfinityLoader;