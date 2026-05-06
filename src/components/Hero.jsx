import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaRocket, FaArrowRight, FaRegUser, FaChevronDown } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      
      {/* Social Links (Bottom Left) */}
      <div className="absolute bottom-10 left-6 md:left-12 flex gap-4 z-20 hidden md:flex">
        {[
          { icon: FaGithub, link: "https://github.com/varunsanjay123" },
          { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/varunsanjay123/" },
          { icon: FaEnvelope, link: "mailto:apvarunsanjay123@gmail.com" },
          { icon: SiLeetcode, link: "https://leetcode.com/u/Varun_Sanjay/" }
        ].map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-[#050505]/40 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>

      {/* Scroll Indicator (Bottom Center) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 hidden md:flex"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1 bg-white/5 backdrop-blur-sm">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 bg-gray-400 rounded-full" 
          />
        </div>
        <span className="text-gray-500 text-[10px] uppercase tracking-widest font-medium mt-1">Scroll Down</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <FaChevronDown className="text-gray-600 text-xs" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Hello Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-white/10 bg-[#050505]/40 backdrop-blur-md rounded-full px-5 py-2 text-sm font-medium text-gray-300 flex items-center justify-center gap-2 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
        >
          <span className="animate-pulse inline-block origin-bottom-right">👋</span> Hello, I'm
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-300 mb-6 pb-4 tracking-tight drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
        >
          Varun Sanjay
        </motion.h1>
        
        {/* Subtitle with lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center gap-4 md:gap-6 mb-8 w-full px-4 h-8"
        >
          <div className="h-[1px] flex-grow max-w-[60px] md:max-w-[120px] bg-gradient-to-r from-transparent to-blue-500/50"></div>
          <h2 className="text-blue-400 font-bold tracking-[0.15em] md:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-lg whitespace-nowrap drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] min-w-[200px] md:min-w-[300px] text-center">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Data Analyst',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <div className="h-[1px] flex-grow max-w-[60px] md:max-w-[120px] bg-gradient-to-l from-transparent to-blue-500/50"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 max-w-xl md:max-w-2xl mx-auto text-sm md:text-lg mb-12 leading-relaxed"
        >
          I build scalable, performant and beautiful web applications that create <span className="text-blue-400 font-semibold">real impact</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto px-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group relative bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_40px_rgba(79,70,229,0.7)] flex items-center justify-center gap-3 overflow-hidden border border-[#6366f1]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <FaRocket className="text-lg group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            Explore My Work
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group bg-[#050505]/40 backdrop-blur-sm hover:bg-white/5 border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FaRegUser className="text-lg group-hover:scale-110 transition-transform" />
            About Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;