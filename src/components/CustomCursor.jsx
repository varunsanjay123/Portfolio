import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.5
      }
    }
  };

  return (
    <>
      {/* Outer Nebula Glow */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-blue-600/30 rounded-full pointer-events-none z-[9999] blur-xl shadow-[0_0_30px_15px_rgba(37,99,235,0.2)]"
        variants={variants}
        animate="default"
      />
      {/* Stellar Core */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          transition: { type: "tween", duration: 0 }
        }}
      />
      {/* Smaller Sparkling Particles */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-400 rounded-full pointer-events-none z-[9998] blur-[1px]"
        animate={{
          x: mousePosition.x + 10,
          y: mousePosition.y - 10,
          transition: { type: "spring", damping: 10, stiffness: 50, mass: 0.1 }
        }}
      />
    </>
  );
};

export default CustomCursor;
