import React from 'react';

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">{children}</h2>
    {subtitle && <div className="w-20 h-1 bg-black dark:bg-white rounded-full"></div>}
  </div>
);

export default SectionHeading;