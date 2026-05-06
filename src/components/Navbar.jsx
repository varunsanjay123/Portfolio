import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[1000] transition-all duration-300 rounded-2xl border border-white/10 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#050505]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(59,130,246,0.15)] py-3' 
          : 'bg-[#050505]/40 backdrop-blur-md py-4'
      }`}
    >
      <div className="px-6">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center group">
            <span className="text-3xl font-black tracking-tighter cursor-pointer bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-300">VS</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <div key={section} className="relative flex flex-col items-center justify-center h-full pt-1">
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-semibold tracking-wide transition-all duration-300 pb-1 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
                {activeSection === section && (
                  <motion.div layoutId="navIndicator" className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white transition-colors">
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {['hero', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-semibold tracking-wide text-left transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;