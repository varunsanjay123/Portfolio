import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg';
import resumePdf from '../assets/Varun_Sanjay_P_Resume.pdf';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                  I am a Computer Science student passionate about building real-world applications and exploring the cosmos of software development.
                </p>
                <p className="text-lg leading-relaxed mb-10 text-gray-300">
                  Skilled in Java, C, React, HTML, CSS, JavaScript, with a strong emphasis on continuous learning and modern <span className="text-blue-400 font-bold">UI/UX design</span>.
                </p>
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
      </div>
    </section>
  );
};

export default About;