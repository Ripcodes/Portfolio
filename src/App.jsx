import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { skills, projects } from './data';
import './index.css'; // Ensure your CSS is imported

// Register GSAP Plugin
gsap.registerPlugin(MotionPathPlugin);

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800" aria-label="Main Navigation">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-xl font-bold font-mono text-green-400">&lt;DevOps/&gt;</div>
      <div className="space-x-6 text-sm font-medium hidden md:block">
        <a href="#home" className="hover:text-green-400 transition">Home</a>
        <a href="#skills" className="hover:text-green-400 transition">Skills</a>
        <a href="#education" className="hover:text-green-400 transition">Education</a>
        <a href="#projects" className="hover:text-green-400 transition">Projects</a>
        <a href="#contact" className="hover:text-green-400 transition">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  useEffect(() => {
    // 1. Gear Rotation
    gsap.to("#gearLeft", { rotation: 360, transformOrigin: "center", duration: 10, repeat: -1, ease: "none" });
    gsap.to("#gearRight", { rotation: -360, transformOrigin: "center", duration: 10, repeat: -1, ease: "none" });

    // 2. Particle Flow
    const animateParticle = (id, delay) => {
      gsap.to(id, {
        duration: 6,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: "#realPath",
          align: "#realPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        },
        delay: delay
      });
    };

    animateParticle("#particle1", 0);
    animateParticle("#particle2", 2);
    animateParticle("#particle3", 4);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden" aria-label="Introduction">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 hidden lg:flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[1000px] h-[500px]">
          <svg className="devops-svg" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path id="realPath" className="path-track" d="M400,200 C300,100 100,100 100,200 C100,300 300,300 400,200 C500,100 700,100 700,200 C700,300 500,300 400,200" />
            <circle id="particle1" r="6" fill="#4ade80" filter="url(#glow)"></circle>
            <circle id="particle2" r="6" fill="#3b82f6" filter="url(#glow)"></circle>
            <circle id="particle3" r="4" fill="#ffffff" filter="url(#glow)"></circle>
            <g id="gearLeft" className="gear" transform="translate(190, 190)">
              <path fill="#334155" d="M40,22.5 L40,17.5 L36,17.5 C35.5,16 34.5,14.5 33.5,13 L36.5,10 L33,6.5 L30,9.5 C28.5,8.5 27,7.5 25.5,7 L25.5,3 L20.5,3 L20.5,7 C19,7.5 17.5,8.5 16,9.5 L13,6.5 L9.5,10 L12.5,13 C11.5,14.5 10.5,16 10,17.5 L6,17.5 L6,22.5 L10,22.5 C10.5,24 11.5,25.5 12.5,27 L9.5,30 L13,33.5 L16,30.5 C17.5,31.5 19,32.5 20.5,33 L20.5,37 L25.5,37 L25.5,33 C27,32.5 28.5,31.5 30,30.5 L33,33.5 L36.5,30 L33.5,27 C34.5,25.5 35.5,24 36,22.5 Z M23,26 C19.7,26 17,23.3 17,20 C17,16.7 19.7,14 23,14 C26.3,14 29,16.7 29,20 C29,23.3 26.3,26 23,26 Z" />
            </g>
            <g id="gearRight" className="gear" transform="translate(560, 150)">
              <path fill="#334155" d="M40,22.5 L40,17.5 L36,17.5 C35.5,16 34.5,14.5 33.5,13 L36.5,10 L33,6.5 L30,9.5 C28.5,8.5 27,7.5 25.5,7 L25.5,3 L20.5,3 L20.5,7 C19,7.5 17.5,8.5 16,9.5 L13,6.5 L9.5,10 L12.5,13 C11.5,14.5 10.5,16 10,17.5 L6,17.5 L6,22.5 L10,22.5 C10.5,24 11.5,25.5 12.5,27 L9.5,30 L13,33.5 L16,30.5 C17.5,31.5 19,32.5 20.5,33 L20.5,37 L25.5,37 L25.5,33 C27,32.5 28.5,31.5 30,30.5 L33,33.5 L36.5,30 L33.5,27 C34.5,25.5 35.5,24 36,22.5 Z M23,26 C19.7,26 17,23.3 17,20 C17,16.7 19.7,14 23,14 C26.3,14 29,16.7 29,20 C29,23.3 26.3,26 23,26 Z" transform="scale(1.2)" />
            </g>
          </svg>
        </div>
      </div>

      <div className="text-center z-10 px-6 max-w-4xl relative">
        <p className="font-mono text-green-400 mb-4">$ whoami</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
          I am <span className="text-gradient drop-shadow-none">[Your Name]</span>
        </h1>
        <h2 className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md font-medium">
          DevOps Engineer | Cloud Architect | Automation Specialist
        </h2>
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-lg max-w-lg mx-auto mb-10 shadow-xl backdrop-blur-md">
          <i className="fas fa-quote-left text-slate-600 mb-2 block text-left"></i>
          <p className="font-mono text-slate-300 italic">"The best code is no code. The best server is no server."</p>
        </div>
        <a href="#skills" className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-slate-950 font-bold rounded-full transition shadow-lg shadow-green-500/20">
          Get Started <i className="fas fa-arrow-down ml-2"></i>
        </a>
      </div>
    </section>
  );
};

const Skills = ({ activeFilter, setActiveFilter }) => (
  <section id="skills" className="py-24 bg-slate-900/50" aria-label="Technical Skills">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2"><span className="text-green-400">02.</span> Tech Stack</h2>
        <p className="text-slate-400">Click a skill to see related projects below.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <button
            key={skill.name}
            onClick={() => setActiveFilter(skill.name)}
            className={`px-5 py-3 rounded-xl border transition-all duration-200 flex items-center gap-3 
            ${activeFilter === skill.name
                ? 'bg-green-500 text-slate-900 border-green-500 shadow-lg shadow-green-500/20 scale-105'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500 hover:bg-slate-700'}`}
          >
            <i className={skill.icon} aria-hidden="true"></i>
            <span className="font-medium">{skill.name}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="py-24 relative overflow-hidden" aria-label="Education History">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4"><span className="text-blue-400">03.</span> Education Roadmap</h2>
        <p className="text-slate-400">Growing from the ground up.</p>
      </div>
      <div className="relative py-10">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-t from-slate-800 via-blue-500 to-green-500 md:-translate-x-1/2">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"></div>
        </div>
        
        {/* Education Item 1 */}
        <article className="relative flex flex-col md:flex-row items-center justify-between mb-20 group">
          <div className="md:w-5/12 text-left md:text-right md:pr-8 pl-12 md:pl-0">
            <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition">B.Tech Graduation</h3>
            <p className="text-slate-400 font-mono text-sm">University Name</p>
            <div className="mt-2 inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">2019 - 2023</div>
            <p className="mt-2 text-slate-500">Specialized in DevOps & Cloud Computing.</p>
          </div>
          <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-slate-950 border-4 border-green-500 rounded-full z-10 md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.4)]">
            <i className="fas fa-graduation-cap text-green-400 text-sm"></i>
          </div>
          <div className="md:w-5/12"></div>
        </article>

         {/* Education Item 2 */}
         <article className="relative flex flex-col md:flex-row items-center justify-between mb-20 group">
             <div className="md:w-5/12"></div>
             <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-slate-950 border-4 border-blue-500 rounded-full z-10 md:-translate-x-1/2 flex items-center justify-center">
                 <i className="fas fa-book text-blue-400 text-xs"></i>
             </div>
             <div className="md:w-5/12 text-left md:pl-8 pl-12">
                 <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">12th Grade (HSC)</h3>
                 <p className="text-slate-400 font-mono text-sm">State Junior College</p>
                 <div className="mt-2 inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">2017 - 2019</div>
                 <p className="mt-2 text-slate-500">Science Stream (Physics, Math, CS).</p>
             </div>
         </article>

         {/* Education Item 3 */}
         <article className="relative flex flex-col md:flex-row items-center justify-between group">
             <div className="md:w-5/12 text-left md:text-right md:pr-8 pl-12 md:pl-0">
                 <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition">10th Grade (SSC)</h3>
                 <p className="text-slate-400 font-mono text-sm">City High School</p>
                 <div className="mt-2 inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">2017</div>
                 <p className="mt-2 text-slate-500">Foundation of Computer Basics.</p>
             </div>
             <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-slate-950 border-4 border-purple-500 rounded-full z-10 md:-translate-x-1/2 flex items-center justify-center">
                 <i className="fas fa-school text-purple-400 text-xs"></i>
             </div>
             <div className="md:w-5/12"></div>
         </article>
      </div>
    </div>
  </section>
);

const Projects = ({ activeFilter, setActiveFilter }) => {
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-slate-900/50" aria-label="Portfolio Projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2"><span className="text-purple-400">04.</span> Hands-on Experience</h2>
            <p className="text-slate-400">Filtered results for: <span className="text-green-400 font-mono font-bold">{activeFilter}</span></p>
          </div>
          <button onClick={() => setActiveFilter('All')} className="mt-4 md:mt-0 text-sm text-slate-500 hover:text-white underline">
            Show All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, index) => (
              <article key={index} className="project-card bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col h-full fade-in">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-green-400">
                    <i className="fas fa-terminal" aria-hidden="true"></i>
                  </div>
                  <a href={p.link} className="text-slate-500 hover:text-white" aria-label={`View project ${p.title}`}>
                    <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded border border-slate-700">{t}</span>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-20 border-2 border-dashed border-slate-800 rounded-xl">
              <i className="fas fa-search text-4xl text-slate-700 mb-4"></i>
              <p className="text-slate-500">No projects found with this specific tag.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact Information">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4"><span className="text-green-400">05.</span> Get In Touch</h2>
      <p className="text-slate-400 mb-8 max-w-xl mx-auto">
        I'm currently looking for new opportunities as a DevOps Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:your.email@example.com" className="inline-block px-8 py-4 border border-green-500 text-green-400 font-mono rounded hover:bg-green-500/10 transition">
        Say Hello
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
    <p>Built with &hearts; and DevOps Principles.</p>
  </footer>
);

function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="bg-slate-950 text-slate-200 font-sans antialiased selection:bg-green-400/30">
      <Navbar />
      <main>
        <Hero />
        <Skills activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Education />
        <Projects activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;