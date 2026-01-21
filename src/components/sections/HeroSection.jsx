import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, ChevronDown, Instagram, Facebook, Twitter } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import { Button, OptimizedImage } from '@/components/common';
import { cn } from '@/utils/helpers';

const HeroSection = () => {
  const { getHero } = useCMS();
  const heroContent = getHero();
  
  const [showVideo, setShowVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use images from CMS or fallback
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
  }, []);

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

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
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large text decoration */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -left-20 top-1/4 font-serif italic text-white text-[20vw] leading-none whitespace-nowrap"
        >
          Wedding
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -right-20 bottom-20 font-serif italic text-white text-[15vw] leading-none whitespace-nowrap"
        >
          Photography
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Social Links - Vertical on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex flex-col space-y-4 absolute left-8 top-1/2 -translate-y-1/2"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-primary-400 hover:text-primary-400 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
              <div className="w-px h-16 bg-white/20 mx-auto" />
            </motion.div>

            {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex lg:hidden justify-center space-x-4 mb-8"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-primary-400 hover:text-primary-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary-400 text-sm tracking-[0.3em] uppercase mb-6"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              {heroContent.title}
              <br />
              <span className="italic text-primary-400">{heroContent.titleHighlight}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 mb-10"
            >
              {heroContent.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => window.location.href = '/portfolio'}
              >
                {heroContent.cta}
              </Button>
              <Button
                variant="outline-white"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                {heroContent.ctaSecondary}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10 max-w-md mx-auto lg:mx-0"
            >
              {heroContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-serif text-3xl md:text-4xl text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Video Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* Main Video Card */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/5] max-w-md ml-auto rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                  alt="Wedding Video Preview"
                  className="w-full h-full"
                  containerClassName="w-full h-full"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-white/20 animate-ping" />
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-12 top-1/4 bg-white rounded-xl shadow-2xl p-5 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary-500 fill-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Watch Story</h4>
                    <p className="text-xs text-gray-500">2:45 min</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">See how we capture your special moments</p>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white/50"
          >
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/PEIgbYXgKQk?autoplay=1"
                title="Wedding Video"
                className="w-full h-full rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <span className="text-sm uppercase tracking-wider">Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 hidden lg:flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              currentImageIndex === index
                ? 'w-8 bg-primary-500'
                : 'bg-white/30 hover:bg-white/50'
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
