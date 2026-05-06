import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the sleek loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100000] bg-[#020617] flex flex-col items-center justify-center"
        >
          {/* Glowing Galaxy Spinner */}
          <div className="relative w-24 h-24 flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-2 rounded-full border-b-2 border-l-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            />
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] animate-pulse"></div>
          </div>
          
          <motion.h2 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm"
          >
            Entering Orbit...
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
