import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import { Button, OptimizedImage } from '@/components/common';
import { cn } from '@/utils/helpers';

// WhatsApp and TikTok icons (custom SVG)
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const HeroSection = () => {
  const { getHero, getSocialMedia } = useCMS();
  const heroContent = getHero();
  const social = getSocialMedia();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rightSlideIndex, setRightSlideIndex] = useState(0);

  // Use images from CMS or fallback for background
  const heroImages = heroContent?.backgroundImages || [
    '/image/LUXIE_13.jpg',
    '/image/LUXIE_19.jpg',
    '/image/LUXIE_22.jpg',
  ];

  // Gallery images for right side slider (use same images or separate gallery)
  const galleryImages = heroContent?.galleryImages || heroImages;

  // Auto-change background image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-change right gallery slider
  useEffect(() => {
    const interval = setInterval(() => {
      setRightSlideIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Manual navigation for right slider
  const nextSlide = () => setRightSlideIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setRightSlideIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // Build social links from CMS data
  const socialLinks = [
    social?.instagram && { icon: Instagram, href: social.instagram, label: 'Instagram' },
    social?.facebook && { icon: Facebook, href: social.facebook, label: 'Facebook' },
    social?.twitter && { icon: Twitter, href: social.twitter, label: 'Twitter' },
    social?.youtube && { icon: Youtube, href: social.youtube, label: 'YouTube' },
    social?.tiktok && { icon: TikTokIcon, href: social.tiktok, label: 'TikTok' },
    social?.whatsapp && { icon: WhatsAppIcon, href: `https://wa.me/${social.whatsapp}`, label: 'WhatsApp' },
  ].filter(Boolean);

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
              className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {heroContent.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                variant="primary-outline"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => window.open(heroContent.ctaButtonUrl || '/contact', '_blank')}
              >
                {heroContent.ctaButtonText || 'Get In Touch'}
              </Button>
            </motion.div>

            {/* Social Links - Horizontal below CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-3 mb-10"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-primary-400 hover:text-primary-400 hover:bg-primary-400/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0"
            >
              {(heroContent?.stats || []).map((stat, index) => (
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

          {/* Right Content - Image Gallery Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* Main Gallery Card */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md ml-auto rounded-2xl overflow-hidden group">
                {/* Image Slider */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rightSlideIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <OptimizedImage
                      src={galleryImages[rightSlideIndex]}
                      alt={`Gallery image ${rightSlideIndex + 1}`}
                      className="w-full h-full"
                      containerClassName="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setRightSlideIndex(index)}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all duration-300',
                        rightSlideIndex === index
                          ? 'w-6 bg-white'
                          : 'bg-white/50 hover:bg-white/70'
                      )}
                    />
                  ))}
                </div>
              </div>

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
