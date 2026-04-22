import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          © 2024 Varun. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;