import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageGridAnimation from '../components/ImageGridAnimation';
import Navigation from '../components/Navigation';

const FramerPortfolio = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    // Start transition after animation completes
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setStartTransition(true);
      // Hide animation after center image zoom completes
      setTimeout(() => setShowAnimation(false), 2500);
    }, 4000); // Animation runs for about 4 seconds, then center zoom

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f2eaef] font-['DM_Sans'] text-[#131014]">
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#f2eaef]"
            exit={{ 
              scale: 5,
              opacity: 0,
              filter: "blur(20px)"
            }}
            transition={{ 
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <ImageGridAnimation 
              onComplete={() => setAnimationComplete(true)}
              animationComplete={animationComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <motion.div
        initial={{ 
          opacity: 0,
          scale: 0.9,
          y: 50
        }}
        animate={{ 
          opacity: showAnimation ? 0 : 1,
          scale: showAnimation ? 0.9 : 1,
          y: showAnimation ? 50 : 0
        }}
        transition={{ 
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: showAnimation ? 0 : 0.3
        }}
      >
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f2eaef] via-[#e8d5e0] to-[#d4c1d0]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Hero Content */}
          <motion.div 
            className="relative z-10 text-center max-w-6xl mx-auto px-6"
            initial={{ 
              opacity: 0, 
              y: 100,
              scale: 0.8
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[0.9] tracking-[-0.07em] mb-8 text-[#131014]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Creative
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-[#131014] to-[#6b5b73] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Portfolio
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl lg:text-2xl opacity-70 max-w-3xl mx-auto mb-12 text-[#131014] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Exploring the intersection of design, technology, and storytelling through 
              innovative digital experiences that captivate and inspire.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0, ease: [0.25, 0.46, 0.45, 0.94] }}
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
        </section>

        {/* Main Content Sections */}
        <main className="relative z-20 bg-[#f2eaef]">
        {/* About Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.07em] mb-6">
                  About the Work
                </h2>
                <p className="text-lg opacity-80 leading-relaxed">
                  This portfolio showcases a collection of digital experiences that blend 
                  creative storytelling with cutting-edge technology. Each project represents 
                  a unique exploration of design principles, user experience, and technical innovation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-[#e8d5e0] to-[#d4c1d0] rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.07em] mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <motion.div
                  key={item}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#e8d5e0] to-[#d4c1d0] rounded-xl mb-4 overflow-hidden">
                    <div className="w-full h-full bg-[#131014] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-sm opacity-70">Creative exploration in digital design</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.07em] mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Design Systems',
                'React Development',
                'Motion Graphics',
                'User Experience',
                'Creative Direction',
                'Brand Identity',
                'Web Development',
                'Digital Strategy'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-[#f2eaef] rounded-full mx-auto mb-4"></div>
                  <h3 className="text-sm font-semibold">{skill}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.07em] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Create Together
            </motion.h2>
            
            <motion.p 
              className="text-lg opacity-80 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to bring your vision to life? Let's discuss how we can work together 
              to create something extraordinary.
            </motion.p>

            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-4 bg-white/10 border border-[#131014]/10 rounded-full 
                           text-[#131014] placeholder-[#131014]/60 focus:outline-none focus:border-[#131014]/30
                           font-semibold text-sm tracking-[-0.03em]"
                />
                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#131014] text-white rounded-full font-semibold
                           hover:bg-[#131014]/90 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

        {/* Footer */}
        <footer className="py-16 px-6 bg-[#131014] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm opacity-70">
              © 2024 Nacht Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default FramerPortfolio;
