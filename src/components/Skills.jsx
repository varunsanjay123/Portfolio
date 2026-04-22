import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaFileExcel, FaNodeJs } from 'react-icons/fa';
import { SiC, SiMysql, SiSpringboot } from 'react-icons/si';
import { IoLogoTableau } from 'react-icons/io5';

const Skills = () => {
  const skills = [
    { name: 'C', icon: SiC, color: 'text-blue-500' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
    { name: 'SQL', icon: SiMysql, color: 'text-blue-300' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
    { name: 'Excel', icon: FaFileExcel, color: 'text-green-500' },
    { name: 'Tableau', icon: IoLogoTableau, color: 'text-indigo-400' },
  ];

  return (
    <section id="skills" className="py-20 px-4 mt-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            // Map common colors to glow values
            const glowColor = skill.color.includes('cyan') ? 'rgba(34, 211, 238, 0.4)' : 
                              skill.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' :
                              skill.color.includes('red') ? 'rgba(239, 68, 68, 0.4)' :
                              skill.color.includes('orange') ? 'rgba(249, 115, 22, 0.4)' :
                              skill.color.includes('yellow') ? 'rgba(250, 204, 21, 0.4)' :
                              skill.color.includes('green') ? 'rgba(34, 197, 94, 0.4)' : 'rgba(255, 255, 255, 0.2)';

            return (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.15, 
                  y: -10,
                  boxShadow: `0 0 30px ${glowColor}`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-center text-white hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-2xl group cursor-pointer"
              >
                <IconComponent className={`text-6xl ${skill.color} transition-all duration-500 group-hover:drop-shadow-[0_0_20px_${glowColor}]`} />
                <span className="font-bold tracking-tight text-sm opacity-70 group-hover:opacity-100 transition-opacity">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;