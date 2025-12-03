import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { SKILLS } from '../../data/constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle>Tech Stack</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-black dark:hover:border-white"
            >
              <div className="mb-4 text-gray-800 dark:text-gray-200">{skill.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded transition-colors duration-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;