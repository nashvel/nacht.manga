import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1800px] z-50 mix-blend-difference"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center justify-between px-6 py-12 max-w-[1200px] mx-auto">
        {/* Logo */}
        <motion.a 
          href="./" 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-[110px] h-[40px] bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">NACHT</span>
          </div>
        </motion.a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-white">
          <motion.span 
            className="text-sm font-semibold cursor-pointer hover:opacity-70 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            Manga
          </motion.span>
          <motion.span 
            className="text-sm font-semibold cursor-pointer hover:opacity-70 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            Nacht
          </motion.span>
          <motion.a 
            href="./contact" 
            className="text-sm font-semibold hover:opacity-70 transition-opacity px-4 py-2 border border-white/30 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            transition={{ duration: 0.2 }}
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
