import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import { OptimizedImage } from '@/components/common';
import { cn } from '@/utils/helpers';

const HeroSection = () => {
  const { getHero } = useCMS();
  const heroContent = getHero();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use images from CMS or fallback for background
  const heroImages = heroContent?.backgroundImages || [
    '/image/LUXIE_13.jpg',
    '/image/LUXIE_19.jpg',
    '/image/LUXIE_22.jpg',
  ];

  // Auto-change background image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <OptimizedImage
              src={heroImages[currentImageIndex]}
              alt="Wedding photography"
              className="w-full h-full"
              containerClassName="w-full h-full"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Overlay - More prominent for elegant look */}
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/40" />
      </div>

      {/* Subtle Decorative Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Minimal & Elegant */}
      <div className="relative z-10 container-custom w-full">
        <div className="flex items-center justify-center min-h-screen py-32">
          <div className="text-center max-w-4xl">
            
            {/* Subtitle - Elegant uppercase */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/60 text-xs sm:text-sm tracking-[0.4em] uppercase mb-8"
            >
              We Don't Live Forever. Memories Do.
            </motion.p>

            {/* Main Title - Script/Elegant Font */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-16"
            >
              Timeless Moments.
            </motion.h1>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-white/40 text-sm tracking-wider"
            >
              © 2025
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-white/40"
          >
            <span className="text-xs tracking-[0.3em] uppercase mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Image Indicators - Subtle dots */}
      <div className="absolute bottom-8 right-8 hidden lg:flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-500',
              currentImageIndex === index
                ? 'w-6 bg-white/60'
                : 'bg-white/20 hover:bg-white/40'
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
