import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';
import CustomCursor from './components/CustomCursor';

import { useScroll, motion, useSpring, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const nebula1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const nebula2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <StarsBackground />
      
      {/* Starry Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[10001] origin-left shadow-[0_0_15px_rgba(37,99,235,0.8)]"
        style={{ scaleX }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
      </motion.div>

      {/* Background Nebulae */}
      <motion.div 
        className="nebula-cloud bg-blue-900/40 top-[10%] -left-[10%]" 
        style={{ y: nebula1Y }}
      />
      <motion.div 
        className="nebula-cloud bg-purple-900/30 bottom-[20%] -right-[10%]" 
        style={{ y: nebula2Y }}
      />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
