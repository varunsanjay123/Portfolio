import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg';
import resumePdf from '../assets/Varun_Sanjay_P_Resume.pdf';

const About = () => {
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
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white h-fit"
          >
            <p className="text-lg leading-relaxed mb-6">
              I am a Computer Science student passionate about building real-world applications and exploring the cosmos of software development.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Skilled in Java, C, React , HTML, CSS, JavaScript, with a strong emphasis on continuous learning and modern UI/UX design.
            </p>
            <a
              href={resumePdf}
              download="Varun_Sanjay_Resume.pdf"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-1 self-start w-max"
            >
              <FaDownload className="mr-3" /> Download Resume
            </a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-lg blur-xl opacity-20 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative rounded-lg w-full object-cover shadow-2xl shadow-blue-900/50 hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;