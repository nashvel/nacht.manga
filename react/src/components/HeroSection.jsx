import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f2eaef] via-[#e8d5e0] to-[#d4c1d0]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[0.9] tracking-[-0.07em] mb-8 text-[#131014]"
          variants={itemVariants}
        >
          <span className="block">Creative</span>
          <span className="block bg-gradient-to-r from-[#131014] to-[#6b5b73] bg-clip-text text-transparent">
            Portfolio
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl lg:text-2xl opacity-70 max-w-3xl mx-auto mb-12 text-[#131014] leading-relaxed"
          variants={itemVariants}
        >
          Exploring the intersection of design, technology, and storytelling through 
          innovative digital experiences that captivate and inspire.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-[#131014] text-white rounded-full font-semibold text-lg
                     hover:bg-[#131014]/90 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Work
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-[#131014] text-[#131014] rounded-full font-semibold text-lg
                     hover:bg-[#131014] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-[#131014]/60 mb-2 font-medium">SCROLL</span>
          <div className="w-6 h-10 border-2 border-[#131014]/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-[#131014]/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-8 w-4 h-4 bg-[#131014]/20 rounded-full"
        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-12 w-6 h-6 bg-[#131014]/15 rounded-full"
        animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-16 w-3 h-3 bg-[#131014]/25 rounded-full"
        animate={{ y: [-5, 15, -5], x: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
