import React from 'react';

const CircuitArt = ({ className }) => (
  <svg className={`absolute pointer-events-none ${className}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" className="fill-gray-300 dark:fill-gray-700" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <g className="stroke-gray-300 dark:stroke-gray-700 stroke-[1.5] fill-none opacity-60">
      <path d="M 50 0 V 100 L 100 150 V 300" />
      <path d="M 800 0 V 50 L 700 150 V 200" />
      <circle cx="100" cy="150" r="3" className="fill-white dark:fill-black stroke-gray-400 dark:stroke-gray-600" />
      <circle cx="700" cy="150" r="3" className="fill-white dark:fill-black stroke-gray-400 dark:stroke-gray-600" />
      <path d="M 0 400 H 150 L 200 450 H 500" />
      <path d="M 1000 600 H 800 L 750 650 H 600" />
      <circle cx="200" cy="450" r="4" className="fill-white dark:fill-black stroke-black dark:stroke-white stroke-[2]" />
      <circle cx="750" cy="650" r="4" className="fill-white dark:fill-black stroke-black dark:stroke-white stroke-[2]" />
    </g>
  </svg>
);

export default CircuitArt;