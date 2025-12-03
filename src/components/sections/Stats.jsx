import React from 'react';
import { STATS } from '../../data/constants';

const Stats = () => {
  return (
    <section className="py-12 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;