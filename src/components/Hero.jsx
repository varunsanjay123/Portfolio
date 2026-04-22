import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.5 },
  },
};

const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const Hero = () => {
  const name = "Varun Sanjay";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter flex justify-center flex-wrap"
        >
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={childVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-xl md:text-4xl text-blue-500 font-bold mb-12 tracking-tight h-12"
        >
          <TypeAnimation
            sequence={[
              'I am Software Developer',
              2000,
              'I am Data Analyst',
              2000,
              'I am Problem Solver',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(37,99,235,0.6)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-black text-lg transition-all duration-300 relative z-10"
        >
          Explore My Work
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;