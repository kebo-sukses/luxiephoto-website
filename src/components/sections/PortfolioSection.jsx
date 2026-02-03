import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Eye, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import { SectionTitle, Button, OptimizedImage, StaggerContainer, StaggerItem } from '@/components/common';
import { cn } from '@/utils/helpers';

const PortfolioSection = () => {
  const { getPortfolio } = useCMS();
  const portfolioItems = getPortfolio() || [];
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  // Get all items without category filter
  const displayItems = portfolioItems;

  // Gallery navigation functions
  const openLightbox = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const gallery = selectedItem.gallery && selectedItem.gallery.length > 0 
      ? selectedItem.gallery 
      : [selectedItem.image];
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const gallery = selectedItem.gallery && selectedItem.gallery.length > 0 
      ? selectedItem.gallery 
      : [selectedItem.image];
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
      if (e.key === 'Escape') closeLightbox();
    };

    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem, currentImageIndex]);

  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <SectionTitle
          subtitle="Our Portfolio"
          decorativeText="Gallery"
          title="Beautiful Love Stories"
          description="Browse through our collection of timeless wedding photographs capturing the most precious moments."
        />

        {/* Portfolio Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.08}
        >
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, index) => {
              const isLarge = index === 1 || index === 6;
              
              return (
                <StaggerItem
                  key={item.id}
                  className={cn(isLarge && 'md:row-span-2')}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative h-full"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image Container */}
                    <div
                      className={cn(
                        'relative overflow-hidden rounded-2xl cursor-pointer',
                        isLarge ? 'aspect-[3/5]' : 'aspect-[3/4]'
                      )}
                      onClick={() => openLightbox(item)}
                    >
                      <OptimizedImage
                        src={item.image}
                        alt={item.names}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                        containerClassName="w-full h-full"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredId === item.id ? 1 : 0,
                          y: hoveredId === item.id ? 0 : 20
                        }}
                        className="absolute top-4 right-4 flex gap-2"
                      >
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-all">
                          <Heart className="w-4 h-4" />
                        </button>
                      </motion.div>

                      {/* Content Overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredId === item.id ? 1 : 0,
                          y: hoveredId === item.id ? 0 : 20
                        }}
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                      >
                        <h3 className="font-serif text-xl mb-2">{item.names}</h3>
                        <div className="flex items-center text-sm text-white/70">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </motion.div>
                    </div>

                    {/* Info Below Image (visible on non-hover) */}
                    <div className="mt-4 text-center group-hover:opacity-0 transition-opacity">
                      <span className="font-serif italic text-2xl text-gray-200 block">
                        {item.location}
                      </span>
                      <h3 className="font-serif text-lg text-gray-900 -mt-2 relative z-10">
                        {item.names}
                      </h3>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </AnimatePresence>
        </StaggerContainer>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => window.location.href = '/gallery'}
          >
            View Full Gallery
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Modal with Gallery Slider */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            {(() => {
              const gallery = selectedItem.gallery && selectedItem.gallery.length > 0 
                ? selectedItem.gallery 
                : [selectedItem.image];
              
              if (gallery.length > 1) {
                return (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                );
              }
              return null;
            })()}

            {/* Main Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <OptimizedImage
                      src={
                        selectedItem.gallery && selectedItem.gallery.length > 0
                          ? selectedItem.gallery[currentImageIndex]
                          : selectedItem.image
                      }
                      alt={`${selectedItem.names} - Photo ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                      containerClassName="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Info & Thumbnails */}
              <div className="mt-6 text-center text-white">
                <h3 className="font-serif text-2xl lg:text-3xl">{selectedItem.names}</h3>
                <div className="flex items-center justify-center text-gray-400 mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedItem.location}
                </div>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                  {selectedItem.description}
                </p>

                {/* Thumbnail Navigation */}
                {(() => {
                  const gallery = selectedItem.gallery && selectedItem.gallery.length > 0 
                    ? selectedItem.gallery 
                    : [selectedItem.image];
                  
                  if (gallery.length > 1) {
                    return (
                      <div className="mt-6">
                        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
                          {gallery.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={cn(
                                'w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all',
                                currentImageIndex === idx 
                                  ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-black' 
                                  : 'opacity-50 hover:opacity-100'
                              )}
                            >
                              <OptimizedImage
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                                containerClassName="w-full h-full"
                              />
                            </button>
                          ))}
                        </div>
                        <p className="text-gray-500 text-sm mt-3">
                          {currentImageIndex + 1} / {gallery.length}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
