import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageGridAnimation = ({ onComplete, animationComplete }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Grid images data
  const gridImages = [
    { id: 1, src: '/images/grid-image/image-01.png', size: 'large', position: 'top-left' },
    { id: 2, src: '/images/grid-image/image-02.png', size: 'medium', position: 'top-center' },
    { id: 3, src: '/images/grid-image/image-03.png', size: 'small', position: 'top-right' },
    { id: 4, src: '/images/grid-image/image-04.png', size: 'medium', position: 'center-left' },
    { id: 5, src: '/images/grid-image/image-05.png', size: 'large', position: 'center-right' },
    { id: 6, src: '/images/grid-image/image-06.png', size: 'small', position: 'bottom-center' },
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Call onComplete after animation finishes
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3500); // Animation completes after ~3.5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Animation variants for the container
  const containerVariants = {
    hidden: {
      scale: 0.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15,
      },
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Animation variants for individual images
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Get image size classes
  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'w-80 h-96';
      case 'medium':
        return 'w-64 h-80';
      case 'small':
        return 'w-48 h-64';
      default:
        return 'w-64 h-80';
    }
  };

  // Get position classes for grid layout
  const getPositionClasses = (position) => {
    switch (position) {
      case 'top-left':
        return 'col-start-1 row-start-1';
      case 'top-center':
        return 'col-start-2 row-start-1';
      case 'top-right':
        return 'col-start-3 row-start-1';
      case 'center-left':
        return 'col-start-1 row-start-2';
      case 'center-right':
        return 'col-start-3 row-start-2';
      case 'bottom-center':
        return 'col-start-2 row-start-3';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#f2eaef] flex items-center justify-center p-8 overflow-hidden">
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Grid Container - Manga Panel Layout */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-5xl mx-auto">
          {gridImages.map((image, index) => {
            const isCenterImage = index === 2; // Make the 3rd image (index 2) the center focus
            
            return (
              <motion.div
                key={image.id}
                className={`${
                  isCenterImage 
                    ? 'col-span-1 row-span-2 flex items-center justify-center' 
                    : 'flex items-center justify-center'
                } relative`}
                variants={imageVariants}
                custom={index}
              >
                <motion.div
                  className={`${
                    isCenterImage 
                      ? 'w-80 h-96' 
                      : getSizeClasses(image.size)
                  } rounded-xl overflow-hidden shadow-xl bg-white relative`}
                  animate={isCenterImage && animationComplete ? {
                    scale: 3,
                    zIndex: 50,
                    transition: { 
                      duration: 2, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.5
                    }
                  } : {}}
                >
                  <img
                    src={image.src}
                    alt={`Manga panel ${image.id}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Overlay effect for center image */}
                  {isCenterImage && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ opacity: 0, x: '-100%' }}
                      animate={animationComplete ? {
                        opacity: [0, 1, 0],
                        x: ['100%', '0%', '-100%'],
                        transition: { 
                          duration: 1.5, 
                          delay: 1.5,
                          ease: "easeInOut"
                        }
                      } : {}}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>



        {/* Decorative floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`decoration-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGridAnimation;
