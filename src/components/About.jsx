import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg';
import resumePdf from '../assets/Varun_Sanjay_P_Resume.pdf';

const timeline = [
  {
    title: "Junior Frontend Developer",
    organization: "FNEXT",
    date: "May 2025 - June 2025",
    icon: <FaBriefcase />,
    type: "experience"
  },
  {
    title: "B.E. Computer Science and Engineering",
    organization: "KGiSL Institute of Technology",
    date: "2026 - Graduated",
    icon: <FaGraduationCap />,
    type: "education"
  },
  {
    title: "Higher Secondary",
    organization: "Sri Kumaran Matriculation Higher Secondary School",
    date: "2020 - 2022",
    icon: <FaGraduationCap />,
    type: "education"
  }
];

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          {/* Text Content Card with Spotlight */}
          <div className="gradient-border-wrapper h-fit self-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseMove={handleMouseMove}
              className="bg-[#0a0a0a] backdrop-blur-xl rounded-2xl p-10 text-white relative group overflow-hidden"
            >
              {/* Spotlight Effect */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent)`,
                }}
              />
              
              <div className="relative z-10">
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                 I’m a Computer Science student who enjoys building real-world applications and working with data. I like creating things that people can use while also understanding the data behind them to make better decisions.                </p>
                <p className="text-lg leading-relaxed mb-10 text-gray-300">
                  I have worked with Java, C, React, HTML, CSS, and JavaScript, and I also use SQL, Excel, and basic data analysis tools. I’m always learning new skills and trying to improve both my development and analytical thinking.</p>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href={resumePdf}
                  download="Varun_Sanjay_Resume.pdf"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg"
                >
                  <FaDownload className="mr-3" /> Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image with Glow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="gradient-border-wrapper">
              <img
                src={profileImage}
                alt="Profile"
                className="relative rounded-2xl w-full object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mt-32">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Education & Experience
          </motion.h3>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-transparent rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border-4 border-blue-600 flex items-center justify-center text-white text-xl z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    {item.icon}
                  </div>

                  {/* Spacer for empty side on desktop */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${
                    index % 2 === 0 ? 'text-left md:text-right md:pr-8' : 'text-left md:pl-8'
                  }`}>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 group">
                      <span className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-2 block">{item.date}</span>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                      <span className={`text-gray-400 text-sm font-medium flex items-center gap-2 ${
                        index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'
                      }`}>
                         {item.type === 'education' ? <FaGraduationCap className="text-gray-500" /> : <FaBriefcase className="text-gray-500" />}
                         {item.organization}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;