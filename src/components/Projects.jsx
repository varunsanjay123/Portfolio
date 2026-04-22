import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectImage from '../assets/project1.png';

const Projects = () => {
  const [filter, setFilter] = useState('Development');

  const projects = [
    {
      title: 'Inter-College Marketplace',
      category: 'Development',
      description: 'Platform for students to buy/sell products with authentication system',
      image: projectImage,
      demo: '',
      github: 'https://github.com/varunsanjay123'
    },
    {
      title: 'Print-HUB',
      category: 'Development',
      description: 'Web platform for document printing with real-time tracking and admin panel',
      image: projectImage,
      demo: 'https://print-hub-4to1.vercel.app/',
      github: 'https://github.com/varunsanjay123/PrintHub'
    },
    {
      title: 'Food Ordering System',
      category: 'Development',
      description: 'Developed a responsive food ordering web app enabling users to browse menus, manage carts, and place orders seamlessly',
      image: projectImage,
      demo: '#',
      github: 'https://github.com/varunsanjay123/Food_Ordering_System'
    },
    {
      title: 'Portfolio',
      category: 'Development',
      description: 'Passionate developer focused on building clean, responsive, and impactful web application',
      image: projectImage,
      demo: '#',
      github: 'https://github.com/varunsanjay123/Portfolio'
    },
    {
      title: 'Sales & Revenue Dashboard',
      category: 'Data Analytics',
      description: 'Interactive data visualization dashboard tracking real-time sales metrics and regional performance.',
      image: projectImage,
      demo: '#',
      github: 'https://github.com/varunsanjay123'
    },
    {
      title: 'Supply Chain Analytics',
      category: 'Data Analytics',
      description: 'Comprehensive Tableau dashboard analyzing logistics data to optimize shipping efficiency.',
      image: projectImage,
      demo: '#',
      github: 'https://github.com/varunsanjay123'
    },
    {
      title: 'Customer Segmentation Model',
      category: 'Data Analytics',
      description: 'Data analytics model sorting user bases into actionable demographics using Python.',
      image: projectImage,
      demo: '#',
      github: 'https://github.com/varunsanjay123'
    },
    {
      title: 'Financial Fraud Detection',
      category: 'Data Analytics',
      description: 'Data tracking dashboard utilizing anomalous pattern recognition to identify fraud.',
      image: projectImage,
      demo: '#',
      github: 'https://github.com/varunsanjay123'
    }
  ];

  const filteredProjects = projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Projects
        </motion.h2>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-6 mb-16">
          {['Development', 'Data Analytics'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 flex flex-col group shadow-2xl"
              >
                <div className="h-72 overflow-hidden relative">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-md font-bold">
                      {project.category}
                   </span>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                   <p className="text-gray-400 text-sm flex-grow leading-relaxed mb-8">{project.description}</p>
                   
                   <div className="flex space-x-4">
                     <a 
                       href={project.demo} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all duration-300 text-sm shadow-lg shadow-blue-900/20"
                     >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                     </a>
                     <a 
                       href={project.github} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold transition-all duration-300 text-sm border border-white/10"
                     >
                        <FaGithub className="mr-2" /> GitHub
                     </a>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;