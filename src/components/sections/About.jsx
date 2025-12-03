import React from 'react';
import { MapPin, Zap, CheckCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <SectionHeading subtitle>System Overview</SectionHeading>
        <div className="grid md:grid-cols-3 gap-12 items-start">
           <div className="md:col-span-2 text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                I'm a DevOps Engineer who views infrastructure as a software problem. With a deep background in Linux and Cloud Architecture, I help organizations move away from manual server management to automated, immutable infrastructure.
              </p>
              <p>
                 My core philosophy is <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1 text-black dark:text-white rounded">Infrastructure as Code</span>. Whether it's spinning up a new environment or recovering from a disaster, it should be as simple as running a single command.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <MapPin size={16} className="text-black dark:text-white" /> Remote / SF
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <Zap size={16} className="text-black dark:text-white" /> Available
                </div>
              </div>
           </div>
           <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800 text-left transition-colors duration-300">
             <div className="font-mono text-xs text-gray-400 mb-2">/usr/bin/focus</div>
             <ul className="space-y-3">
               {["Automation First", "Security by Design", "High Availability", "Cost Optimization"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
                   <CheckCircle size={16} className="text-black dark:text-white" /> {item}
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;