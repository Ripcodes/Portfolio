import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { PROJECTS } from '../../data/constants';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle>Deployed Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md transition-colors duration-300">
                  <Layers size={20} className="text-black dark:text-white" />
                </div>
                <div className="flex gap-2">
                  <a href={project.links.code} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Github size={18} /></a>
                  <a href={project.links.demo} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-1 border border-gray-100 dark:border-gray-700 rounded transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;